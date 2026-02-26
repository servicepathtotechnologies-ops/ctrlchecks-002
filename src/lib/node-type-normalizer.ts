/**
 * Node Type Normalization Layer
 * 
 * Maps backend pipeline node types to frontend React Flow node types.
 * Handles:
 * - Node type name mapping
 * - Handle ID normalization (sourceOutput → sourceHandle, targetInput → targetHandle)
 * - Edge connection schema normalization
 * - Component registration mapping
 */

import { Node, Edge } from '@xyflow/react';
import { NODE_TYPES } from '@/components/workflow/nodeTypes';

/**
 * Backend to Frontend Node Type Mapping
 * Maps backend node type names to frontend React Flow component types
 * 
 * Strategy:
 * - Most nodes use 'custom' component with actual type in data.type
 * - Special nodes (form, manual_trigger, set_variable) have dedicated components
 * - All nodes must be registered in WorkflowCanvas.tsx nodeTypes map
 */
const NODE_TYPE_MAP: Record<string, string> = {
  // Trigger nodes - use specific component types if available, otherwise 'custom'
  'manual_trigger': 'manual_trigger', // Has dedicated component registration
  'schedule': 'custom',
  'webhook': 'custom',
  'form': 'form', // Has dedicated FormTriggerNode component
  'interval': 'custom',
  'chat_trigger': 'custom',
  'error_trigger': 'custom',
  'workflow_trigger': 'custom',
  
  // Logic nodes
  'if_else': 'custom',
  'switch': 'custom',
  'loop': 'custom',
  
  // Data manipulation nodes
  'set_variable': 'set_variable', // Has dedicated component registration
  'set': 'custom',
  'edit_fields': 'custom',
  'json_parser': 'custom',
  'text_formatter': 'custom',
  'merge_data': 'custom',
  
  // All other nodes use 'custom' with actual type in data.type
  // This is the default strategy for maximum compatibility
};

/**
 * Normalize backend node to frontend React Flow node format
 */
export function normalizeBackendNode(backendNode: any): Node {
  const actualNodeType = backendNode.data?.type || backendNode.type || 'unknown';
  
  // Map to frontend React Flow component type
  const frontendType = NODE_TYPE_MAP[actualNodeType] || 'custom';
  
  // ✅ CRITICAL: Preserve config from multiple possible locations
  // Config can be in: node.data.config, node.config, or node.data (spread)
  const preservedConfig = backendNode.data?.config || backendNode.config || {};
  
  // Ensure node has proper structure
  const normalizedNode: Node = {
    id: backendNode.id,
    type: frontendType,
    position: backendNode.position || { x: 0, y: 0 },
    data: {
      type: actualNodeType, // Actual node type stored here
      label: backendNode.data?.label || getNodeLabel(actualNodeType),
      category: backendNode.data?.category || getNodeCategory(actualNodeType),
      icon: backendNode.data?.icon || getNodeIcon(actualNodeType),
      // ✅ CRITICAL: Spread other data fields first, then override with preserved config
      // This ensures config is not overwritten by spreading backendNode.data
      ...(backendNode.data || {}),
      // ✅ CRITICAL: Re-apply config after spread to ensure it takes precedence
      config: preservedConfig,
    },
  };
  
  return normalizedNode;
}

/**
 * Normalize backend edge to frontend React Flow edge format
 * Converts sourceOutput/targetInput to sourceHandle/targetHandle
 */
export function normalizeBackendEdge(backendEdge: any): Edge {
  const normalizedEdge: Edge = {
    id: backendEdge.id || `edge_${Date.now()}_${Math.random()}`,
    source: backendEdge.source,
    target: backendEdge.target,
    sourceHandle: backendEdge.sourceHandle || backendEdge.sourceOutput || 'output',
    targetHandle: backendEdge.targetHandle || backendEdge.targetInput || 'input',
    type: backendEdge.type || 'default',
    ...(backendEdge.data ? { data: backendEdge.data } : {}),
  };
  
  return normalizedEdge;
}

/**
 * Normalize entire workflow (nodes + edges) from backend format to frontend format
 */
export function normalizeBackendWorkflow(backendWorkflow: {
  nodes: any[];
  edges: any[];
}): { nodes: Node[]; edges: Edge[] } {
  const normalizedNodes = backendWorkflow.nodes.map(normalizeBackendNode);
  const normalizedEdges = backendWorkflow.edges.map(normalizeBackendEdge);
  
  return {
    nodes: normalizedNodes,
    edges: normalizedEdges,
  };
}

/**
 * Get node label from node type definition
 */
function getNodeLabel(nodeType: string): string {
  const definition = NODE_TYPES.find(nt => nt.type === nodeType);
  return definition?.label || nodeType;
}

/**
 * Get node category from node type definition
 */
function getNodeCategory(nodeType: string): string {
  const definition = NODE_TYPES.find(nt => nt.type === nodeType);
  return definition?.category || 'data';
}

/**
 * Get node icon from node type definition
 */
function getNodeIcon(nodeType: string): string {
  const definition = NODE_TYPES.find(nt => nt.type === nodeType);
  return definition?.icon || 'Box';
}

/**
 * Validate that all node types in workflow are registered in frontend
 */
export function validateNodeTypesRegistered(nodes: Node[]): {
  valid: boolean;
  missingTypes: string[];
  warnings: string[];
} {
  const registeredTypes = new Set(['custom', 'form', 'manual_trigger', 'set_variable']);
  const missingTypes: string[] = [];
  const warnings: string[] = [];
  
  nodes.forEach(node => {
    const nodeType = node.type;
    const actualType = (node.data as any)?.type;
    
    // Check if React Flow component type is registered
    if (!registeredTypes.has(nodeType)) {
      missingTypes.push(nodeType);
      warnings.push(`Node type "${nodeType}" (actual: "${actualType}") is not registered in React Flow nodeTypes map`);
    }
    
    // Check if actual node type exists in NODE_TYPES registry
    if (actualType && !NODE_TYPES.find(nt => nt.type === actualType)) {
      warnings.push(`Node type "${actualType}" is not defined in NODE_TYPES registry`);
    }
  });
  
  return {
    valid: missingTypes.length === 0,
    missingTypes,
    warnings,
  };
}

/**
 * Get all node types that need to be registered in React Flow nodeTypes map
 */
export function getRequiredNodeTypes(nodes: Node[]): string[] {
  const requiredTypes = new Set<string>();
  
  nodes.forEach(node => {
    const nodeType = node.type;
    if (nodeType && nodeType !== 'custom') {
      requiredTypes.add(nodeType);
    }
  });
  
  return Array.from(requiredTypes);
}
