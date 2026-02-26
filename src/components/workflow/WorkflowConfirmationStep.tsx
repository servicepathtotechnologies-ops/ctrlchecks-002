/**
 * Workflow Confirmation Step Component
 * 
 * Displays workflow confirmation UI with:
 * - Workflow goal
 * - Tools used
 * - Step-by-step flow
 * - Assumptions
 * - Confidence score
 * - Action buttons (Confirm, Change Tools, Regenerate)
 */

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Settings2, 
  RefreshCw, 
  ArrowRight,
  Info,
  Zap,
  Target,
  Workflow,
  Lightbulb
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

interface WorkflowExplanation {
  goal: string;
  trigger: {
    type: string;
    description: string;
  };
  services_used: string[];
  steps: Array<{
    step_number: number;
    node_id: string;
    node_type: string;
    description: string;
    tool_used?: string;
    tool_reasoning?: string;
    is_ai_assumption: boolean;
    input_sources: string[];
    output_data: string[];
  }>;
  data_flow: {
    description: string;
    path: string[];
  };
  assumptions: Array<{
    assumption: string;
    reasoning: string;
    requires_confirmation: boolean;
  }>;
}

interface WorkflowConfirmationStepProps {
  workflowId: string;
  workflowExplanation?: WorkflowExplanation;
  confidenceScore?: number;
  workflow: {
    nodes: any[];
    edges: any[];
  };
  onConfirm: () => void;
  onChangeTools: () => void;
  onRegenerate: () => void;
  isLoading?: boolean;
}

export function WorkflowConfirmationStep({
  workflowId,
  workflowExplanation,
  confidenceScore,
  workflow,
  onConfirm,
  onChangeTools,
  onRegenerate,
  isLoading = false,
}: WorkflowConfirmationStepProps) {
  const { toast } = useToast();
  const [isConfirming, setIsConfirming] = useState(false);

  const handleConfirm = async () => {
    setIsConfirming(true);
    try {
      await onConfirm();
    } catch (error) {
      console.error('Confirmation failed:', error);
      toast({
        title: 'Confirmation Failed',
        description: error instanceof Error ? error.message : 'Failed to confirm workflow',
        variant: 'destructive',
      });
    } finally {
      setIsConfirming(false);
    }
  };

  const goal = workflowExplanation?.goal || 'Automate workflow based on your requirements';
  const servicesUsed = workflowExplanation?.services_used || [];
  const steps = workflowExplanation?.steps || [];
  const assumptions = workflowExplanation?.assumptions || [];
  const dataFlow = workflowExplanation?.data_flow?.description || 'Data flows through the workflow nodes sequentially';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-4xl mx-auto space-y-6"
    >
      <Card className="border-2">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                Review Your Workflow
              </CardTitle>
              <CardDescription className="mt-2">
                Please review the workflow before confirming. You can modify tools or regenerate if needed.
              </CardDescription>
            </div>
            {confidenceScore !== undefined && (
              <Badge 
                variant={confidenceScore >= 0.9 ? "default" : confidenceScore >= 0.7 ? "secondary" : "outline"}
                className="text-sm px-3 py-1"
              >
                Confidence: {(confidenceScore * 100).toFixed(0)}%
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <ScrollArea className="h-[calc(100vh-400px)] pr-4">
            <div className="space-y-6">
              {/* Workflow Goal */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <Target className="h-5 w-5 text-primary" />
                  Workflow Goal
                </div>
                <p className="text-muted-foreground pl-7">{goal}</p>
              </div>

              {/* Trigger */}
              {workflowExplanation?.trigger && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-lg font-semibold">
                    <Zap className="h-5 w-5 text-primary" />
                    Trigger
                  </div>
                  <p className="text-muted-foreground pl-7">{workflowExplanation.trigger.description}</p>
                </div>
              )}

              {/* Tools Used */}
              {servicesUsed.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-lg font-semibold">
                    <Settings2 className="h-5 w-5 text-primary" />
                    Tools & Services Used
                  </div>
                  <div className="flex flex-wrap gap-2 pl-7">
                    {servicesUsed.map((service, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Step-by-Step Flow */}
              {steps.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-lg font-semibold">
                    <Workflow className="h-5 w-5 text-primary" />
                    Step-by-Step Flow
                  </div>
                  <div className="space-y-3 pl-7">
                    {steps.map((step, index) => (
                      <motion.div
                        key={step.node_id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border-l-2 border-primary/30 pl-4 py-2 space-y-1"
                      >
                        <div className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                            {step.step_number}
                          </div>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center gap-2">
                              <p className="font-medium">{step.description}</p>
                              {step.is_ai_assumption && (
                                <Badge variant="outline" className="text-xs">
                                  <AlertTriangle className="h-3 w-3 mr-1" />
                                  AI Assumption
                                </Badge>
                              )}
                            </div>
                            {step.tool_used && (
                              <p className="text-sm text-muted-foreground">
                                Tool: <span className="font-medium">{step.tool_used}</span>
                              </p>
                            )}
                            {step.tool_reasoning && (
                              <p className="text-xs text-muted-foreground italic">
                                {step.tool_reasoning}
                              </p>
                            )}
                            {step.input_sources.length > 0 && (
                              <p className="text-xs text-muted-foreground">
                                Input from: {step.input_sources.join(', ')}
                              </p>
                            )}
                            {step.output_data.length > 0 && (
                              <p className="text-xs text-muted-foreground">
                                Output: {step.output_data.join(', ')}
                              </p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Data Flow */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <ArrowRight className="h-5 w-5 text-primary" />
                  Data Flow
                </div>
                <p className="text-muted-foreground pl-7">{dataFlow}</p>
              </div>

              {/* Assumptions */}
              {assumptions.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-lg font-semibold">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    AI Assumptions
                  </div>
                  <div className="space-y-2 pl-7">
                    {assumptions.map((assumption, index) => (
                      <Alert
                        key={index}
                        variant={assumption.requires_confirmation ? "default" : "secondary"}
                        className={assumption.requires_confirmation ? "border-yellow-500/50 bg-yellow-500/10" : ""}
                      >
                        <AlertTriangle className="h-4 w-4" />
                        <AlertDescription>
                          <div className="space-y-1">
                            <p className="font-medium">{assumption.assumption}</p>
                            <p className="text-sm text-muted-foreground">{assumption.reasoning}</p>
                          </div>
                        </AlertDescription>
                      </Alert>
                    ))}
                  </div>
                </div>
              )}

              {/* Confidence Score Details */}
              {confidenceScore !== undefined && confidenceScore < 0.9 && (
                <Alert variant="secondary">
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    <p className="text-sm">
                      This workflow has a confidence score of {(confidenceScore * 100).toFixed(0)}%. 
                      Some assumptions were made during generation. Please review carefully before confirming.
                    </p>
                  </AlertDescription>
                </Alert>
              )}
            </div>
          </ScrollArea>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
            <Button
              onClick={onRegenerate}
              variant="outline"
              className="flex-1"
              disabled={isLoading || isConfirming}
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Regenerate
            </Button>
            <Button
              onClick={onChangeTools}
              variant="outline"
              className="flex-1"
              disabled={isLoading || isConfirming}
            >
              <Settings2 className="mr-2 h-4 w-4" />
              Change Tools
            </Button>
            <Button
              onClick={handleConfirm}
              className="flex-1"
              disabled={isLoading || isConfirming}
            >
              {isConfirming ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="mr-2"
                  >
                    <RefreshCw className="h-4 w-4" />
                  </motion.div>
                  Confirming...
                </>
              ) : (
                <>
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Confirm & Continue
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
