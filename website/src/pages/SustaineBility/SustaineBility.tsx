import TopBar from "../../Website/TopBar/TopBar";
import Header from "../../Website/Header/Header";
import Footer from "../../Website/Footer/Footer";
import { Leaf, Recycle, Heart, Droplets } from "lucide-react";

const pillars = [
  { icon: Leaf, title: "Materiais Sustentáveis", desc: "Utilizamos algodão orgânico, linho e materiais reciclados sempre que possível." },
  { icon: Recycle, title: "Economia Circular", desc: "Programa de reciclagem de peças usadas com desconto na próxima compra." },
  { icon: Heart, title: "Produção Ética", desc: "Condições justas de trabalho e remuneração digna para todos os colaboradores." },
  { icon: Droplets, title: "Redução de Água", desc: "Processos de tingimento que consomem até 70% menos água que o convencional." },
];

const Sustainability = () => (
  <div className="min-h-screen bg-background">
    <TopBar />
    <Header />
    <main className="container py-12 md:py-20">
      <h1 className="section-title mb-6">Sustentabilidade</h1>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
        Na Verso, acreditamos que moda e responsabilidade ambiental caminham juntas. Conheça nossas iniciativas.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {pillars.map((p) => (
          <div key={p.title} className="border border-border p-8 hover:border-accent transition-colors">
            <p.icon className="h-8 w-8 text-accent mb-4" />
            <h3 className="font-display text-lg mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default Sustainability;
