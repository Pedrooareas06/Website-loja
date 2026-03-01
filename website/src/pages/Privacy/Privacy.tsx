import TopBar from "../../Website/TopBar/TopBar";
import Header from "../../Website/Header/Header";
import Footer from "../../Website/Footer/Footer";

const Privacy = () => (
  <div className="min-h-screen bg-background">
    <TopBar />
    <Header />
    <main className="container py-12 md:py-20">
      <h1 className="section-title mb-12">Política de Privacidade</h1>
      <div className="max-w-2xl mx-auto space-y-8 text-sm text-muted-foreground leading-relaxed">
        <section>
          <h2 className="font-display text-lg text-foreground mb-3">1. Coleta de Dados</h2>
          <p>Coletamos informações pessoais como nome, e-mail, endereço e dados de pagamento quando você realiza uma compra ou cria uma conta em nosso site. Também coletamos dados de navegação por meio de cookies.</p>
        </section>
        <section>
          <h2 className="font-display text-lg text-foreground mb-3">2. Uso dos Dados</h2>
          <p>Seus dados são utilizados para processar pedidos, melhorar sua experiência de compra, enviar comunicações relevantes e personalizar conteúdo. Não vendemos seus dados a terceiros.</p>
        </section>
        <section>
          <h2 className="font-display text-lg text-foreground mb-3">3. Proteção</h2>
          <p>Utilizamos criptografia SSL e seguimos as melhores práticas de segurança da informação para proteger seus dados pessoais contra acesso não autorizado.</p>
        </section>
        <section>
          <h2 className="font-display text-lg text-foreground mb-3">4. Seus Direitos</h2>
          <p>De acordo com a LGPD, você tem direito a acessar, corrigir, excluir e portar seus dados pessoais. Para exercer esses direitos, entre em contato conosco pelo e-mail privacidade@verso.com.br.</p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default Privacy;
