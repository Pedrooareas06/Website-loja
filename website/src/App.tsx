import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductListing from "./pages/ProductListing/ProductListing";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checouk";
import About from "./pages/About/About";
import Sustainability from "./pages/SustaineBility/SustaineBility";
import Stores from "./pages/Stores/Storees";
import Careers from "./pages/Careers/Careers";
import FAQ from "./pages/FAQ/Faq";
import Returns from "./pages/Returns/Returns";
import Delivery from "./pages/Delivery/Delivery";
import Contact from "./pages/Contact/Contact";
import Account from "./pages/Account/Acoount";
import Favorites from "./pages/Favorites/Favorites";
import Privacy from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";
import NotFound from "./pages/NotFound/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/produtos" element={<ProductListing />} />
          <Route path="/produto/:id" element={<ProductDetail />} />
          <Route path="/carrinho" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/sustentabilidade" element={<Sustainability />} />
          <Route path="/lojas" element={<Stores />} />
          <Route path="/trabalhe-conosco" element={<Careers />} />
          <Route path="/duvidas" element={<FAQ />} />
          <Route path="/trocas" element={<Returns />} />
          <Route path="/entrega" element={<Delivery />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/conta" element={<Account />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="/privacidade" element={<Privacy />} />
          <Route path="/termos" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
