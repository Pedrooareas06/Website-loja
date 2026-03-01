import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Twitter, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* About */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-4">Sobre a Verso</h3>
            <ul className="space-y-2">
              <li><Link to="/sobre" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Nossa História</Link></li>
              <li><Link to="/sustentabilidade" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Sustentabilidade</Link></li>
              <li><Link to="/lojas" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Nossas Lojas</Link></li>
              <li><Link to="/trabalhe-conosco" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Trabalhe Conosco</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li><Link to="/duvidas" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Dúvidas Frequentes</Link></li>
              <li><Link to="/trocas" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Troca e Devolução</Link></li>
              <li><Link to="/entrega" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Prazo de Entrega</Link></li>
              <li><Link to="/contato" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Fale Conosco</Link></li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-4">Minha Conta</h3>
            <ul className="space-y-2">
              <li><Link to="/conta" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Meus Pedidos</Link></li>
              <li><Link to="/favoritos" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Favoritos</Link></li>
              <li><Link to="/conta" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Meus Dados</Link></li>
              <li><Link to="/conta" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Cartão Presente</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-4">Políticas</h3>
            <ul className="space-y-2">
              <li><Link to="/privacidade" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/termos" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Termos de Uso</Link></li>
            </ul>
          </div>
        </div>

        {/* Social & bottom */}
        <div className="border-t border-primary-foreground/10 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="font-display text-2xl font-semibold tracking-wider">
            VERSO
          </Link>
          <div className="flex items-center gap-4">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="Youtube">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
          <p className="text-xs text-primary-foreground/40">
            © 2026 Verso. Todos os direitos reservados.
          </p>
        </div>

        {/* Credits */}
        <div className="border-t border-primary-foreground/10 mt-6 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-xs text-primary-foreground/50">
            <span>Desenvolvido por <strong className="text-primary-foreground/70">Pedro Henrique</strong></span>
            <a href="https://github.com/Pedrooareas06" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors flex items-center gap-1">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/pedrohenriquefrontend/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors flex items-center gap-1">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
          <p className="text-[10px] text-primary-foreground/30">
            Imagens geradas por IA para fins de demonstração · Projeto de portfólio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
