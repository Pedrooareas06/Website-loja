import product1 from "../../assets/product-1.jpg";
import product2 from "../../assets/product-2.jpg";
import product3 from "../../assets/product-3.jpg";
import product4 from "../../assets/product-4.jpg";
import product5 from "../../assets/product-5.jpg";
import product6 from "../../assets/product-6.jpg";
import product7 from "../../assets/product-7.jpg";
import product8 from "../../assets/product-8.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  colors: string[];
  sizes: string[];
  isNew?: boolean;
  isSale?: boolean;
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Polo Piquet Premium",
    price: 189.9,
    image: product1,
    category: "Polos",
    colors: ["Marinho", "Branco", "Verde"],
    sizes: ["P", "M", "G", "GG"],
    isNew: true,
    description: "Polo piquet premium em algodão pima. Corte regular com acabamento refinado.",
  },
  {
    id: "2",
    name: "Camisa Linho Manga Longa",
    price: 259.9,
    originalPrice: 349.9,
    image: product2,
    category: "Camisas",
    colors: ["Verde Oliva", "Branco", "Azul Claro"],
    sizes: ["P", "M", "G", "GG", "XGG"],
    isSale: true,
    description: "Camisa em linho puro com manga longa. Ideal para ocasiões casuais e formais.",
  },
  {
    id: "3",
    name: "Calça Chino Classic",
    price: 219.9,
    image: product3,
    category: "Calças",
    colors: ["Bege", "Marinho", "Cáqui"],
    sizes: ["38", "40", "42", "44", "46"],
    description: "Calça chino em sarja de algodão com elastano. Conforto e elegância no dia a dia.",
  },
  {
    id: "4",
    name: "Tênis Couro Minimal",
    price: 349.9,
    originalPrice: 449.9,
    image: product4,
    category: "Calçados",
    colors: ["Branco", "Preto"],
    sizes: ["39", "40", "41", "42", "43", "44"],
    isSale: true,
    description: "Tênis em couro legítimo com design minimalista. Solado emborrachado para maior durabilidade.",
  },
  {
    id: "5",
    name: "Camiseta Pima Básica",
    price: 129.9,
    image: product5,
    category: "Camisetas",
    colors: ["Bordô", "Preto", "Branco", "Cinza"],
    sizes: ["P", "M", "G", "GG"],
    isNew: true,
    description: "Camiseta em algodão pima de alta qualidade. Toque macio e durável.",
  },
  {
    id: "6",
    name: "Jogger Moletom Premium",
    price: 199.9,
    image: product6,
    category: "Calças",
    colors: ["Cinza Claro", "Preto", "Marinho"],
    sizes: ["P", "M", "G", "GG"],
    description: "Jogger em moletom premium com acabamento peluciado. Conforto absoluto.",
  },
  {
    id: "7",
    name: "Short Praia Liso",
    price: 149.9,
    originalPrice: 189.9,
    image: product7,
    category: "Shorts",
    colors: ["Marinho", "Verde", "Coral"],
    sizes: ["P", "M", "G", "GG"],
    isSale: true,
    description: "Short de praia em tecido de secagem rápida. Cores que duram muito mais.",
  },
  {
    id: "8",
    name: "Bermuda Linho Casual",
    price: 179.9,
    image: product8,
    category: "Shorts",
    colors: ["Verde Salvia", "Bege", "Azul"],
    sizes: ["38", "40", "42", "44"],
    isNew: true,
    description: "Bermuda em linho com caimento leve e natural. Perfeita para o verão.",
  },
];

export const categories = [
  "Novidades",
  "Camisetas",
  "Polos",
  "Camisas",
  "Calças",
  "Shorts",
  "Calçados",
  "Acessórios",
];
