import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/414ad568-3573-4fb9-8b94-a3543b56ef88/files/aa3aa78a-4c1c-4a6c-83be-5a360a7cf4bc.jpg";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "about", label: "О компании" },
  { id: "catalog", label: "Каталог" },
  { id: "specs", label: "Тех. характеристики" },
  { id: "configurator", label: "Конфигуратор" },
  { id: "delivery", label: "Доставка" },
];

const PRODUCTS = [
  {
    name: "WP-1000 BASIC",
    size: "1000×1000 мм",
    load: "500 кг",
    price: "85 000",
    tag: "Старт",
    desc: "Оптимальное решение для малых производств и мастерских",
  },
  {
    name: "WP-1500 PRO",
    size: "1500×1000 мм",
    load: "800 кг",
    price: "145 000",
    tag: "Хит",
    desc: "Профессиональная серия с расширенным набором крепёжных отверстий",
  },
  {
    name: "WP-2000 HEAVY",
    size: "2000×1000 мм",
    load: "1200 кг",
    price: "210 000",
    tag: "Для крупных задач",
    desc: "Тяжёлая серия для промышленных объёмов и крупногабаритных изделий",
  },
  {
    name: "WP-3D MODULAR",
    size: "Кастомный",
    load: "2000 кг",
    price: "от 350 000",
    tag: "Premium",
    desc: "Модульная система с 3D-позиционированием для сложных сборочных операций",
  },
];

