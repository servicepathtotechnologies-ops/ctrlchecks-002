import { useState, useMemo } from 'react';
import { Search, X, ChevronDown,
  Play, Webhook, Clock, Globe, Brain, Sparkles, Gem, Link, GitBranch, 
  GitMerge, Repeat, Timer, ShieldAlert, Code, Braces, Table, Type, 
  Combine, Send, Mail, MessageSquare, Database, Box, FileText, Heart,
  Filter, Variable, Hash, MessageCircle, DatabaseZap, FileOutput,
  Calendar, CheckCircle, Users,
  XCircle, Layers, Edit, Edit3, Tag, Code2, ListChecks, ArrowUpDown, List, Terminal,
  Calculator, Lock, Rss, Bell, Activity, AlertCircle, Image, Target,
  Key, Shield, CreditCard, ShoppingCart, BarChart, TrendingUp, Bot
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { NODE_CATEGORIES, NODE_TYPES, NodeTypeDefinition } from './nodeTypes';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Play, Webhook, Clock, Globe, Brain, Sparkles, Gem, Link, GitBranch,
  GitMerge, Repeat, Timer, ShieldAlert, Code, Braces, Table, Type,
  Combine, Send, Mail, MessageSquare, Database, Box, FileText, Heart,
  Filter, Variable, Hash, MessageCircle, DatabaseZap, FileOutput,
  Calendar, CheckCircle, Users,
  XCircle, Layers, Edit, Edit3, Tag, Code2, ListChecks, ArrowUpDown, List, Terminal,
  Calculator, Lock, Rss, Bell, Activity, AlertCircle, Image, Target,
  Key, Shield, CreditCard, ShoppingCart, BarChart, TrendingUp, Bot
};

interface NodeLibraryProps {
  onDragStart: (event: React.DragEvent, nodeType: NodeTypeDefinition) => void;
  onClose?: () => void;
}

export default function NodeLibrary({ onDragStart, onClose }: NodeLibraryProps) {
  const [search, setSearch] = useState('');
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (id: string) => {
    setOpenCategories(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredNodes = useMemo(() => 
    search
      ? NODE_TYPES.filter(
          (node) =>
            node.label.toLowerCase().includes(search.toLowerCase()) ||
            node.description.toLowerCase().includes(search.toLowerCase())
        )
      : NODE_TYPES,
    [search]
  );

  // Sort categories alphabetically
  const sortedCategories = useMemo(() => 
    [...NODE_CATEGORIES].sort((a, b) => a.label.localeCompare(b.label, undefined, { sensitivity: 'base' })),
    []
  );

  const getNodesByCategory = (categoryId: string) =>
    filteredNodes
      .filter((node) => node.category === categoryId)
      .sort((a, b) => a.label.localeCompare(b.label, undefined, { sensitivity: 'base' }));

  return (
    <div className="relative w-72 h-full flex flex-col bg-background border-r border-border/60">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border/40">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-medium text-foreground/90">Node Library</h2>
          {onClose && (
            <button
              onClick={onClose}
              className={cn(
                "h-6 w-6 flex items-center justify-center rounded-sm",
                "text-muted-foreground/60 hover:text-foreground/80",
                "hover:bg-muted/40 transition-colors duration-150"
              )}
              title="Close panel"
              aria-label="Close panel"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/60" />
          <Input
            placeholder="Search nodes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8 h-8 text-sm border-border/60 bg-background focus-visible:ring-1 focus-visible:ring-ring/50"
          />
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="px-2.5 py-2 w-full">
          {sortedCategories.map((category) => {
            const nodes = getNodesByCategory(category.id);
            if (nodes.length === 0) return null;
            const isOpen = openCategories.has(category.id);

            return (
              <div key={category.id} className="mb-0.5 w-full">
                {/* Category trigger — fixed width, no layout shift */}
                <button
                  type="button"
                  onClick={() => toggleCategory(category.id)}
                  className={cn(
                    "w-full flex items-center gap-2.5 py-1.5 px-2 rounded-sm",
                    "hover:bg-muted/40 transition-colors duration-150",
                    "text-left"
                  )}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: category.color }}
                  />
                  <span className="text-xs font-medium text-foreground/80 truncate flex-1 min-w-0">
                    {category.label}
                  </span>
                  <span className="text-xs text-muted-foreground/70 flex-shrink-0 mr-1">
                    {nodes.length}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-3 w-3 flex-shrink-0 text-muted-foreground/60 transition-transform duration-200",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                {/* Category content — expands in-place, no width change */}
                {isOpen && (
                  <div className="pt-1 pb-1.5 px-1 w-full">
                    <div className="space-y-0.5">
                      {nodes.map((node) => {
                        const IconComponent = iconMap[node.icon] || Box;
                        return (
                          <div
                            key={node.type}
                            draggable
                            onDragStart={(e) => onDragStart(e, node)}
                            className={cn(
                              "flex items-start gap-2.5 p-2 rounded-sm cursor-grab",
                              "hover:bg-muted/50 transition-colors duration-150",
                              "active:cursor-grabbing w-full"
                            )}
                          >
                            <div
                              className="flex h-6 w-6 items-center justify-center rounded flex-shrink-0 mt-0.5"
                              style={{ backgroundColor: category.color + '15', color: category.color }}
                            >
                              <IconComponent className="h-3 w-3" />
                            </div>
                            <div className="flex-1 min-w-0 pt-0.5">
                              <div className="text-xs font-medium text-foreground/90 truncate leading-tight">
                                {node.label}
                              </div>
                              <div className="text-xs text-muted-foreground/70 truncate leading-tight mt-0.5">
                                {node.description}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}
