import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-laboratory.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-hero">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
              <Shield className="w-4 h-4" />
              <span>Laboratório Certificado</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
              Sua saúde com{" "}
              <span className="text-primary">precisão</span> e{" "}
              <span className="text-primary">confiança</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Há mais de 20 anos oferecendo exames laboratoriais com tecnologia de ponta, 
              resultados precisos e atendimento humanizado para você e sua família.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/exames">
                  Ver Exames
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/resultados">
                  Acessar Resultados
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center sm:text-left">
                <p className="text-3xl font-bold text-foreground">20+</p>
                <p className="text-sm text-muted-foreground">Anos de experiência</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-3xl font-bold text-foreground">50k+</p>
                <p className="text-sm text-muted-foreground">Pacientes atendidos</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-3xl font-bold text-foreground">200+</p>
                <p className="text-sm text-muted-foreground">Tipos de exames</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={heroImage}
                alt="Laboratório de análises clínicas moderno"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-lg animate-float hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Resultado Rápido</p>
                  <p className="text-xs text-muted-foreground">Em até 24h</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-card rounded-xl p-4 shadow-lg animate-float hidden lg:block" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Qualidade</p>
                  <p className="text-xs text-muted-foreground">ISO 9001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
