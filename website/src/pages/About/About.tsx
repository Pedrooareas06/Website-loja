import TopBar from "../../Website/TopBar/TopBar";
import Header from "../../Website/Header/Header";
import Footer from "../../Website/Footer/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main className="container py-12 md:py-20">
        <h1 className="section-title mb-12">Nossa História</h1>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="aspect-[16/7] bg-secondary overflow-hidden mb-12">
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <span className="font-display text-4xl md:text-6xl text-foreground/20">VERSO</span>
            </div>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground">
            A Verso nasceu em 2020 com uma missão clara: oferecer moda masculina de alta qualidade com design atemporal e preços justos. Acreditamos que vestir-se bem é uma forma de expressão pessoal e autoconfiança.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Cada peça é cuidadosamente desenvolvida com materiais premium — algodão pima, linho puro, couro legítimo — garantindo conforto, durabilidade e sofisticação no dia a dia.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Nossa equipe de design busca inspiração em tendências globais, mas sempre com um toque brasileiro. Da modelagem ao acabamento, cada detalhe é pensado para o homem moderno que valoriza qualidade e estilo.
          </p>
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
            <div className="text-center">
              <span className="font-display text-3xl font-light text-foreground">5+</span>
              <p className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">Anos de mercado</p>
            </div>
            <div className="text-center">
              <span className="font-display text-3xl font-light text-foreground">50k+</span>
              <p className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">Clientes satisfeitos</p>
            </div>
            <div className="text-center">
              <span className="font-display text-3xl font-light text-foreground">100%</span>
              <p className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">Nacional</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
