import Icon from "@/components/ui/icon";

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

interface ConfiguratorSectionProps {
  size: string;
  holes: string;
  surface: string;
  legs: string;
  accessories: string;
  quantity: number;
  totalPrice: number;
  onSetSize: (v: string) => void;
  onSetHoles: (v: string) => void;
  onSetSurface: (v: string) => void;
  onSetLegs: (v: string) => void;
  onSetAccessories: (v: string) => void;
  onSetQuantity: (v: number) => void;
}

function ConfigBlock({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <div className="border border-border bg-[hsl(var(--card))]">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-[hsl(var(--secondary))]">
        <Icon name={icon} size={14} className="text-[hsl(var(--orange))]" />
        <span className="font-oswald text-sm uppercase tracking-wider">{title}</span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function PriceLine({ label, val }: { label: string; val: number }) {
  return (
    <div className="flex justify-between items-center">
      <span className="font-ibm text-sm text-[hsl(var(--muted-foreground))]">{label}</span>
      <span className="font-ibm text-sm text-[hsl(var(--chrome))]">{val.toLocaleString()} ₽</span>
    </div>
  );
}

export default function ConfiguratorSection({
  size, holes, surface, legs, accessories, quantity, totalPrice,
  onSetSize, onSetHoles, onSetSurface, onSetLegs, onSetAccessories, onSetQuantity,
}: ConfiguratorSectionProps) {
  return (
    <section id="configurator" className="py-24 bg-background relative">
      <div className="absolute inset-0 tech-grid opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-[hsl(var(--orange))] font-oswald text-sm uppercase tracking-[0.3em] mb-4">Конфигуратор</div>
          <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase">Настройте свой стол</h2>
          <p className="font-ibm text-[hsl(var(--chrome))] mt-3 max-w-xl mx-auto">
            Выберите параметры — стоимость пересчитывается автоматически
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <ConfigBlock title="Размер столешницы" icon="Maximize2">
              <div className="grid grid-cols-2 gap-2">
                {Object.keys(BASE_PRICE).map((s) => (
                  <button
                    key={s}
                    onClick={() => onSetSize(s)}
                    className={`px-4 py-3 border font-ibm text-sm transition-all text-left ${
                      size === s
                        ? "border-[hsl(var(--orange))] bg-[hsl(var(--orange))/10] text-[hsl(var(--orange))]"
                        : "border-border text-[hsl(var(--chrome))] hover:border-[hsl(var(--orange))/50]"
                    }`}
                  >
                    <span className="font-oswald font-bold text-base">{s} мм</span>
                    <span className="block text-xs opacity-70 mt-0.5">{BASE_PRICE[s].toLocaleString()} ₽</span>
                  </button>
                ))}
              </div>
            </ConfigBlock>

            <ConfigBlock title="Диаметр отверстий" icon="Circle">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { val: "28", label: "Ø28 мм", sub: "Стандарт" },
                  { val: "16", label: "Ø16 мм", sub: "+12 000 ₽" },
                  { val: "both", label: "Ø28+16 мм", sub: "+18 000 ₽" },
                ].map((o) => (
                  <button
                    key={o.val}
                    onClick={() => onSetHoles(o.val)}
                    className={`px-3 py-3 border font-ibm text-sm transition-all ${
                      holes === o.val
                        ? "border-[hsl(var(--orange))] bg-[hsl(var(--orange))/10] text-[hsl(var(--orange))]"
                        : "border-border text-[hsl(var(--chrome))] hover:border-[hsl(var(--orange))/50]"
                    }`}
                  >
                    <div className="font-oswald font-bold">{o.label}</div>
                    <div className="text-xs opacity-70">{o.sub}</div>
                  </button>
                ))}
              </div>
            </ConfigBlock>

            <ConfigBlock title="Обработка поверхности" icon="Layers">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { val: "standard", label: "Стандарт", sub: "Базовая" },
                  { val: "hardened", label: "Закалённая", sub: "+35 000 ₽" },
                  { val: "nitrided", label: "Азотированная", sub: "+55 000 ₽" },
                ].map((o) => (
                  <button
                    key={o.val}
                    onClick={() => onSetSurface(o.val)}
                    className={`px-3 py-3 border font-ibm text-sm transition-all ${
                      surface === o.val
                        ? "border-[hsl(var(--orange))] bg-[hsl(var(--orange))/10] text-[hsl(var(--orange))]"
                        : "border-border text-[hsl(var(--chrome))] hover:border-[hsl(var(--orange))/50]"
                    }`}
                  >
                    <div className="font-oswald font-bold">{o.label}</div>
                    <div className="text-xs opacity-70">{o.sub}</div>
                  </button>
                ))}
              </div>
            </ConfigBlock>

            <ConfigBlock title="Тип ножек" icon="AlignVerticalJustifyCenter">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { val: "fixed", label: "Фиксированные", sub: "Стандарт" },
                  { val: "adjustable", label: "Регулируемые", sub: "+8 000 ₽" },
                  { val: "folding", label: "Складные", sub: "+15 000 ₽" },
                ].map((o) => (
                  <button
                    key={o.val}
                    onClick={() => onSetLegs(o.val)}
                    className={`px-3 py-3 border font-ibm text-sm transition-all ${
                      legs === o.val
                        ? "border-[hsl(var(--orange))] bg-[hsl(var(--orange))/10] text-[hsl(var(--orange))]"
                        : "border-border text-[hsl(var(--chrome))] hover:border-[hsl(var(--orange))/50]"
                    }`}
                  >
                    <div className="font-oswald font-bold">{o.label}</div>
                    <div className="text-xs opacity-70">{o.sub}</div>
                  </button>
                ))}
              </div>
            </ConfigBlock>

            <ConfigBlock title="Набор аксессуаров" icon="Package">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { val: "none", label: "Без набора", sub: "Только стол" },
                  { val: "starter", label: "Стартовый", sub: "+25 000 ₽" },
                  { val: "pro", label: "PRO-набор", sub: "+65 000 ₽" },
                ].map((o) => (
                  <button
                    key={o.val}
                    onClick={() => onSetAccessories(o.val)}
                    className={`px-3 py-3 border font-ibm text-sm transition-all ${
                      accessories === o.val
                        ? "border-[hsl(var(--orange))] bg-[hsl(var(--orange))/10] text-[hsl(var(--orange))]"
                        : "border-border text-[hsl(var(--chrome))] hover:border-[hsl(var(--orange))/50]"
                    }`}
                  >
                    <div className="font-oswald font-bold">{o.label}</div>
                    <div className="text-xs opacity-70">{o.sub}</div>
                  </button>
                ))}
              </div>
            </ConfigBlock>
          </div>

          {/* Price card */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="border border-[hsl(var(--orange))/50] bg-[hsl(var(--card))]">
              <div className="bg-[hsl(var(--orange))] px-5 py-3 flex items-center gap-2">
                <Icon name="Calculator" size={16} className="text-white" />
                <span className="font-oswald text-sm uppercase tracking-widest text-white">Расчёт стоимости</span>
              </div>
              <div className="p-5 space-y-3">
                <PriceLine label="Базовый стол" val={BASE_PRICE[size] || 145000} />
                {HOLE_PRICE[holes] > 0 && <PriceLine label="Отверстия Ø16" val={HOLE_PRICE[holes]} />}
                {SURFACE_PRICE[surface] > 0 && <PriceLine label="Обработка" val={SURFACE_PRICE[surface]} />}
                {LEGS_PRICE[legs] > 0 && <PriceLine label="Ножки" val={LEGS_PRICE[legs]} />}
                {ACCESSORIES_PRICE[accessories] > 0 && <PriceLine label="Аксессуары" val={ACCESSORIES_PRICE[accessories]} />}

                <div className="border-t border-border pt-3">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-ibm text-sm text-[hsl(var(--muted-foreground))]">Количество</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSetQuantity(Math.max(1, quantity - 1))}
                        className="w-7 h-7 border border-border flex items-center justify-center text-[hsl(var(--chrome))] hover:border-[hsl(var(--orange))] hover:text-[hsl(var(--orange))] transition-colors"
                      >
                        <Icon name="Minus" size={12} />
                      </button>
                      <span className="font-oswald text-lg w-6 text-center">{quantity}</span>
                      <button
                        onClick={() => onSetQuantity(quantity + 1)}
                        className="w-7 h-7 border border-border flex items-center justify-center text-[hsl(var(--chrome))] hover:border-[hsl(var(--orange))] hover:text-[hsl(var(--orange))] transition-colors"
                      >
                        <Icon name="Plus" size={12} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[hsl(var(--orange))/30] pt-4">
                  <div className="text-[hsl(var(--muted-foreground))] font-ibm text-xs uppercase tracking-wider mb-1">Итого</div>
                  <div className="font-oswald text-4xl font-bold text-[hsl(var(--orange))]">
                    {totalPrice.toLocaleString()} ₽
                  </div>
                  {quantity > 1 && (
                    <div className="font-ibm text-xs text-[hsl(var(--muted-foreground))] mt-1">
                      {(totalPrice / quantity).toLocaleString()} ₽ / шт.
                    </div>
                  )}
                </div>

                <button className="w-full font-oswald uppercase tracking-wider py-3 bg-[hsl(var(--orange))] text-white hover:bg-[hsl(var(--orange-dim))] transition-colors text-sm mt-2 orange-glow">
                  Запросить КП
                </button>
                <button className="w-full font-oswald uppercase tracking-wider py-3 border border-border text-[hsl(var(--chrome))] hover:border-[hsl(var(--orange))] hover:text-[hsl(var(--orange))] transition-colors text-sm">
                  Позвонить
                </button>

                <div className="flex items-center gap-2 pt-2">
                  <Icon name="Clock" size={12} className="text-[hsl(var(--muted-foreground))]" />
                  <span className="font-ibm text-xs text-[hsl(var(--muted-foreground))]">
                    Срок изготовления: 10–25 рабочих дней
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
