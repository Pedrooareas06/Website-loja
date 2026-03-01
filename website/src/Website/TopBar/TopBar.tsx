import { Truck } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 text-center">
      <div className="container flex items-center justify-center gap-2 text-xs tracking-widest uppercase">
        <Truck className="h-3.5 w-3.5" />
        <span>Frete grátis para compras acima de R$ 299</span>
      </div>
    </div>
  );
};

export default TopBar;
