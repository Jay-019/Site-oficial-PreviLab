import { Layout } from "@/components/layout/Layout";
import { Target, Heart, Award, Users, CheckCircle } from "lucide-react";
import teamImage from "@/assets/team-laboratory.jpg";

const values = [
  {
    icon: Target,
    title: "Precisão",
    description: "Resultados confiáveis com tecnologia de ponta e processos rigorosos de controle de qualidade.",
  },
  {
    icon: Heart,
    title: "Humanização",
    description: "Atendimento acolhedor e personalizado, respeitando as necessidades de cada paciente.",
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Comprometimento contínuo com a melhoria de processos e capacitação da equipe.",
  },
  {
    icon: Users,
    title: "Ética",
    description: "Transparência e integridade em todas as nossas relações com pacientes e parceiros.",
  },
];

const achievements = [
  "Certificação ISO 9001:2015",
  "Acreditação PALC (Programa de Acreditação de Laboratórios Clínicos)",
  "Controle de qualidade PNCQ",
  "Equipe altamente qualificada e em constante atualização",
  "Equipamentos de última geração",
  "Parcerias com hospitais e clínicas de referência",
];

const Sobre = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Sobre Nós
            </h1>
            <p className="text-lg text-muted-foreground">
              Há mais de 20 anos cuidando da saúde com dedicação e compromisso
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="animate-slide-in-right">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={teamImage}
                  alt="Equipe do laboratório"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 animate-slide-up">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Nossa História
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Fundado em 2004, o LabClínico nasceu do sonho de oferecer serviços de 
                  análises clínicas de excelência com atendimento humanizado. Ao longo de 
                  mais de duas décadas, crescemos e nos tornamos referência em qualidade e 
                  precisão diagnóstica na região.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Nossa Missão
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Proporcionar diagnósticos precisos e confiáveis, contribuindo para a 
                  saúde e bem-estar da comunidade, com atendimento humanizado e tecnologia 
                  de ponta.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Nossa Visão
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser reconhecido como o laboratório de análises clínicas mais confiável 
                  da região, sempre inovando em tecnologia e mantendo o cuidado humanizado 
                  que nos diferencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nossos Valores
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Princípios que guiam todas as nossas ações e decisões
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Diferenciais
              </h2>
              <p className="text-muted-foreground">
                O que nos torna referência em análises clínicas
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
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
    </Layout>
  );
};

export default Sobre;
