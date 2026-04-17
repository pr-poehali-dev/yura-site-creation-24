import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "about", label: "О компании" },
  { id: "catalog", label: "Каталог" },
  { id: "specs", label: "Тех. характеристики" },
  { id: "configurator", label: "Конфигуратор" },
  { id: "delivery", label: "Доставка" },
];

interface NavbarProps {
  activeSection: string;
  mobileMenuOpen: boolean;
  onScrollTo: (id: string) => void;
  onToggleMobile: () => void;
}

export default function Navbar({ activeSection, mobileMenuOpen, onScrollTo, onToggleMobile }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[hsl(var(--orange))] flex items-center justify-center">
            <Icon name="Zap" size={16} className="text-white" />
          </div>
          <span className="font-oswald text-xl font-bold tracking-widest uppercase text-foreground">
            WELDPRO <span className="text-[hsl(var(--orange))]">3D</span>
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onScrollTo(item.id)}
              className={`nav-link font-ibm text-xs uppercase tracking-wider transition-colors ${
                activeSection === item.id
                  ? "text-[hsl(var(--orange))] active"
                  : "text-[hsl(var(--chrome))] hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="tel:+78001234567"
            className="font-oswald text-sm tracking-wider text-[hsl(var(--orange))] hover:text-foreground transition-colors"
          >
            8 800 123-45-67
          </a>
        </div>

        <button className="lg:hidden text-foreground" onClick={onToggleMobile}>
          <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[hsl(var(--card))] border-t border-border px-4 py-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onScrollTo(item.id)}
              className="block w-full text-left py-3 font-ibm text-sm uppercase tracking-wider text-[hsl(var(--chrome))] hover:text-[hsl(var(--orange))] transition-colors border-b border-border last:border-0"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
