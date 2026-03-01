import { useState } from "react";
import { Link } from "react-router-dom";
import TopBar from "../../Website/TopBar/TopBar";
import Header from "../../Website/Header/Header";
import Footer from "../../Website/Footer/Footer";
import { User, Package, Heart, CreditCard } from "lucide-react";

const tabs = [
  { id: "dados", label: "Meus Dados", icon: User },
  { id: "pedidos", label: "Meus Pedidos", icon: Package },
  { id: "favoritos", label: "Favoritos", icon: Heart },
  { id: "cartao", label: "Cartão Presente", icon: CreditCard },
];

const Account = () => {
  const [active, setActive] = useState("dados");

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main className="container py-12 md:py-20">
        <h1 className="section-title mb-12">Minha Conta</h1>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
          <aside className="md:w-56 shrink-0 space-y-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${active === t.id ? "bg-secondary font-medium" : "text-muted-foreground hover:text-foreground"}`}
              >
                <t.icon className="h-4 w-4" />
                {t.label}
              </button>
            ))}
          </aside>
          <div className="flex-1 border border-border p-8">
            {active === "dados" && (
              <div className="space-y-6">
                <h2 className="font-display text-lg mb-4">Dados Pessoais</h2>
                <div className="grid grid-cols-2 gap-4">
                  <input placeholder="Nome" className="border border-border bg-transparent px-4 py-3 text-sm" defaultValue="Pedro Henrique" />
                  <input placeholder="Sobrenome" className="border border-border bg-transparent px-4 py-3 text-sm" defaultValue="Areas" />
                  <input placeholder="E-mail" className="border border-border bg-transparent px-4 py-3 text-sm col-span-2" defaultValue="pedro@email.com" />
                  <input placeholder="CPF" className="border border-border bg-transparent px-4 py-3 text-sm" defaultValue="***.***.***-**" />
                  <input placeholder="Telefone" className="border border-border bg-transparent px-4 py-3 text-sm" defaultValue="(11) 99999-0000" />
                </div>
                <button className="bg-primary text-primary-foreground px-8 py-3 text-xs tracking-widest uppercase font-medium">Salvar</button>
              </div>
            )}
            {active === "pedidos" && (
              <div className="text-center py-12">
                <Package className="h-12 w-12 mx-auto text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground text-sm">Você ainda não tem pedidos.</p>
                <Link to="/produtos" className="inline-block mt-4 text-sm text-accent hover:underline">Explorar produtos</Link>
              </div>
            )}
            {active === "favoritos" && (
              <div className="text-center py-12">
                <Heart className="h-12 w-12 mx-auto text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground text-sm">Nenhum favorito salvo ainda.</p>
                <Link to="/produtos" className="inline-block mt-4 text-sm text-accent hover:underline">Descobrir produtos</Link>
              </div>
            )}
            {active === "cartao" && (
              <div className="space-y-4">
                <h2 className="font-display text-lg mb-4">Cartão Presente</h2>
                <p className="text-sm text-muted-foreground">Insira o código do seu cartão presente para resgatá-lo.</p>
                <div className="flex gap-3">
                  <input placeholder="Código do cartão" className="flex-1 border border-border bg-transparent px-4 py-3 text-sm" />
                  <button className="bg-primary text-primary-foreground px-6 py-3 text-xs tracking-widest uppercase font-medium">Resgatar</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Account;
