import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ExamCard } from "@/components/exams/ExamCard";
import { ExamModal } from "@/components/exams/ExamModal";
import { exams } from "@/data/exams";
import { Search } from "lucide-react";

const Exames = () => {
  const [selectedExam, setSelectedExam] = useState<typeof exams[0] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredExams = exams.filter(
    (exam) =>
      exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exam.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      {/* Header */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Nossos Exames
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Oferecemos mais de 200 tipos de exames laboratoriais. 
              Clique em cada exame para ver as orientações de preparo.
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar exames..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Exams Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {filteredExams.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredExams.map((exam, index) => (
                <ExamCard
                  key={exam.id}
                  icon={exam.icon}
                  title={exam.title}
                  description={exam.description}
                  onClick={() => setSelectedExam(exam)}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                Nenhum exame encontrado para "{searchTerm}"
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <ExamModal
        isOpen={!!selectedExam}
        onClose={() => setSelectedExam(null)}
        exam={selectedExam}
      />
    </Layout>
  );
};

export default Exames;
