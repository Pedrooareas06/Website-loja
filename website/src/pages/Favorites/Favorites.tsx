import { Link } from "react-router-dom";
import TopBar from "../../Website/TopBar/TopBar";
import Header from "../../Website/Header/Header";   
import Footer from "../../Website/Footer/Footer";
import { Heart } from "lucide-react";

const Favorites = () => (
  <div className="min-h-screen bg-background">
    <TopBar />
    <Header />
    <main className="container py-12 md:py-20">
      <h1 className="section-title mb-12">Favoritos</h1>
      <div className="max-w-md mx-auto text-center py-16">
        <Heart className="h-16 w-16 mx-auto text-muted-foreground/30 mb-6" />
        <h2 className="font-display text-2xl font-light mb-3">Nenhum favorito ainda</h2>
        <p className="text-sm text-muted-foreground mb-8">Navegue pelos nossos produtos e salve seus favoritos clicando no coração.</p>
        <Link to="/produtos" className="inline-block bg-primary text-primary-foreground px-10 py-3 text-xs tracking-widest uppercase font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
          Explorar Produtos
        </Link>
      </div>
    </main>
    <Footer />
  </div>
);

export default Favorites;
