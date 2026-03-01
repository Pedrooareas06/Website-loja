import TopBar from "../../Website/TopBar/TopBar";
import Header from "../../Website/Header/Header";
import Footer from "../../Website/Footer/Footer";       
import { MapPin, Clock, Phone } from "lucide-react";

const stores = [
  { city: "São Paulo", address: "Rua Oscar Freire, 1200 - Jardins", phone: "(11) 3062-0000", hours: "Seg-Sáb: 10h-21h | Dom: 14h-20h" },
  { city: "Rio de Janeiro", address: "Rua Garcia D'Ávila, 85 - Ipanema", phone: "(21) 2522-0000", hours: "Seg-Sáb: 10h-21h | Dom: 14h-20h" },
  { city: "Belo Horizonte", address: "Rua Pium-í, 462 - Funcionários", phone: "(31) 3261-0000", hours: "Seg-Sáb: 10h-20h | Dom: 14h-19h" },
  { city: "Curitiba", address: "Rua XV de Novembro, 300 - Centro", phone: "(41) 3322-0000", hours: "Seg-Sáb: 10h-20h | Dom: 14h-19h" },
];

const Stores = () => (
  <div className="min-h-screen bg-background">
    <TopBar />
    <Header />
    <main className="container py-12 md:py-20">
      <h1 className="section-title mb-6">Nossas Lojas</h1>
      <p className="text-center text-muted-foreground max-w-xl mx-auto mb-16">
        Visite uma de nossas lojas e viva a experiência Verso pessoalmente.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {stores.map((s) => (
          <div key={s.city} className="border border-border p-8">
            <h3 className="font-display text-xl mb-4">{s.city}</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" />{s.address}</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" />{s.phone}</p>
              <p className="flex items-center gap-2"><Clock className="h-4 w-4 shrink-0" />{s.hours}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default Stores;
