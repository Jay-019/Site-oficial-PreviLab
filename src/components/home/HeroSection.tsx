import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import heroImage from "@/assets/hero-laboratory.jpg";
import pncqBadge from "@/assets/pncq-badge.png";

const RESULTS_URL = "http://191.8.164.122:40061/cgi-bin/pla303.exe?hterm=135&hlab=061";

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
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl text-lg px-10 py-6 h-auto font-bold" asChild>
                <a href={RESULTS_URL} target="_blank" rel="noopener noreferrer">
                  Acessar Resultados
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/exames">
                  Ver Exames
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Info Banner */}
            <div className="bg-accent/80 backdrop-blur-sm rounded-xl p-4 border border-primary/20">
              <p className="text-sm text-foreground">
                <span className="font-semibold text-primary">Sem agendamento:</span> Exames toxicológicos e coleta de sangue são realizados por ordem de chegada.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-border">
              <div className="text-center sm:text-left">
                <p className="text-3xl font-bold text-foreground">20+</p>
                <p className="text-sm text-muted-foreground">Anos de experiência</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-3xl font-bold text-foreground">+800k</p>
                <p className="text-sm text-muted-foreground">Pacientes atendidos</p>
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
            
            {/* PNCQ Badge */}
            <div className="mt-6 flex justify-center">
              <img
                src={pncqBadge}
                alt="Programa Nacional de Controle de Qualidade"
                className="h-16 lg:h-20 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
