import { LucideIcon, X, AlertCircle, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ExamModalProps {
  isOpen: boolean;
  onClose: () => void;
  exam: {
    icon: LucideIcon;
    title: string;
    description: string;
    preparation: string[];
    duration: string;
    notes?: string;
  } | null;
}

export function ExamModal({ isOpen, onClose, exam }: ExamModalProps) {
  if (!isOpen || !exam) return null;

  const Icon = exam.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-card rounded-2xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-start justify-between rounded-t-2xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">{exam.title}</h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                <Clock className="w-4 h-4" />
                <span>Resultado em {exam.duration}</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">Sobre o exame</h3>
            <p className="text-muted-foreground">{exam.description}</p>
          </div>

          {/* Preparation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Preparo necessário</h3>
            <ul className="space-y-2">
              {exam.preparation.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Notes */}
          {exam.notes && (
            <div className="bg-accent rounded-xl p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Observação</h4>
                  <p className="text-sm text-muted-foreground">{exam.notes}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-card border-t border-border p-6 rounded-b-2xl">
          <Button onClick={onClose} className="w-full">
            Entendi
          </Button>
        </div>
      </div>
    </div>
  );
}
