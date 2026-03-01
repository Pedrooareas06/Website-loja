import TopBar from "../Website/TopBar/TopBar";  
import Header from "../Website/Header/Header";
import HeroCarousel from "../Website/HeroCard/HeroCard";
import ProductSection from "../Website/ProductSection/ProductSection";
import CategoryGrid from "../Website/Category/CategoryGrid";
import PromoBanner from "../Website/Promobanner/Promobanner";
import BenefitsBar from "../Website/BennefitsBar/BennefitsBar";
import Newsletter from "../Website/Newslletr/NewLLester";
import Footer from "../Website/Footer/Footer";
import { products } from "../components/productsTS/products";

const newProducts = products.filter((p) => p.isNew);
const saleProducts = products.filter((p) => p.isSale);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main>
        <HeroCarousel />
        <ProductSection
          title="Novidades"
          products={newProducts}
          viewAllLink="/produtos?categoria=Novidades"
        />
        <CategoryGrid />
        <PromoBanner />
        <ProductSection
          title="Liquidação"
          products={saleProducts}
          viewAllLink="/produtos?categoria=Liquidação"
        />
        <BenefitsBar />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
