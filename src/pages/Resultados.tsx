import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { FileText, Lock, User, AlertCircle, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Resultados = () => {
  const [codigo, setCodigo] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!codigo.trim() || !senha.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simula processamento e redireciona para URL externa
    // Substitua a URL abaixo pela URL real do sistema de resultados
    setTimeout(() => {
      const externalUrl = `https://sistema-resultados.example.com/login?codigo=${encodeURIComponent(codigo)}&token=${encodeURIComponent(senha)}`;
      
      toast({
        title: "Redirecionando...",
        description: "Você será direcionado para o sistema de resultados.",
      });

      // Abre em nova aba (pode ser alterado para window.location.href para mesmo tab)
      window.open(externalUrl, "_blank");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Resultados de Exames
            </h1>
            <p className="text-lg text-muted-foreground">
              Acesse seus resultados de forma rápida e segura
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg animate-scale-in">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-primary" />
              </div>

              <h2 className="text-2xl font-bold text-foreground text-center mb-2">
                Acessar Resultados
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Insira os dados fornecidos no momento da coleta
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Código do Paciente */}
                <div>
                  <label htmlFor="codigo" className="block text-sm font-medium text-foreground mb-2">
                    Código do Paciente
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      id="codigo"
                      value={codigo}
                      onChange={(e) => setCodigo(e.target.value)}
                      placeholder="Digite seu código"
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Senha */}
                <div>
                  <label htmlFor="senha" className="block text-sm font-medium text-foreground mb-2">
                    Senha
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="password"
                      id="senha"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                      placeholder="Digite sua senha"
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "Processando..."
                  ) : (
                    <>
                      Acessar Resultados
                      <ExternalLink className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>

              {/* Help text */}
              <div className="mt-6 p-4 rounded-xl bg-accent">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-medium text-foreground mb-1">Precisa de ajuda?</p>
                    <p>
                      O código e senha são fornecidos no momento da coleta. 
                      Em caso de dúvidas, entre em contato pelo telefone{" "}
                      <a href="tel:+5511999999999" className="text-primary hover:underline">
                        (11) 9999-9999
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resultados;
