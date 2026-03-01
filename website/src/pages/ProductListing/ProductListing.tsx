import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import TopBar from "../../Website/TopBar/TopBar";
import Header from "../../Website/Header/Header";
import Footer from "../../Website/Footer/Footer";
import ProductCard from "../../Website/ProductCard/ProductCard";
import { products, categories } from "../../components/productsTS/products";

const sortOptions = [
  { label: "Mais Relevantes", value: "relevance" },
  { label: "Menor Preço", value: "price-asc" },
  { label: "Maior Preço", value: "price-desc" },
  { label: "Novidades", value: "newest" },
];

const ProductListing = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("categoria") || "";
  const [sortBy, setSortBy] = useState("relevance");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];
    if (selectedCategory && selectedCategory !== "Novidades" && selectedCategory !== "Liquidação") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    } else if (selectedCategory === "Novidades") {
      filtered = filtered.filter((p) => p.isNew);
    } else if (selectedCategory === "Liquidação") {
      filtered = filtered.filter((p) => p.isSale);
    }

    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main className="container py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="text-xs text-muted-foreground mb-6 tracking-wide">
          <span>Home</span> / <span className="text-foreground">{selectedCategory || "Todos os Produtos"}</span>
        </div>

        <h1 className="section-title mb-8 md:mb-12">
          {selectedCategory || "Todos os Produtos"}
        </h1>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-xs tracking-widest uppercase font-medium"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filtros
          </button>
          <span className="text-xs text-muted-foreground">
            {filteredProducts.length} produto{filteredProducts.length !== 1 && "s"}
          </span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-xs tracking-wide uppercase font-medium pr-6 cursor-pointer focus:outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-3 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          {showFilters && (
            <aside className="w-56 shrink-0 hidden md:block">
              <h3 className="text-xs font-semibold tracking-widest uppercase mb-4">Categorias</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setSelectedCategory("")}
                    className={`text-sm transition-colors ${!selectedCategory ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    Todos
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-sm transition-colors ${selectedCategory === cat ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground">Nenhum produto encontrado nesta categoria.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductListing;
