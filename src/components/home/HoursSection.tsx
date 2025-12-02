import { Clock, Droplets, TestTube } from "lucide-react";

const schedules = [
  {
    icon: Clock,
    title: "Funcionamento Geral",
    description: "Atendimento completo",
    hours: "Segunda a Sexta",
    time: "06:30 às 17:30",
    color: "bg-primary",
  },
  {
    icon: Droplets,
    title: "Coleta de Sangue",
    description: "Exames de sangue em geral",
    hours: "Segunda a Sexta",
    time: "06:30 às 08:30",
    color: "bg-orange-600",
  },
  {
    icon: TestTube,
    title: "Exame Toxicológico",
    description: "Toxicológico para CNH e admissional",
    hours: "Segunda a Sexta",
    time: "10:00 às 11:00 | 14:00 às 16:00",
    color: "bg-gray-700",
  },
];

export function HoursSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Horários de Atendimento
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira nossos horários de funcionamento e programe sua visita
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {schedules.map((schedule, index) => (
            <div
              key={schedule.title}
              className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl ${schedule.color} flex items-center justify-center mb-4`}>
                <schedule.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {schedule.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {schedule.description}
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">{schedule.hours}</p>
                <p className="text-lg font-semibold text-primary">{schedule.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
