import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/414ad568-3573-4fb9-8b94-a3543b56ef88/bucket/ac5e1c7f-d83a-4b3d-b4f0-c0a1e205dd3d.jpg";
const PRODUCT_IMAGE = "https://cdn.poehali.dev/projects/414ad568-3573-4fb9-8b94-a3543b56ef88/bucket/ac5e1c7f-d83a-4b3d-b4f0-c0a1e205dd3d.jpg";

const PRODUCTS = [
  {
    name: "СТ-1000 СТАРТ",
    size: "1000×1000 мм",
    load: "500 кг",
    price: "85 000",
    tag: "Старт",
    desc: "Перфорированная поверхность, нижняя полка, колёсики. Идеален для мастерских и небольших производств.",
    img: PRODUCT_IMAGE,
  },
  {
    name: "СТ-1500 ПРОФИ",
    size: "1500×1000 мм",
    load: "800 кг",
    price: "145 000",
    tag: "Хит",
    desc: "Шаг отверстий 50×50 мм, регулировка высоты, набор зажимов и магнитов в комплекте.",
    img: PRODUCT_IMAGE,
  },
  {
    name: "СТ-2000 ТЯЖЁЛЫЙ",
    size: "2000×1000 мм",
    load: "1200 кг",
    price: "210 000",
    tag: "Производство",
    desc: "Для промышленных объёмов. Усиленный каркас, сварные соединения, расширенный набор крепежа.",
    img: PRODUCT_IMAGE,
  },
  {
    name: "СТ-3D МОДУЛЬНЫЙ",
    size: "Под заказ",
    load: "2000 кг",
    price: "от 350 000",
    tag: "Premium",
    desc: "3D-позиционирование под любым углом. Угловые упоры, удлинители, индивидуальное оформление.",
    img: PRODUCT_IMAGE,
  },
];

const SPECS = [
  { param: "Материал", value: "Высокопрочная конструкционная сталь" },
  { param: "Поверхность", value: "Перфорированная, шаг отверстий 50×50 мм" },
  { param: "Диаметр отверстий", value: "Ø28 мм (стандарт), Ø16 мм (опция)" },
  { param: "Регулировка высоты", value: "750–950 мм (опционально)" },
  { param: "Мобильность", value: "Колёсики для перемещения по цеху" },
  { param: "Нижняя полка", value: "Перфорированная, для хранения инструмента" },
  { param: "Соединения каркаса", value: "Сварные — максимальная жёсткость" },
  { param: "Стандарт совместимости", value: "DEMMELER, SIEGMUND, STRONG HAND" },
  { param: "Плоскостность", value: "±0.05 мм на 1000 мм длины" },
  { param: "Гарантия", value: "5 лет на столешницу, 2 года на аксессуары" },
];

interface HeroAboutCatalogSpecsProps {
  onScrollTo: (id: string) => void;
}

export default function HeroAboutCatalogSpecs({ onScrollTo }: HeroAboutCatalogSpecsProps) {
  return (
    <>
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
                onClick={() => onScrollTo("configurator")}
                className="font-oswald uppercase tracking-wider px-8 py-3 bg-[hsl(var(--orange))] text-white hover:bg-[hsl(var(--orange-dim))] transition-colors text-sm orange-glow"
              >
                Рассчитать стоимость
              </button>
              <button
                onClick={() => onScrollTo("catalog")}
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
                Наши 3D сварочные столы — инновационное решение, которое значительно упрощает
                процесс сварки и сборки металлоконструкций. Система крепления с трёхмерной
                регулировкой позволяет фиксировать детали под любым углом и в любом положении.
              </p>
              <p className="font-ibm text-[hsl(var(--chrome))] leading-relaxed mb-8">
                Столы применяются в автомобильной промышленности, металлоконструкциях, судостроении
                и авиастроении. Предлагаем индивидуальный подход: разработка решений под конкретные
                задачи клиента в срок от 10 рабочих дней.
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
                { num: "01", title: "Автомобильная пром.", desc: "Сборка кузовных элементов, рам, кронштейнов под точные допуски" },
                { num: "02", title: "Металлоконструкции", desc: "Лестницы, ограждения, каркасы зданий — любая геометрия" },
                { num: "03", title: "Судостроение", desc: "Создание корпусов судов и морских платформ в жёстком позиционировании" },
                { num: "04", title: "Авиастроение", desc: "Сборка фюзеляжей и крыльев с максимальной точностью ±0.05 мм" },
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
              <div key={p.name} className="border border-border hover:border-[hsl(var(--orange))] transition-all duration-300 group bg-[hsl(var(--card))] flex flex-col">
                <div className="relative overflow-hidden bg-[hsl(var(--secondary))] h-44">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--card))] to-transparent opacity-60" />
                  <span className="absolute top-3 left-3 font-ibm text-xs px-2 py-1 bg-[hsl(var(--orange))] text-white uppercase tracking-wider">
                    {p.tag}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-oswald text-xl font-bold uppercase">{p.name}</h3>
                    <Icon name="Grid3x3" size={16} className="text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--orange))] transition-colors flex-shrink-0" />
                  </div>
                  <p className="font-ibm text-xs text-[hsl(var(--muted-foreground))] mb-4 leading-relaxed flex-1">{p.desc}</p>
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
                      onClick={() => onScrollTo("configurator")}
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
    </>
  );
}
