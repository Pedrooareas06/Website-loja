import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import type { Product } from "../../components/productsTS/products";

interface ProductSectionProps {
  title: string;
  products: Product[];
  viewAllLink?: string;
}

const ProductSection = ({ title, products, viewAllLink }: ProductSectionProps) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <div className="flex items-center justify-between mb-10">
          <h2 className="section-title flex-1">{title}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`transition-all duration-500 ${!hoveredId ? "animate-shimmer" : ""}`}
              style={{
                transform: hoveredId === product.id ? "scale(1.05)" : hoveredId ? "scale(0.97)" : "scale(1)",
                filter: hoveredId && hoveredId !== product.id ? "blur(2px) opacity(0.6)" : "none",
                zIndex: hoveredId === product.id ? 10 : 1,
                animationDelay: `${parseInt(product.id) * 0.5}s`,
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        {viewAllLink && (
          <div className="text-center mt-10">
            <Link
              to={viewAllLink}
              className="inline-block border border-foreground text-foreground px-10 py-3 text-xs tracking-widest uppercase font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              Ver Tudo
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
