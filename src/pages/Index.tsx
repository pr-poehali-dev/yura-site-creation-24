import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroAboutCatalogSpecs from "@/components/HeroAboutCatalogSpecs";
import ConfiguratorSection from "@/components/ConfiguratorSection";
import DeliverySection from "@/components/DeliverySection";

const BASE_PRICE: Record<string, number> = {
  "1000×1000": 85000,
  "1500×1000": 145000,
  "2000×1000": 210000,
  "2000×1500": 290000,
};
const HOLE_PRICE: Record<string, number> = { "28": 0, "16": 12000, both: 18000 };
const SURFACE_PRICE: Record<string, number> = { standard: 0, hardened: 35000, nitrided: 55000 };
const LEGS_PRICE: Record<string, number> = { fixed: 0, adjustable: 8000, folding: 15000 };
const ACCESSORIES_PRICE: Record<string, number> = { none: 0, starter: 25000, pro: 65000 };

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [size, setSize] = useState("1500×1000");
  const [holes, setHoles] = useState("28");
  const [surface, setSurface] = useState("standard");
  const [legs, setLegs] = useState("adjustable");
  const [accessories, setAccessories] = useState("none");
  const [quantity, setQuantity] = useState(1);

  const totalPrice =
    ((BASE_PRICE[size] || 145000) +
      HOLE_PRICE[holes] +
      SURFACE_PRICE[surface] +
      LEGS_PRICE[legs] +
      ACCESSORIES_PRICE[accessories]) *
    quantity;

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        onScrollTo={scrollTo}
        onToggleMobile={() => setMobileMenuOpen(!mobileMenuOpen)}
      />
      <HeroAboutCatalogSpecs onScrollTo={scrollTo} />
      <ConfiguratorSection
        size={size}
        holes={holes}
        surface={surface}
        legs={legs}
        accessories={accessories}
        quantity={quantity}
        totalPrice={totalPrice}
        onSetSize={setSize}
        onSetHoles={setHoles}
        onSetSurface={setSurface}
        onSetLegs={setLegs}
        onSetAccessories={setAccessories}
        onSetQuantity={setQuantity}
      />
      <DeliverySection />
    </div>
  );
}
