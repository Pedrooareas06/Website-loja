import TopBar from "../../Website/TopBar/TopBar";
import Header from "../../Website/Header/Header";
import Footer from "../../Website/Footer/Footer";
import { Truck, Clock, MapPin } from "lucide-react";

const Delivery = () => (
  <div className="min-h-screen bg-background">
    <TopBar />
    <Header />
    <main className="container py-12 md:py-20">
      <h1 className="section-title mb-12">Prazo de Entrega</h1>
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="border border-border p-6 text-center">
            <Truck className="h-8 w-8 mx-auto mb-3 text-accent" />
            <h3 className="font-medium mb-1">Frete Grátis</h3>
            <p className="text-sm text-muted-foreground">Em compras acima de R$ 299</p>
          </div>
          <div className="border border-border p-6 text-center">
            <Clock className="h-8 w-8 mx-auto mb-3 text-accent" />
            <h3 className="font-medium mb-1">Entrega Expressa</h3>
            <p className="text-sm text-muted-foreground">2-3 dias úteis para capitais</p>
          </div>
          <div className="border border-border p-6 text-center">
            <MapPin className="h-8 w-8 mx-auto mb-3 text-accent" />
            <h3 className="font-medium mb-1">Todo o Brasil</h3>
            <p className="text-sm text-muted-foreground">Entregamos em todas as regiões</p>
          </div>
        </div>
        <div className="border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left p-4 font-medium text-xs tracking-wide uppercase">Região</th>
                <th className="text-left p-4 font-medium text-xs tracking-wide uppercase">Prazo</th>
                <th className="text-left p-4 font-medium text-xs tracking-wide uppercase">Valor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr><td className="p-4 text-muted-foreground">Sudeste</td><td className="p-4 text-muted-foreground">3-5 dias úteis</td><td className="p-4 text-muted-foreground">R$ 14,90</td></tr>
              <tr><td className="p-4 text-muted-foreground">Sul</td><td className="p-4 text-muted-foreground">4-6 dias úteis</td><td className="p-4 text-muted-foreground">R$ 18,90</td></tr>
              <tr><td className="p-4 text-muted-foreground">Centro-Oeste</td><td className="p-4 text-muted-foreground">5-7 dias úteis</td><td className="p-4 text-muted-foreground">R$ 22,90</td></tr>
              <tr><td className="p-4 text-muted-foreground">Nordeste</td><td className="p-4 text-muted-foreground">6-9 dias úteis</td><td className="p-4 text-muted-foreground">R$ 24,90</td></tr>
              <tr><td className="p-4 text-muted-foreground">Norte</td><td className="p-4 text-muted-foreground">7-10 dias úteis</td><td className="p-4 text-muted-foreground">R$ 29,90</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Delivery;
