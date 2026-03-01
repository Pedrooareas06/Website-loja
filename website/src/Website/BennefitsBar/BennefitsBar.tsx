import { Truck, RefreshCw, CreditCard, ShieldCheck,Gift } from "lucide-react";

const benefits = [
    { icon: Truck, title: "Frete Grátis", desc: "Para compras acima de R$ 299" },
  { icon: RefreshCw, title: "Troca Facilitada", desc: "Troque em até 30 dias" },
  { icon: CreditCard, title: "Até 6x Sem Juros", desc: "Em todos os cartões" },
  { icon: ShieldCheck, title: "Compra Segura", desc: "Seus dados protegidos" },
  { icon: Gift, title: "Cashback 10%", desc: "Em todas as compras" },
];

const BenefitsBar = () => {
    return (
        <section className="bg-secondary py-8 md:py-12 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
            {benefits.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <item.icon className="h-6 w-6 text-accent" />
                <h4 className="text-xs font-semibold tracking-wide uppercase">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default BenefitsBar;