import Icon from "@/components/ui/icon";

export default function DeliverySection() {
  return (
    <>
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

          {/* Комплектация */}
          <div className="grid lg:grid-cols-2 gap-4 mb-6">
            <div className="border border-border">
              <div className="bg-[hsl(var(--secondary))] px-5 py-3 border-b border-[hsl(var(--orange))]">
                <span className="font-oswald text-sm uppercase tracking-widest">Стандартная комплектация</span>
              </div>
              <div className="p-5 space-y-2">
                {[
                  "Основной рабочий стол с перфорацией",
                  "Нижняя полка для хранения инструмента",
                  "Набор магнитов и зажимов для крепежа",
                  "Колёсики для мобильности по цеху",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Icon name="CheckCircle" size={14} className="text-[hsl(var(--orange))] flex-shrink-0" />
                    <span className="font-ibm text-sm text-[hsl(var(--chrome))]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-border">
              <div className="bg-[hsl(var(--secondary))] px-5 py-3 border-b border-border">
                <span className="font-oswald text-sm uppercase tracking-widest">Дополнительно под заказ</span>
              </div>
              <div className="p-5 space-y-2">
                {[
                  "Специальные угловые упоры",
                  "Удлинители рабочего пространства",
                  "Регулировка высоты 750–950 мм",
                  "Индивидуальное оформление под ваши требования",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Icon name="Plus" size={14} className="text-[hsl(var(--muted-foreground))] flex-shrink-0" />
                    <span className="font-ibm text-sm text-[hsl(var(--chrome))]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
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
    </>
  );
}
