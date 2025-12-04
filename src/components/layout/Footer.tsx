import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Logo do Laboratório" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Comprometidos com a precisão e qualidade nos resultados de seus exames há mais de 20 anos.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/p/Laborat%C3%B3rio-de-Analises-Clinicas-Previlab-100063976094664/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/laboratorio.previlab/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
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
                  R. João Miranda Salgueiro, 470<br />
                  Centro, Porto Ferreira - SP<br />
                  13660-043
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+551935814859" className="text-background/70 hover:text-primary text-sm transition-colors">
                  (19) 3581-4859
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:laboratorioprevilab@gmail.com" className="text-background/70 hover:text-primary text-sm transition-colors">
                  laboratorioprevilab@gmail.com
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
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-col items-center gap-6 text-sm">
            {/* CNPJ - Prominent and centered */}
            <div className="text-center">
              <p className="text-lg font-bold text-background">CNPJ: 06.063.773/0001-01</p>
            </div>
            
            {/* Links */}
            <div className="flex gap-6 text-background/60">
              <a href="https://drive.google.com/file/d/1Ksw5h0idlrrZhd5L-zxLMa6iGPuVdBHe/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Política de Privacidade</a>
              <a href="https://drive.google.com/file/d/1doxVMPPYpodljXBdI-KcEZAPWE9ndHbE/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Termos de Uso</a>
            </div>
            
            {/* Copyright */}
            <p className="text-background/50">© 2024 Previlab. Todos os direitos reservados.</p>
            
            {/* Developer credit - Prominent and centered */}
            <p className="text-base font-medium text-background/80">
              Desenvolvido por: <a href="https://www.instagram.com/ogu019?igsh=MXV6MnZtbGcya2M1MQ==" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors font-bold">@ogu019</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
