import { products } from "../components/productsTS/products";
import Header from "../Website/Header/Header";

const newProducts = products.filter((p) => p.isNew);
const saleProducts = products.filter((p) => p.isSale);


const Index = () => { 
    return (
        <div className="min-h-screen bg-background">
        <Header/>
        </div>
    );
};

export default Index;