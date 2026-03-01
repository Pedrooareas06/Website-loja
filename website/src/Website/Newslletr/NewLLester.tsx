import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-20">
      <div className="container text-center max-w-xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide mb-3">
          Assine Nossa Newsletter
        </h2>
        <p className="text-primary-foreground/70 text-sm mb-8">
          Cadastre-se e receba promoções exclusivas e novidades em primeira mão.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu melhor e-mail"
            required
            className="flex-1 bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50"
          />
          <button
            type="submit"
            className="bg-accent text-accent-foreground px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-accent/90 transition-colors"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
