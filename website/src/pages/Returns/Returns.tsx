import TopBar from "../../Website/TopBar/TopBar";   
import Header from "../../Website/Header/Header";
import Footer from "../../Website/Footer/Footer";

const Returns = () => (
  <div className="min-h-screen bg-background">
    <TopBar />
    <Header />
    <main className="container py-12 md:py-20">
      <h1 className="section-title mb-12">Troca e Devolução</h1>
      <div className="max-w-2xl mx-auto space-y-8 text-sm text-muted-foreground leading-relaxed">
        <section>
          <h2 className="font-display text-lg text-foreground mb-3">Política de Troca</h2>
          <p>Você pode solicitar a troca de qualquer produto em até 30 dias corridos após o recebimento. O produto deve estar sem uso, com etiquetas e na embalagem original. A primeira troca é por nossa conta!</p>
        </section>
        <section>
          <h2 className="font-display text-lg text-foreground mb-3">Como solicitar</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Acesse "Meus Pedidos" na sua conta</li>
            <li>Selecione o pedido e clique em "Solicitar Troca"</li>
            <li>Escolha o motivo e o novo tamanho/cor desejado</li>
            <li>Imprima a etiqueta de envio e despache o produto</li>
          </ol>
        </section>
        <section>
          <h2 className="font-display text-lg text-foreground mb-3">Devolução e Reembolso</h2>
          <p>Caso prefira a devolução, o reembolso será processado em até 10 dias úteis após recebermos o produto. O valor será estornado na mesma forma de pagamento utilizada na compra.</p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default Returns;
