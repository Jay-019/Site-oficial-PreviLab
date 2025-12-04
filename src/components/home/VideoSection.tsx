import { Play } from "lucide-react";

export function VideoSection() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Conheça o Previlab
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Assista ao nosso vídeo institucional e conheça nossa estrutura e equipe
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-card aspect-video">
            <iframe
              src="https://drive.google.com/file/d/1mB_aVs8qHAqlAQDDgAAotX06__dy_Z_q/preview"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Vídeo Institucional Previlab"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
