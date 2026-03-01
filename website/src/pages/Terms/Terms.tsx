import TopBar from "../../Website/TopBar/TopBar";   
import Header from "../../Website/Header/Header";       
import Footer from "../../Website/Footer/Footer";

const Terms = () => (
  <div className="min-h-screen bg-background">
    <TopBar />
    <Header />
    <main className="container py-12 md:py-20">
      <h1 className="section-title mb-12">Termos de Uso</h1>
      <div className="max-w-2xl mx-auto space-y-8 text-sm text-muted-foreground leading-relaxed">
        <section>
          <h2 className="font-display text-lg text-foreground mb-3">1. Aceitação</h2>
          <p>Ao acessar e utilizar o site da Verso, você concorda com estes Termos de Uso. Caso não concorde com algum item, recomendamos que não utilize nossos serviços.</p>
        </section>
        <section>
          <h2 className="font-display text-lg text-foreground mb-3">2. Produtos e Preços</h2>
          <p>Os preços dos produtos podem ser alterados sem aviso prévio. As fotos são meramente ilustrativas e podem apresentar pequenas variações de cor. Todos os produtos estão sujeitos à disponibilidade de estoque.</p>
        </section>
        <section>
          <h2 className="font-display text-lg text-foreground mb-3">3. Pagamento</h2>
          <p>Aceitamos cartão de crédito, PIX, boleto bancário e cartão de débito. O pedido será processado após a confirmação do pagamento pela operadora financeira.</p>
        </section>
        <section>
          <h2 className="font-display text-lg text-foreground mb-3">4. Propriedade Intelectual</h2>
          <p>Todo o conteúdo do site (textos, imagens, logotipos, marcas) é de propriedade da Verso e protegido por leis de direitos autorais. É proibida a reprodução sem autorização prévia.</p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default Terms;
