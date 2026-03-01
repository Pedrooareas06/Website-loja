import { useState } from "react";
import TopBar from "../../Website/TopBar/TopBar";
import Header from "../../Website/Header/Header";
import Footer from "../../Website/Footer/Footer";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { useToast } from "../../hooks/useToast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Mensagem enviada!", description: "Responderemos em até 24 horas." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main className="container py-12 md:py-20">
        <h1 className="section-title mb-12">Fale Conosco</h1>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-accent mt-0.5" />
              <div>
                <h3 className="text-sm font-medium">E-mail</h3>
                <p className="text-sm text-muted-foreground">contato@verso.com.br</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-accent mt-0.5" />
              <div>
                <h3 className="text-sm font-medium">Telefone</h3>
                <p className="text-sm text-muted-foreground">0800 123 4567</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MessageSquare className="h-5 w-5 text-accent mt-0.5" />
              <div>
                <h3 className="text-sm font-medium">Chat</h3>
                <p className="text-sm text-muted-foreground">Seg-Sex: 9h-18h</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="md:col-span-2 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Nome" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" />
              <input type="email" placeholder="E-mail" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" />
            </div>
            <input type="text" placeholder="Assunto" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" />
            <textarea placeholder="Mensagem" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none" />
            <button type="submit" className="bg-primary text-primary-foreground px-10 py-3 text-xs tracking-widest uppercase font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
