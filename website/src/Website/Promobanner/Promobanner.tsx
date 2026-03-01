import { Link } from "react-router-dom";
import hero1 from "../../assets/hero-1.jpg";
import hero2 from "../../assets/hero-2.jpg";

const PromoBanner = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <Link to="/produtos?categoria=Camisas" className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden">
            <img
              src={hero1}
              alt="Coleção Camisas"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/20 transition-colors" />
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
              <h3 className="font-display text-3xl md:text-5xl font-light text-primary-foreground leading-tight">
                Camisas<br />Linho
              </h3>
              <span className="inline-block mt-3 text-primary-foreground text-xs tracking-widest uppercase border-b border-primary-foreground/50 pb-0.5">
                Confira
              </span>
            </div>
          </Link>
          <Link to="/produtos?categoria=Calçados" className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden">
            <img
              src={hero2}
              alt="Coleção Calçados"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/20 transition-colors" />
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
              <h3 className="font-display text-3xl md:text-5xl font-light text-primary-foreground leading-tight">
                Calçados<br />Verão
              </h3>
              <span className="inline-block mt-3 text-primary-foreground text-xs tracking-widest uppercase border-b border-primary-foreground/50 pb-0.5">
                Compre Agora
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
