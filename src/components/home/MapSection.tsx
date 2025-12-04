import { MapPin } from "lucide-react";

export function MapSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nossa Localização
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <p>R. João Miranda Salgueiro, 470 - Centro, Porto Ferreira - SP</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-lg border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.3455774927984!2d-47.48016292373047!3d-21.855073079981695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8200b0a0c5c9b%3A0x84e4dce7d0f0e1a3!2sR.%20Jo%C3%A3o%20Miranda%20Salgueiro%2C%20470%20-%20Centro%2C%20Porto%20Ferreira%20-%20SP%2C%2013660-043!5e0!3m2!1spt-BR!2sbr!4v1699000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Laboratório Previlab"
              className="w-full"
            />
          </div>
          
          <div className="mt-6 text-center">
            <a
              href="https://maps.app.goo.gl/i7nUFXpGr7h6Y9AQ6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
