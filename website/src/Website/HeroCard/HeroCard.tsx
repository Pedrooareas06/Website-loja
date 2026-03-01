import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import hero1 from "../../assets/hero-1.jpg";
import hero2 from "../../assets/hero-2.jpg";

const slides = [
  {
    image: hero1,
    title: "Nova Coleção\nLinho Premium",
    subtitle: "Sofisticação e frescor para o seu dia a dia",
    cta: "Confira",
    link: "/produtos?categoria=Camisas",
  },
  {
    image: hero2,
    title: "Calçados\nColeção Verão",
    subtitle: "Conforto e estilo em cada passo",
    cta: "Compre Agora",
    link: "/produtos?categoria=Calçados",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/20" />
          <div className="absolute inset-0 flex items-center">
            <div className="container">
              <div className="max-w-lg">
                <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-primary-foreground whitespace-pre-line leading-tight mb-4">
                  {slide.title}
                </h2>
                <p className="text-primary-foreground/80 text-base md:text-lg mb-8 font-body">
                  {slide.subtitle}
                </p>
                <Link
                  to={slide.link}
                  className="inline-block bg-card text-card-foreground px-8 py-3 text-sm tracking-widest uppercase font-medium hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/80 hover:bg-card p-2 rounded-full transition-colors"
        aria-label="Anterior"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/80 hover:bg-card p-2 rounded-full transition-colors"
        aria-label="Próximo"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-card" : "w-2 bg-card/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
