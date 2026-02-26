import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { categories } from "../../components/productsTS/products";

const Header = () => {
    const [isMenuOpen, setIsMenuOPen] = useState(false);
    const [isSearchOpen, setIsSearchOPen] = useState(false);
    

    return (
        <header className="sticky top-0 z-50 bg-card border-b border-border">
            <div className="container flex items-center justify-between h-16 md:h-20">

                {/* Mobile menu toogle */}
                <button
                className="md:hidden p-2 =ml-2"
                onClick={() => setIsMenuOPen(!isMenuOpen)}
                arial-label = "Menu"
                >
                    {isMenuOpen ? <X className="h-5 w=5"/> : <Menu className="h-5 w-5"/>}
                </button>

                <Link to="/" className="font-display text-2xl md:text-3xl font-semibold tracking-wider">
                 Verso
                </Link>

                <nav className="hidden md:flex items-center gap-6 lg;gap-8">
                    {categories.map((cat) => (
                        <Link
                        key={cat}
                        to={'/produtos?categoria=${cat}'}
                        className="nav-link text-foreground hover:text-accent"
                        >
                            {cat}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}

export default Header;
