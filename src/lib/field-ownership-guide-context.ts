export type FieldOwnershipGuideSelection = {
  nodeId: string;
  fieldName: string;
};

export type FieldOwnershipGuideContextInput = {
  prompt: string;
  workflowId?: string | null;
  nodes: any[];
  edges: any[];
  ownershipQuestions: any[];
  fillModeValues: Record<string, string>;
  effectiveModes: Record<string, string>;
  credentialStatuses?: any[] | null;
  credentialWizardRows?: any[] | null;
  selectedField?: FieldOwnershipGuideSelection | null;
};

function safeArray<T>(v: T[] | null | undefined): T[] {
  return Array.isArray(v) ? v : [];
}

export function buildFieldOwnershipGuideContext(input: FieldOwnershipGuideContextInput) {
  const ownershipRows = safeArray(input.ownershipQuestions).map((q: any) => {
    const nodeId = String(q?.nodeId || "");
    const fieldName = String(q?.fieldName || "");
    const modeKey = `mode_${nodeId}_${fieldName}`;
    return {
      questionId: String(q?.id || `${nodeId}_${fieldName}`),
      nodeId,
      nodeLabel: String(q?.nodeLabel || ""),
      nodeType: String(q?.nodeType || ""),
      fieldName,
      label: String(q?.text || q?.label || fieldName),
      category: String(q?.category || ""),
      ownershipClass: String(q?.ownershipClass || ""),
      ownershipUiMode: String(q?.ownershipUiMode || ""),
      supportsRuntimeAI: q?.supportsRuntimeAI !== false,
      supportsBuildtimeAI: q?.supportsBuildtimeAI !== false,
      fillModeDefault: String(q?.fillModeDefault || "manual_static"),
      selectedMode: String(input.fillModeValues[modeKey] || ""),
      effectiveMode: String(input.effectiveModes[modeKey] || ""),
      required: q?.required !== false,
      description: String(q?.description || ""),
      aiFilledAtBuildTime: Boolean(q?.aiFilledAtBuildTime),
      aiUsesRuntime: Boolean(q?.aiUsesRuntime),
      isUnlockableCredential: Boolean(q?.isUnlockableCredential),
      ownershipLockReason: String(q?.ownershipLockReason || ""),
    };
  });

  return {
    workflowId: input.workflowId || null,
    prompt: String(input.prompt || ""),
    graph: {
      nodes: safeArray(input.nodes),
      edges: safeArray(input.edges),
    },
    selectedField: input.selectedField || null,
    ownershipRows,
    credentialStatuses: safeArray(input.credentialStatuses),
    credentialWizardRows: safeArray(input.credentialWizardRows),
    generatedAt: new Date().toISOString(),
  };
}
