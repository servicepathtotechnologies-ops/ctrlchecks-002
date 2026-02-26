import { memo } from 'react';
import { Handle, Position, NodeProps, Node } from '@xyflow/react';
import { cn } from '@/lib/utils';
import { FileText, Clock, CheckCircle2, XCircle, Bug } from 'lucide-react';
import { useDebugStore } from '@/stores/debugStore';

interface FormField {
  id: string;
  label: string;
  name: string;
  type: 'text' | 'email' | 'number' | 'textarea' | 'select' | 'checkbox' | 'radio';
  required: boolean;
  options?: Array<{ label: string; value: string }>;
  placeholder?: string;
  defaultValue?: string;
}

interface FormTriggerNodeData extends Record<string, unknown> {
  type: 'form';
  label: string;
  category: string;
  icon: string;
  config: {
    formTitle: string;
    formDescription: string;
    fields: FormField[];
    submitButtonText: string;
    successMessage: string;
    redirectUrl: string;
  };
  executionStatus?: 'idle' | 'running' | 'success' | 'error' | 'waiting';
}

type FormTriggerNodeProps = Node<FormTriggerNodeData>;

const FormTriggerNode = memo(({ data, selected, id }: NodeProps<FormTriggerNodeProps>) => {
  const { openDebug } = useDebugStore();

  const config = data?.config || {
    formTitle: 'Form Submission',
    formDescription: '',
    fields: [],
    submitButtonText: 'Submit',
    successMessage: 'Thank you for your submission!',
    redirectUrl: '',
  };

  const status = data?.executionStatus || 'idle';
  const fields = Array.isArray(config.fields) ? config.fields : [];

  // Determine border color based on status
  const getBorderColor = () => {
    if (status === 'waiting') return 'border-yellow-500 border-2';
    if (status === 'success') return 'border-green-500 border-2';
    if (status === 'error') return 'border-red-500 border-2';
    if (status === 'running') return 'border-blue-500 border-2';
    return selected ? 'border-primary ring-2 ring-primary/20' : 'border-border hover:border-muted-foreground/50';
  };

  // Get field count for display
  const fieldCount = fields.length;
  const formTitle = config.formTitle || 'Form Submission';

  const handleDebugClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    openDebug(id);
  };

  return (
    <div
      className={cn(
        'px-5 py-4 rounded-lg border-2 bg-card shadow-md transition-all relative',
        getBorderColor()
      )}
      style={{ width: '240px', minHeight: '70px' }}
    >
      {/* Top handle (input) – mostly unused for triggers but kept for consistency */}
      <Handle
        type="target"
        id="input"
        position={Position.Top}
        isConnectable={true}
        className="!w-4 !h-4 !bg-muted-foreground !border-2 !border-background"
      />

      <div className="flex items-center gap-2">
        <FileText className="h-4 w-4 text-primary flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-sm leading-tight break-words hyphens-auto">
            {formTitle}
          </div>
          <div className="text-xs text-muted-foreground leading-tight break-words mt-0.5">
            {fieldCount} {fieldCount === 1 ? 'field' : 'fields'}
            {status === 'waiting' && ' • Waiting...'}
            {status === 'success' && ' • Submitted'}
            {status === 'error' && ' • Error'}
          </div>
        </div>
        {status === 'waiting' && (
          <Clock className="h-4 w-4 text-yellow-600 flex-shrink-0 animate-pulse" />
        )}
        {status === 'success' && (
          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
        )}
        {status === 'error' && (
          <XCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
        )}
        {/* Debug button – same behavior as other nodes */}
        <button
          onClick={handleDebugClick}
          className={cn(
            'h-6 w-6 flex items-center justify-center rounded-md flex-shrink-0',
            'text-muted-foreground/60 hover:text-foreground/80 hover:bg-muted/60',
            'transition-colors duration-150',
            'border border-border/40 hover:border-border',
          )}
          title="Debug Node"
          aria-label="Debug Node"
        >
          <Bug className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Bottom handle (output) – this is where edges should start from */}
      <Handle
        type="source"
        id="output"
        position={Position.Bottom}
        isConnectable={true}
        className="!w-4 !h-4 !bg-muted-foreground !border-2 !border-background"
      />
    </div>
  );
});

FormTriggerNode.displayName = 'FormTriggerNode';

export default FormTriggerNode;

