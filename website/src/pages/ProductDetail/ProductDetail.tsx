import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, ShoppingBag, Truck, RefreshCw, Minus, Plus, ChevronRight } from "lucide-react";
import TopBar from "../../Website/TopBar/TopBar";
import Header from "../../Website/Header/Header";
import Footer from "../../Website/Footer/Footer";
import ProductSection from "../../Website/ProductSection/ProductSection";
import { products } from "../../components/productsTS/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <TopBar />
        <Header />
        <div className="container py-20 text-center">
          <h1 className="section-title">Produto não encontrado</h1>
          <Link to="/produtos" className="mt-6 inline-block text-sm text-accent underline">
            Voltar para produtos
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main>
        {/* Breadcrumb */}
        <div className="container py-4">
          <div className="flex items-center gap-1 text-xs text-muted-foreground tracking-wide">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to={`/produtos?categoria=${product.category}`} className="hover:text-foreground transition-colors">{product.category}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>

        {/* Product */}
        <div className="container pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Image */}
            <div className="relative bg-secondary aspect-[3/4] overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              {product.isSale && discount > 0 && (
                <span className="absolute top-4 left-4 bg-sale text-accent-foreground text-xs tracking-widest uppercase px-4 py-1.5 font-medium">
                  -{discount}%
                </span>
              )}
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs tracking-widest uppercase px-4 py-1.5 font-medium">
                  Novo
                </span>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <h1 className="font-display text-3xl md:text-4xl font-light tracking-wide mb-2">
                {product.name}
              </h1>

              <div className="flex items-center gap-3 mb-6">
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                  </span>
                )}
                <span className={`text-2xl font-semibold ${product.isSale ? "text-sale" : "text-foreground"}`}>
                  R$ {product.price.toFixed(2).replace(".", ",")}
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Colors */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold tracking-widest uppercase mb-3">
                  Cor: <span className="font-normal text-muted-foreground">{selectedColor}</span>
                </h3>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 text-xs border transition-colors ${
                        selectedColor === color
                          ? "border-foreground bg-primary text-primary-foreground"
                          : "border-border hover:border-foreground"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-semibold tracking-widest uppercase">Tamanho</h3>
                  <button className="text-xs text-accent underline">Guia de Tamanhos</button>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 flex items-center justify-center text-sm border transition-colors ${
                        selectedSize === size
                          ? "border-foreground bg-primary text-primary-foreground"
                          : "border-border hover:border-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <h3 className="text-xs font-semibold tracking-widest uppercase mb-3">Quantidade</h3>
                <div className="flex items-center border border-border w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-secondary transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-6 text-sm font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-secondary transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mb-8">
                <button className="flex-1 bg-primary text-primary-foreground py-4 text-xs tracking-widest uppercase font-medium hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-center gap-2">
                  <ShoppingBag className="h-4 w-4" />
                  Adicionar ao Carrinho
                </button>
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="border border-border p-4 hover:bg-secondary transition-colors"
                  aria-label="Favoritar"
                >
                  <Heart className={`h-5 w-5 ${isLiked ? "fill-sale text-sale" : ""}`} />
                </button>
              </div>

              {/* Shipping info */}
              <div className="space-y-3 border-t border-border pt-6">
                <div className="flex items-center gap-3 text-sm">
                  <Truck className="h-4 w-4 text-accent" />
                  <span>Frete grátis para compras acima de R$ 299</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <RefreshCw className="h-4 w-4 text-accent" />
                  <span>Troca facilitada em até 30 dias</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        {relatedProducts.length > 0 && (
          <ProductSection
            title="Você Também Pode Gostar"
            products={relatedProducts}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
