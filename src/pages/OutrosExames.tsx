import { Layout } from "@/components/layout/Layout";
import { Construction, MessageCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OutrosExames = () => {
  const whatsappUrl = "https://wa.me/551935814859?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20sobre%20outros%20tipos%20de%20exames.";

  return (
    <Layout>
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-8">
              <Construction className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Página em Construção
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Esta página ainda está sendo desenvolvida. 
              Em breve você poderá ver todos os nossos exames disponíveis aqui.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link to="/exames">
                  <ArrowLeft className="w-5 h-5" />
                  Voltar para Exames
                </Link>
              </Button>
              <Button asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Perguntar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OutrosExames;
