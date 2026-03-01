import { Link } from "react-router-dom";
import { ShoppingBag, Trash2, Minus, Plus } from "lucide-react";
import TopBar from "../../Website/TopBar/TopBar";
import Header from "../../Website/Header/Header";
import Footer from "../../Website/Footer/Footer";

const Cart = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main className="container py-8 md:py-16">
        <h1 className="section-title mb-12">Meu Carrinho</h1>
        <div className="max-w-2xl mx-auto text-center py-16">
          <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground/30 mb-6" />
          <h2 className="font-display text-2xl font-light mb-3">Seu carrinho está vazio</h2>
          <p className="text-sm text-muted-foreground mb-8">
            Descubra nossos produtos e adicione seus favoritos ao carrinho.
          </p>
          <Link
            to="/produtos"
            className="inline-block bg-primary text-primary-foreground px-10 py-3 text-xs tracking-widest uppercase font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Continuar Comprando
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
