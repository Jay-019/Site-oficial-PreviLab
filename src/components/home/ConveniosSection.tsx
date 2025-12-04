import unimedLogo from "@/assets/convenio-unimed.png";
import ferreirenseLogo from "@/assets/convenio-ferreirense.jpg";
import marianoLogo from "@/assets/convenio-mariano.jpg";
import susLogo from "@/assets/convenio-sus.jpg";

const convenios = [
  { name: "Unimed", logo: unimedLogo },
  { name: "Ferreirense", logo: ferreirenseLogo },
  { name: "Grupo Mariano", logo: marianoLogo },
  { name: "SUS", logo: susLogo },
];

export function ConveniosSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Convênios Atendidos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com os principais convênios da região para facilitar o seu atendimento
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {convenios.map((convenio) => (
            <div
              key={convenio.name}
              className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center"
            >
              <img
                src={convenio.logo}
                alt={`Logo ${convenio.name}`}
                className="h-20 w-20 lg:h-24 lg:w-24 object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