const SPECS = [
  { param: "Материал столешницы", value: "Конструкционная сталь Ст3, S235" },
  { param: "Диаметр отверстий", value: "Ø28 мм (стандарт), Ø16 мм (опция)" },
  { param: "Шаг отверстий", value: "50×50 мм — точность ±0.1 мм" },
  { param: "Толщина столешницы", value: "от 100 мм до 200 мм" },
  { param: "Покрытие поверхности", value: "Антикоррозионная грунтовка + порошок" },
  { param: "Стойки и регулировка", value: "Регулируемые от 750 до 950 мм" },
  { param: "Стандарт отверстий", value: "DEMMELER, SIEGMUND совместимость" },
  { param: "Твёрдость поверхности", value: "HRC 58–62 (закалённый вариант)" },
  { param: "Плоскостность", value: "±0.05 мм на 1000 мм длины" },
  { param: "Гарантия", value: "5 лет на столешницу, 2 года на аксессуары" },
];

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
      {/* NAVBAR */}
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
                onClick={() => scrollTo(item.id)}
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

          <button className="lg:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[hsl(var(--card))] border-t border-border px-4 py-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left py-3 font-ibm text-sm uppercase tracking-wider text-[hsl(var(--chrome))] hover:text-[hsl(var(--orange))] transition-colors border-b border-border last:border-0"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 tech-grid opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 border border-[hsl(var(--orange))/50] px-3 py-1 mb-6 animate-fade-up">
              <div className="w-1.5 h-1.5 bg-[hsl(var(--orange))] rounded-full" />
              <span className="font-ibm text-xs uppercase tracking-[0.2em] text-[hsl(var(--orange))]">
                Профессиональное оборудование
              </span>
            </div>

            <h1 className="font-oswald text-5xl md:text-7xl font-bold uppercase leading-none mb-4 animate-fade-up-delay-1">
              Сварочные
              <br />
              <span className="text-[hsl(var(--orange))]">столы 3D</span>
              <br />
              нового поколения
            </h1>

            <p className="font-ibm text-lg text-[hsl(var(--chrome))] mb-8 leading-relaxed max-w-xl animate-fade-up-delay-2">
              Модульные сварочные столы с точностью позиционирования ±0.05 мм.
              Собственное производство. Конфигуратор под ваши задачи.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
              <button
                onClick={() => scrollTo("configurator")}
                className="font-oswald uppercase tracking-wider px-8 py-3 bg-[hsl(var(--orange))] text-white hover:bg-[hsl(var(--orange-dim))] transition-colors text-sm orange-glow"
              >
                Рассчитать стоимость
              </button>
              <button
                onClick={() => scrollTo("catalog")}
                className="font-oswald uppercase tracking-wider px-8 py-3 border border-[hsl(var(--chrome))/50] text-[hsl(var(--chrome))] hover:border-[hsl(var(--orange))] hover:text-[hsl(var(--orange))] transition-colors text-sm"
              >
                Смотреть каталог
              </button>
            </div>

            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-border animate-fade-up-delay-4">
              {[
                { val: "500+", label: "Столов поставлено" },
                { val: "12 лет", label: "На рынке" },
                { val: "±0.05", label: "мм точность" },
                { val: "5 лет", label: "Гарантия" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="tech-counter">{s.val}</div>
                  <div className="font-ibm text-xs uppercase tracking-wider text-[hsl(var(--muted-foreground))] mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="font-ibm text-xs uppercase tracking-widest text-[hsl(var(--chrome))]">Листать</span>
          <Icon name="ChevronDown" size={16} className="text-[hsl(var(--chrome))] animate-bounce" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 steel-texture relative">
        <div className="absolute inset-0 tech-grid opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[hsl(var(--orange))] font-oswald text-sm uppercase tracking-[0.3em] mb-4">О компании</div>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase mb-6">
                Точность —<br /><span className="text-[hsl(var(--orange))]">наш стандарт</span>
              </h2>
              <p className="font-ibm text-[hsl(var(--chrome))] leading-relaxed mb-6">
                С 2012 года WELDPRO 3D производит профессиональные сварочные столы для машиностроения,
                авиационной промышленности, автомобилестроения и судостроения. Каждый стол проходит
                контроль плоскостности на координатно-измерительных машинах.
              </p>
              <p className="font-ibm text-[hsl(var(--chrome))] leading-relaxed mb-8">
                Собственный конструкторский отдел позволяет выпускать столы под индивидуальные
                технические задания в срок от 10 рабочих дней.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "Factory", text: "Собственное производство" },
                  { icon: "Award", text: "Сертификаты ISO 9001" },
                  { icon: "Truck", text: "Доставка по России" },
                  { icon: "Wrench", text: "Монтаж и наладка" },
                ].map((f) => (
                  <div key={f.text} className="flex items-center gap-3 p-3 border border-border">
                    <Icon name={f.icon} size={18} className="text-[hsl(var(--orange))] flex-shrink-0" />
                    <span className="font-ibm text-sm text-[hsl(var(--chrome))]">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {[
                { num: "01", title: "Проектирование", desc: "Разрабатываем 3D-модель под ваши задачи и производственные условия" },
                { num: "02", title: "Производство", desc: "Изготавливаем из конструкционной стали с термообработкой поверхности" },
                { num: "03", title: "Контроль качества", desc: "Измеряем плоскостность на КИМ, проверяем каждое отверстие" },
                { num: "04", title: "Поставка", desc: "Доставляем в защитной упаковке с монтажом на объекте" },
              ].map((step) => (
                <div key={step.num} className="flex gap-4 p-4 bg-background/50 border border-border hover:border-[hsl(var(--orange))/50] transition-colors">
                  <div className="font-oswald text-3xl font-bold text-[hsl(var(--orange))/30] flex-shrink-0 w-12">{step.num}</div>
                  <div>
                    <div className="font-oswald text-lg font-semibold uppercase mb-1">{step.title}</div>
                    <div className="font-ibm text-sm text-[hsl(var(--chrome))]">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-24 bg-background relative">
        <div className="absolute inset-0 tech-grid opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-[hsl(var(--orange))] font-oswald text-sm uppercase tracking-[0.3em] mb-4">Продукция</div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase">Каталог столов</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRODUCTS.map((p) => (
              <div key={p.name} className="border border-border hover:border-[hsl(var(--orange))] transition-all duration-300 group bg-[hsl(var(--card))]">
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-ibm text-xs px-2 py-1 bg-[hsl(var(--orange))/15] text-[hsl(var(--orange))] border border-[hsl(var(--orange))/30] uppercase tracking-wider">
                      {p.tag}
                    </span>
                    <Icon name="Grid3x3" size={16} className="text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--orange))] transition-colors" />
                  </div>
                  <h3 className="font-oswald text-xl font-bold uppercase mb-1">{p.name}</h3>
                  <p className="font-ibm text-xs text-[hsl(var(--muted-foreground))] mb-4 leading-relaxed">{p.desc}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="font-ibm text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider">Размер</span>
                      <span className="font-ibm text-xs text-[hsl(var(--chrome))]">{p.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-ibm text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider">Нагрузка</span>
                      <span className="font-ibm text-xs text-[hsl(var(--chrome))]">{p.load}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="font-oswald text-2xl font-bold text-[hsl(var(--orange))]">{p.price} ₽</div>
                    <button
                      onClick={() => scrollTo("configurator")}
                      className="mt-3 w-full font-oswald text-xs uppercase tracking-wider py-2 border border-[hsl(var(--orange))/50] text-[hsl(var(--orange))] hover:bg-[hsl(var(--orange))] hover:text-white transition-all"
                    >
                      Настроить
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section id="specs" className="py-24 steel-texture relative">
        <div className="absolute inset-0 tech-grid opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-[hsl(var(--orange))] font-oswald text-sm uppercase tracking-[0.3em] mb-4">Технические данные</div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase">Технические характеристики</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="border border-border">
              <div className="bg-[hsl(var(--orange))] px-5 py-3">
                <span className="font-oswald text-sm uppercase tracking-widest text-white">Конструктивные параметры</span>
              </div>
              <div className="divide-y divide-border">
                {SPECS.slice(0, 5).map((s) => (
                  <div key={s.param} className="flex px-5 py-3 hover:bg-[hsl(var(--secondary))] transition-colors">
                    <span className="font-ibm text-sm text-[hsl(var(--muted-foreground))] w-1/2 flex-shrink-0">{s.param}</span>
                    <span className="font-ibm text-sm text-[hsl(var(--chrome))]">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-border">
              <div className="bg-[hsl(var(--steel-light))] px-5 py-3 border-b border-[hsl(var(--orange))]">
                <span className="font-oswald text-sm uppercase tracking-widest text-foreground">Точность и качество</span>
              </div>
              <div className="divide-y divide-border">
                {SPECS.slice(5).map((s) => (
                  <div key={s.param} className="flex px-5 py-3 hover:bg-[hsl(var(--secondary))] transition-colors">
                    <span className="font-ibm text-sm text-[hsl(var(--muted-foreground))] w-1/2 flex-shrink-0">{s.param}</span>
                    <span className="font-ibm text-sm text-[hsl(var(--chrome))]">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 p-5 border border-[hsl(var(--orange))/30] bg-[hsl(var(--orange))/5]">
            <div className="flex items-center gap-3 mb-3">
              <Icon name="CheckCircle" size={16} className="text-[hsl(var(--orange))]" />
              <span className="font-oswald text-sm uppercase tracking-wider">Совместимость с системами аксессуаров</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {["DEMMELER", "SIEGMUND", "STRONG HAND", "CERFIX", "WURTH"].map((brand) => (
                <span key={brand} className="font-ibm text-xs px-3 py-1 border border-border text-[hsl(var(--chrome))] uppercase tracking-wider">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONFIGURATOR */}
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
                      onClick={() => setSize(s)}
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
                      onClick={() => setHoles(o.val)}
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
                      onClick={() => setSurface(o.val)}
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
                      onClick={() => setLegs(o.val)}
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
                      onClick={() => setAccessories(o.val)}
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
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-7 h-7 border border-border flex items-center justify-center text-[hsl(var(--chrome))] hover:border-[hsl(var(--orange))] hover:text-[hsl(var(--orange))] transition-colors"
                        >
                          <Icon name="Minus" size={12} />
                        </button>
                        <span className="font-oswald text-lg w-6 text-center">{quantity}</span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
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

      {/* DELIVERY */}
      <section id="delivery" className="py-24 steel-texture relative">
        <div className="absolute inset-0 tech-grid opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-[hsl(var(--orange))] font-oswald text-sm uppercase tracking-[0.3em] mb-4">Логистика</div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase">Доставка и монтаж</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {[
              { icon: "Package", title: "Упаковка", desc: "Деревянные паллеты, антикоррозионная плёнка, угловые протекторы. Полная сохранность при транспортировке." },
              { icon: "Truck", title: "Транспорт", desc: "Собственный автопарк для Москвы и МО. Транспортные компании по всей России и СНГ." },
              { icon: "MapPin", title: "Самовывоз", desc: "Со склада в Москве (Коломна). Готовы к отгрузке после предоплаты или 100% оплаты." },
              { icon: "Settings", title: "Монтаж", desc: "Выезд монтажной бригады, установка, нивелировка поверхности, инструктаж персонала." },
              { icon: "Shield", title: "Страхование", desc: "Страхование груза при доставке. Все риски покрыты страховым полисом." },
              { icon: "Headphones", title: "Сопровождение", desc: "Технический менеджер ведёт заказ от производства до пуска. Телефон 24/7." },
            ].map((item) => (
              <div key={item.title} className="p-5 border border-border hover:border-[hsl(var(--orange))/50] transition-colors bg-background/30 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-[hsl(var(--orange))/15] border border-[hsl(var(--orange))/30] flex items-center justify-center group-hover:bg-[hsl(var(--orange))] transition-colors">
                    <Icon name={item.icon} size={16} className="text-[hsl(var(--orange))] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-oswald text-lg font-semibold uppercase">{item.title}</h3>
                </div>
                <p className="font-ibm text-sm text-[hsl(var(--chrome))] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="border border-border overflow-hidden">
            <div className="bg-[hsl(var(--orange))] px-5 py-3">
              <span className="font-oswald text-sm uppercase tracking-widest text-white">Зоны доставки и сроки</span>
            </div>
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
              {[
                { zone: "Москва и МО", time: "1–3 дня", price: "Бесплатно от 200 000 ₽" },
                { zone: "Европейская Россия", time: "3–7 дней", price: "По тарифу ТК" },
                { zone: "Сибирь, Урал, ДФО", time: "7–14 дней", price: "По тарифу ТК" },
              ].map((z) => (
                <div key={z.zone} className="p-6 text-center">
                  <div className="font-oswald text-xl font-bold uppercase mb-1">{z.zone}</div>
                  <div className="tech-counter text-2xl mb-1">{z.time}</div>
                  <div className="font-ibm text-xs text-[hsl(var(--muted-foreground))]">{z.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[hsl(var(--orange))] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(45deg, #000 25%, transparent 25%), linear-gradient(-45deg, #000 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #000 75%), linear-gradient(-45deg, transparent 75%, #000 75%)",
            backgroundSize: "8px 8px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase text-white mb-4">Готовы к заказу?</h2>
          <p className="font-ibm text-white/80 mb-8 max-w-xl mx-auto">
            Оставьте заявку — менеджер свяжется в течение 30 минут и поможет подобрать оптимальную конфигурацию
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="font-oswald uppercase tracking-wider px-10 py-4 bg-white text-[hsl(var(--orange))] hover:bg-white/90 transition-colors text-sm font-bold">
              Оставить заявку
            </button>
            <button className="font-oswald uppercase tracking-wider px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-[hsl(var(--orange))] transition-colors text-sm">
              Скачать каталог PDF
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[hsl(220_15%_5%)] border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 bg-[hsl(var(--orange))] flex items-center justify-center">
                  <Icon name="Zap" size={12} className="text-white" />
                </div>
                <span className="font-oswald text-lg font-bold tracking-widest uppercase">
                  WELDPRO <span className="text-[hsl(var(--orange))]">3D</span>
                </span>
              </div>
              <p className="font-ibm text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">
                Производитель профессиональных сварочных столов с 2012 года
              </p>
            </div>
            <div>
              <div className="font-oswald text-xs uppercase tracking-widest text-[hsl(var(--muted-foreground))] mb-3">Продукция</div>
              {["Каталог столов", "Аксессуары", "Запчасти", "Конфигуратор"].map((l) => (
                <button key={l} className="block font-ibm text-sm text-[hsl(var(--chrome))] hover:text-[hsl(var(--orange))] transition-colors mb-2">{l}</button>
              ))}
            </div>
            <div>
              <div className="font-oswald text-xs uppercase tracking-widest text-[hsl(var(--muted-foreground))] mb-3">Компания</div>
              {["О нас", "Производство", "Сертификаты", "Вакансии"].map((l) => (
                <button key={l} className="block font-ibm text-sm text-[hsl(var(--chrome))] hover:text-[hsl(var(--orange))] transition-colors mb-2">{l}</button>
              ))}
            </div>
            <div>
              <div className="font-oswald text-xs uppercase tracking-widest text-[hsl(var(--muted-foreground))] mb-3">Контакты</div>
              <div className="space-y-2">
                {[
                  { icon: "Phone", text: "8 800 123-45-67" },
                  { icon: "Mail", text: "info@weldpro3d.ru" },
                  { icon: "MapPin", text: "Москва, Коломна" },
                ].map((c) => (
                  <div key={c.text} className="flex items-center gap-2">
                    <Icon name={c.icon} size={12} className="text-[hsl(var(--orange))]" />
                    <span className="font-ibm text-sm text-[hsl(var(--chrome))]">{c.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
            <span className="font-ibm text-xs text-[hsl(var(--muted-foreground))]">© 2024 WELDPRO 3D. Все права защищены.</span>
            <span className="font-ibm text-xs text-[hsl(var(--muted-foreground))]">ИНН 7701234567 · ООО «ВЕЛДПРО»</span>
          </div>
        </div>
      </footer>
    </div>
  );
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