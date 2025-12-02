import { Link } from "react-router-dom";
import { FlaskConical, MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <FlaskConical className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-background leading-tight">LabClínico</span>
                <span className="text-xs text-background/60">Análises Clínicas</span>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Comprometidos com a precisão e qualidade nos resultados de seus exames há mais de 20 anos.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-background mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-background/70 hover:text-primary text-sm transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/exames" className="text-background/70 hover:text-primary text-sm transition-colors">
                  Exames
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-background/70 hover:text-primary text-sm transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/resultados" className="text-background/70 hover:text-primary text-sm transition-colors">
                  Resultados
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-background mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  Rua das Análises, 123<br />
                  Centro - São Paulo/SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+5511999999999" className="text-background/70 hover:text-primary text-sm transition-colors">
                  (11) 9999-9999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:contato@labclinico.com" className="text-background/70 hover:text-primary text-sm transition-colors">
                  contato@labclinico.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-semibold text-background mb-4">Horários</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-background/70 text-sm">
                  <p className="font-medium text-background">Funcionamento</p>
                  <p>Seg a Sex: 06:30 - 17:30</p>
                </div>
              </li>
              <li className="flex items-start gap-3 pl-7">
                <div className="text-background/70 text-sm">
                  <p className="font-medium text-background">Coleta de Sangue</p>
                  <p>06:30 - 08:30</p>
                </div>
              </li>
              <li className="flex items-start gap-3 pl-7">
                <div className="text-background/70 text-sm">
                  <p className="font-medium text-background">Exame Toxicológico</p>
                  <p>10:00 - 11:00 | 14:00 - 16:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
            <p>© 2024 LabClínico. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
