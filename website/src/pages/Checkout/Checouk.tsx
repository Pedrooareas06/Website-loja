import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../../Website/TopBar/TopBar";
import Header from "../../Website/Header/Header";
import Footer from "../../Website/Footer/Footer";
import { CreditCard, QrCode, Barcode, CheckCircle2, Lock, ShieldCheck } from "lucide-react";
import { useToast } from "../../hooks/useToast";

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState<"address" | "payment" | "confirm" | "success">("address");
  const [paymentMethod, setPaymentMethod] = useState<"credit" | "pix" | "boleto">("credit");
  const [processing, setProcessing] = useState(false);

  const [address, setAddress] = useState({ cep: "", street: "", number: "", complement: "", city: "", state: "" });
  const [card, setCard] = useState({ number: "", name: "", expiry: "", cvv: "" });

  const simulatedItems = [
    { name: "Polo Piquet Premium", size: "M", color: "Marinho", price: 189.90, qty: 1 },
    { name: "Camiseta Pima Básica", size: "G", color: "Bordô", price: 129.90, qty: 2 },
  ];

  const subtotal = simulatedItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal >= 299 ? 0 : 14.90;
  const total = subtotal + shipping;

  const handlePayment = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setStep("success");
    }, 2500);
  };

  if (step === "success") {
    return (
      <div className="min-h-screen bg-background">
        <TopBar />
        <Header />
        <main className="container py-12 md:py-20">
          <div className="max-w-lg mx-auto text-center py-16 animate-fade-in">
            <CheckCircle2 className="h-20 w-20 mx-auto text-green-600 mb-6" />
            <h1 className="font-display text-3xl mb-3">Pedido Confirmado!</h1>
            <p className="text-muted-foreground mb-2">Pedido #VSR-{Math.random().toString(36).substr(2, 8).toUpperCase()}</p>
            <p className="text-sm text-muted-foreground mb-8">
              Você receberá um e-mail com os detalhes e o código de rastreio em breve.
            </p>
            <div className="border border-border p-6 mb-8 text-left">
              <h3 className="text-xs tracking-widest uppercase font-semibold mb-4">Resumo</h3>
              {simulatedItems.map((item, i) => (
                <div key={i} className="flex justify-between text-sm py-2 border-b border-border last:border-0">
                  <span>{item.qty}x {item.name}</span>
                  <span>R$ {(item.price * item.qty).toFixed(2).replace(".", ",")}</span>
                </div>
              ))}
              <div className="flex justify-between text-sm font-semibold pt-3 mt-2">
                <span>Total</span>
                <span>R$ {total.toFixed(2).replace(".", ",")}</span>
              </div>
            </div>
            <button onClick={() => navigate("/")} className="bg-primary text-primary-foreground px-10 py-3 text-xs tracking-widest uppercase font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
              Voltar à Loja
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main className="container py-12 md:py-20">
        <h1 className="section-title mb-12">Checkout</h1>

        {/* Steps indicator */}
        <div className="max-w-2xl mx-auto flex items-center justify-center gap-2 mb-12">
          {["Endereço", "Pagamento", "Confirmação"].map((s, i) => {
            const stepKeys = ["address", "payment", "confirm"] as const;
            const isActive = stepKeys.indexOf(step as any) >= i;
            return (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${isActive ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground"}`}>
                  {i + 1}
                </div>
                <span className={`text-xs tracking-wide uppercase hidden md:inline ${isActive ? "text-foreground" : "text-muted-foreground"}`}>{s}</span>
                {i < 2 && <div className={`w-12 h-px ${isActive ? "bg-primary" : "bg-border"}`} />}
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main form */}
          <div className="md:col-span-2">
            {step === "address" && (
              <div className="space-y-4 animate-fade-in">
                <h2 className="font-display text-lg mb-4">Endereço de Entrega</h2>
                <div className="grid grid-cols-3 gap-4">
                  <input placeholder="CEP" value={address.cep} onChange={(e) => setAddress({ ...address, cep: e.target.value })} className="border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" />
                  <input placeholder="Rua" value={address.street} onChange={(e) => setAddress({ ...address, street: e.target.value })} className="col-span-2 border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <input placeholder="Número" value={address.number} onChange={(e) => setAddress({ ...address, number: e.target.value })} className="border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" />
                  <input placeholder="Complemento" value={address.complement} onChange={(e) => setAddress({ ...address, complement: e.target.value })} className="col-span-2 border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input placeholder="Cidade" value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} className="border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" />
                  <input placeholder="Estado" value={address.state} onChange={(e) => setAddress({ ...address, state: e.target.value })} className="border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" />
                </div>
                <button onClick={() => setStep("payment")} className="mt-4 bg-primary text-primary-foreground px-10 py-3 text-xs tracking-widest uppercase font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                  Continuar
                </button>
              </div>
            )}

            {step === "payment" && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="font-display text-lg mb-4">Forma de Pagamento</h2>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "credit" as const, label: "Cartão", icon: CreditCard },
                    { id: "pix" as const, label: "PIX", icon: QrCode },
                    { id: "boleto" as const, label: "Boleto", icon: Barcode },
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setPaymentMethod(m.id)}
                      className={`border p-4 flex flex-col items-center gap-2 transition-colors ${paymentMethod === m.id ? "border-accent bg-secondary" : "border-border hover:border-accent"}`}
                    >
                      <m.icon className="h-5 w-5" />
                      <span className="text-xs tracking-wide uppercase">{m.label}</span>
                    </button>
                  ))}
                </div>

                {paymentMethod === "credit" && (
                  <div className="space-y-4">
                    <input placeholder="Número do Cartão" value={card.number} onChange={(e) => setCard({ ...card, number: e.target.value })} className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" />
                    <input placeholder="Nome no Cartão" value={card.name} onChange={(e) => setCard({ ...card, name: e.target.value })} className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" />
                    <div className="grid grid-cols-2 gap-4">
                      <input placeholder="Validade (MM/AA)" value={card.expiry} onChange={(e) => setCard({ ...card, expiry: e.target.value })} className="border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" />
                      <input placeholder="CVV" value={card.cvv} onChange={(e) => setCard({ ...card, cvv: e.target.value })} className="border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" />
                    </div>
                    <p className="text-xs text-muted-foreground">Parcele em até 10x sem juros</p>
                  </div>
                )}
                {paymentMethod === "pix" && (
                  <div className="border border-border p-8 text-center">
                    <div className="w-40 h-40 mx-auto bg-secondary border border-border flex items-center justify-center mb-4">
                      <QrCode className="h-24 w-24 text-foreground/20" />
                    </div>
                    <p className="text-sm text-muted-foreground">QR Code gerado após confirmação</p>
                    <p className="text-xs text-muted-foreground mt-1">5% de desconto no PIX</p>
                  </div>
                )}
                {paymentMethod === "boleto" && (
                  <div className="border border-border p-6">
                    <p className="text-sm text-muted-foreground">O boleto será gerado após a confirmação. Prazo de vencimento: 3 dias úteis.</p>
                    <p className="text-xs text-muted-foreground mt-2">O pedido será processado após a compensação do boleto (1-3 dias úteis).</p>
                  </div>
                )}

                <div className="flex gap-3 mt-4">
                  <button onClick={() => setStep("address")} className="border border-border px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-secondary transition-colors">Voltar</button>
                  <button onClick={() => setStep("confirm")} className="bg-primary text-primary-foreground px-10 py-3 text-xs tracking-widest uppercase font-medium hover:bg-accent hover:text-accent-foreground transition-colors">Continuar</button>
                </div>
              </div>
            )}

            {step === "confirm" && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="font-display text-lg mb-4">Confirmar Pedido</h2>
                <div className="border border-border p-6 space-y-4">
                  <div>
                    <h3 className="text-xs tracking-widest uppercase font-semibold mb-2">Endereço</h3>
                    <p className="text-sm text-muted-foreground">{address.street || "Rua Exemplo"}, {address.number || "123"}{address.complement ? ` - ${address.complement}` : ""}</p>
                    <p className="text-sm text-muted-foreground">{address.city || "São Paulo"} - {address.state || "SP"} | CEP: {address.cep || "01234-567"}</p>
                  </div>
                  <div>
                    <h3 className="text-xs tracking-widest uppercase font-semibold mb-2">Pagamento</h3>
                    <p className="text-sm text-muted-foreground">
                      {paymentMethod === "credit" ? `Cartão de Crédito •••• ${card.number.slice(-4) || "0000"}` : paymentMethod === "pix" ? "PIX (5% desconto)" : "Boleto Bancário"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 text-green-600" />
                  <span>Pagamento 100% seguro com criptografia SSL</span>
                </div>

                <div className="flex gap-3 mt-4">
                  <button onClick={() => setStep("payment")} className="border border-border px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-secondary transition-colors">Voltar</button>
                  <button
                    onClick={handlePayment}
                    disabled={processing}
                    className="bg-primary text-primary-foreground px-10 py-3 text-xs tracking-widest uppercase font-medium hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-50 flex items-center gap-2"
                  >
                    <Lock className="h-3 w-3" />
                    {processing ? "Processando..." : "Finalizar Compra"}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="border border-border p-6 h-fit">
            <h3 className="text-xs tracking-widest uppercase font-semibold mb-4">Resumo do Pedido</h3>
            {simulatedItems.map((item, i) => (
              <div key={i} className="flex justify-between text-sm py-3 border-b border-border">
                <div>
                  <p className="font-medium">{item.qty}x {item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.size} · {item.color}</p>
                </div>
                <span>R$ {(item.price * item.qty).toFixed(2).replace(".", ",")}</span>
              </div>
            ))}
            <div className="space-y-2 pt-4 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>R$ {subtotal.toFixed(2).replace(".", ",")}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Frete</span>
                <span>{shipping === 0 ? "Grátis" : `R$ ${shipping.toFixed(2).replace(".", ",")}`}</span>
              </div>
              <div className="flex justify-between font-semibold text-base pt-2 border-t border-border">
                <span>Total</span>
                <span>R$ {total.toFixed(2).replace(".", ",")}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
