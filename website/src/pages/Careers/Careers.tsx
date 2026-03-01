import TopBar from "../../Website/TopBar/TopBar";
import Header from "../../Website/Header/Header";
import Footer from "../../Website/Footer/Footer";

const openings = [
  { role: "Vendedor(a) - São Paulo", type: "Presencial", area: "Varejo" },
  { role: "Analista de E-commerce", type: "Remoto", area: "Tecnologia" },
  { role: "Designer de Moda", type: "Híbrido", area: "Criação" },
  { role: "Social Media", type: "Remoto", area: "Marketing" },
];

const Careers = () => (
  <div className="min-h-screen bg-background">
    <TopBar />
    <Header />
    <main className="container py-12 md:py-20">
      <h1 className="section-title mb-6">Trabalhe Conosco</h1>
      <p className="text-center text-muted-foreground max-w-xl mx-auto mb-16">
        Faça parte do time Verso. Buscamos pessoas apaixonadas por moda e inovação.
      </p>
      <div className="max-w-3xl mx-auto space-y-4">
        {openings.map((o) => (
          <div key={o.role} className="border border-border p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-accent transition-colors">
            <div>
              <h3 className="font-medium">{o.role}</h3>
              <p className="text-sm text-muted-foreground">{o.area} · {o.type}</p>
            </div>
            <button className="bg-primary text-primary-foreground px-6 py-2 text-xs tracking-widest uppercase font-medium hover:bg-accent hover:text-accent-foreground transition-colors self-start md:self-auto">
              Candidatar-se
            </button>
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default Careers;
