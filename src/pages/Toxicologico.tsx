import { Layout } from "@/components/layout/Layout";
import { 
  Shield, 
  Clock, 
  FileText, 
  AlertTriangle, 
  CheckCircle, 
  Car, 
  Briefcase, 
  User,
  MessageCircle,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";

const examTypes = [
  {
    icon: Car,
    title: "Para CNH",
    description: "Exame toxicológico obrigatório para motoristas profissionais (categorias C, D e E) conforme exigência do DETRAN.",
    details: [
      "Obrigatório para renovação e obtenção de CNH",
      "Válido por 2 anos e 6 meses",
      "Detecta uso de substâncias nos últimos 90 dias",
    ],
  },
  {
    icon: Briefcase,
    title: "Admissional",
    description: "Exame toxicológico para admissão em empresas, especialmente para cargos que envolvem direção de veículos.",
    details: [
      "Exigido por empresas de transporte",
      "Parte do processo de contratação",
      "Resultado enviado diretamente à empresa",
    ],
  },
  {
    icon: User,
    title: "Particular",
    description: "Exame toxicológico por demanda pessoal ou solicitação de terceiros.",
    details: [
      "Para uso pessoal ou jurídico",
      "Análise completa de substâncias",
      "Resultado sigiloso",
    ],
  },
];

const preparationSteps = [
  {
    icon: FileText,
    title: "Documentação",
    items: [
      "Documento de identidade original com foto (RG ou CNH)",
      "CPF",
      "Se usar medicamento controlado, trazer receita médica atualizada",
      "Para admissional: carta de encaminhamento da empresa",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Medicamentos Controlados",
    items: [
      "Informar TODOS os medicamentos em uso",
      "Trazer receituário médico dos últimos 90 dias",
      "Medicamentos que podem interferir: ansiolíticos, antidepressivos, analgésicos opioides",
      "A receita deve conter nome do médico, CRM, nome do paciente e data",
    ],
  },
  {
    icon: CheckCircle,
    title: "No dia do exame",
    items: [
      "Cabelo deve ter no mínimo 3cm de comprimento",
      "Não é necessário jejum",
      "Não cortar ou tingir o cabelo antes do exame",
      "Chegar com antecedência de 10 minutos",
    ],
  },
];

const faqItems = [
  {
    question: "Quanto tempo demora o resultado?",
    answer: "O resultado fica pronto em até 10 dias úteis. Para resultados negativos, geralmente em 5 dias úteis.",
  },
  {
    question: "O exame é feito com qual material?",
    answer: "A coleta é feita com amostras de cabelo (preferencialmente) ou pelos corporais. Não há coleta de sangue ou urina.",
  },
  {
    question: "Quais substâncias são detectadas?",
    answer: "O exame detecta: maconha, cocaína, anfetaminas, metanfetaminas, opiáceos, entre outras substâncias controladas.",
  },
  {
    question: "O que acontece se eu usar medicamento controlado?",
    answer: "Medicamentos prescritos não invalidam o exame. Basta apresentar a receita médica no momento da coleta para justificar a presença da substância.",
  },
  {
    question: "Preciso agendar?",
    answer: "Não! O exame toxicológico é realizado por ordem de chegada, sem necessidade de agendamento prévio.",
  },
  {
    question: "Qual o horário de atendimento?",
    answer: "O exame toxicológico é realizado de segunda a sexta-feira, das 10h às 11h e das 14h às 16h.",
  },
];

const Toxicologico = () => {
  const whatsappUrl = "https://wa.me/551935814859?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20exame%20toxicol%C3%B3gico.";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary to-accent py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>Exame Credenciado pelo DETRAN</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              Exame Toxicológico
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Exame toxicológico para CNH, admissional e particular. 
              Resultado rápido, atendimento humanizado e sem necessidade de agendamento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Tirar Dúvidas no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="bg-primary py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-primary-foreground text-center">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Sem agendamento - Ordem de chegada</span>
            </div>
            <span className="hidden sm:block">•</span>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Seg a Sex: 10h-11h e 14h-16h</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Exame */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Tipos de Exame Toxicológico
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Realizamos exames toxicológicos para diferentes finalidades
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {examTypes.map((type, index) => (
              <div
                key={type.title}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6">
                  <type.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{type.title}</h3>
                <p className="text-muted-foreground mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preparo */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Como se Preparar
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Siga estas orientações para garantir que seu exame seja realizado corretamente
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {preparationSteps.map((step, index) => (
              <div
                key={step.title}
                className="bg-card rounded-2xl p-8 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                <ul className="space-y-3">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Importante */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-accent border border-primary/20 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Info className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Informações Importantes</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>O exame é realizado com coleta de cabelo ou pelos corporais (mínimo 3cm)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Detecta uso de substâncias nos últimos 90 dias</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>O resultado é enviado diretamente para o DETRAN (quando aplicável)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Processo rápido e indolor, com duração de aproximadamente 10 minutos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Laboratório credenciado e certificado para realização do exame</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tire suas dúvidas sobre o exame toxicológico
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid gap-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ainda tem dúvidas?
            </h2>
            <p className="text-muted-foreground mb-8">
              Entre em contato conosco pelo WhatsApp e tire todas as suas dúvidas sobre o exame toxicológico.
            </p>
            <Button size="lg" className="text-base" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Toxicologico;
