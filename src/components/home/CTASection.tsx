import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Users, ClipboardList } from "lucide-react";

const actions = [
  {
    icon: ClipboardList,
    title: "Exames",
    description: "Conheça todos os exames disponíveis e orientações de preparo",
    href: "/exames",
    buttonText: "Ver Exames",
  },
  {
    icon: FileText,
    title: "Resultados",
    description: "Acesse seus resultados de exames online de forma rápida e segura",
    href: "/resultados",
    buttonText: "Ver Resultados",
  },
  {
    icon: Users,
    title: "Sobre Nós",
    description: "Conheça nossa história, missão e compromisso com sua saúde",
    href: "/sobre",
    buttonText: "Conhecer",
  },
];

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            O que você precisa?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Navegue pelas opções abaixo e encontre o que procura
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {actions.map((action, index) => (
            <div
              key={action.title}
              className="group bg-card border border-border rounded-2xl p-8 text-center hover:border-primary hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                <action.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {action.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {action.description}
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link to={action.href}>{action.buttonText}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
