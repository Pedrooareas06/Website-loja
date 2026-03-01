import { Link } from "react-router-dom";
import categoryPolos from "../../assets/category-polos.jpg";  
import categoryShorts from "../../assets/category-shorts.jpg";
import categoryShoes from "../../assets/category-shoes.jpg";
import categoryShirts from "../../assets/category-shirts.jpg";

const categoriesData = [
  { name: "Polos", image: categoryPolos, link: "/produtos?categoria=Polos" },
  { name: "Shorts", image: categoryShorts, link: "/produtos?categoria=Shorts" },
  { name: "Calçados", image: categoryShoes, link: "/produtos?categoria=Calçados" },
  { name: "Camisas", image: categoryShirts, link: "/produtos?categoria=Camisas" },
];

const CategoryGrid = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <h2 className="section-title mb-10">Categorias</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categoriesData.map((cat) => (
            <Link
              key={cat.name}
              to={cat.link}
              className="group relative aspect-square overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/25 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end p-4 md:p-6">
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-medium text-primary-foreground">
                    {cat.name}
                  </h3>
                  <span className="text-primary-foreground/80 text-xs tracking-widest uppercase mt-1 inline-block">
                    Confira →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
