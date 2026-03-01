import TopBar from "../../Website/TopBar/TopBar";
import Header from "../../Website/Header/Header";
import Footer from "../../Website/Footer/Footer";   
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion";

const faqs = [
  { q: "Qual o prazo de entrega?", a: "O prazo varia de 3 a 10 dias úteis dependendo da região. Capitais geralmente recebem em até 5 dias úteis." },
  { q: "Como funciona a troca ou devolução?", a: "Você tem até 30 dias após o recebimento para solicitar troca ou devolução. A primeira troca é gratuita." },
  { q: "Quais formas de pagamento são aceitas?", a: "Aceitamos cartão de crédito (até 10x sem juros), PIX, boleto bancário e cartão de débito." },
  { q: "Como acompanhar meu pedido?", a: "Após a confirmação do pagamento, você receberá um e-mail com o código de rastreio para acompanhar a entrega." },
  { q: "Os produtos têm garantia?", a: "Sim, todos os nossos produtos possuem garantia de 90 dias contra defeitos de fabricação." },
  { q: "Posso cancelar meu pedido?", a: "Sim, pedidos podem ser cancelados em até 2 horas após a confirmação, desde que ainda não tenham sido despachados." },
];

const FAQ = () => (
  <div className="min-h-screen bg-background">
    <TopBar />
    <Header />
    <main className="container py-12 md:py-20">
      <h1 className="section-title mb-12">Dúvidas Frequentes</h1>
      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-border px-6">
              <AccordionTrigger className="text-sm font-medium">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
    <Footer />
  </div>
);

export default FAQ;
