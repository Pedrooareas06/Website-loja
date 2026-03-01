import { useState } from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import type { Product } from "../../components/productsTS/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link
      to={`/produto/${product.id}`}
      className="group block product-card-hover"
    >
      <div className="relative overflow-hidden bg-secondary aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.isNew && (
            <span className="bg-primary text-primary-foreground text-[10px] tracking-widest uppercase px-3 py-1 font-medium">
              Novo
            </span>
          )}
          {product.isSale && discount > 0 && (
            <span className="bg-sale text-accent-foreground text-[10px] tracking-widest uppercase px-3 py-1 font-medium">
              -{discount}%
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsLiked(!isLiked);
          }}
          className="absolute top-3 right-3 p-2 bg-card/80 hover:bg-card rounded-full transition-colors"
          aria-label="Favoritar"
        >
          <Heart
            className={`h-4 w-4 transition-colors ${
              isLiked ? "fill-sale text-sale" : "text-foreground"
            }`}
          />
        </button>

        {/* Quick sizes on hover */}
        <div className="absolute bottom-0 left-0 right-0 bg-card/95 py-2 px-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center justify-center gap-2 text-xs">
            {product.sizes.map((size) => (
              <span key={size} className="px-2 py-1 border border-border hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
                {size}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="pt-3 pb-1">
        <h3 className="text-sm font-medium font-body truncate">{product.name}</h3>
        <div className="flex items-center gap-2 mt-1">
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              R$ {product.originalPrice.toFixed(2).replace(".", ",")}
            </span>
          )}
          <span className={`text-sm font-semibold ${product.isSale ? "text-sale" : "text-foreground"}`}>
            R$ {product.price.toFixed(2).replace(".", ",")}
          </span>
        </div>
        <div className="flex gap-1 mt-2">
          {product.colors.slice(0, 3).map((color, i) => (
            <span key={i} className="text-[10px] text-muted-foreground">
              {color}{i < Math.min(product.colors.length, 3) - 1 ? " · " : ""}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
