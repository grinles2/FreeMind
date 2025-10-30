"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, X, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type Product = {
  id: string;
  name: string;
  price: number;
  banner: string;
  description: string;
};

export default function ShopPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const [selected, setSelected] = useState<Product | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [nickname, setNickname] = useState("");
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Главная", external: false },
    { href: "/map", label: "Онлайн-карта", external: false },
    { href: "/wiki", label: "Вики", external: false },
    { href: "/rules", label: "Правила", external: false },
    { href: "/shop", label: "Магазин", external: false }
  ];
  const products: Product[] = [
    {
      id: "fmboy",
      name: "Подписка ФМбойчик",
      price: 99,
      banner: "1.png",
      description: `
Играйте интересней с нашей подпиской ФМбойчик!
Помимо того, что подписка символично делает вас фембойчиком, добавляя красивый префикс в табе, вы получаете:

- Более удобный просмотр логов: /co lookup
- Возможность записывать песни на пластинки и рога: /disc burn
- Команды /rename и /setlore
- Три уникальных набора эффектов
`,
    },
    {
      id: "recipe",
      name: "Кастомный Рецепт",
      price: 70,
      banner: "2.webp",
      description: `
Ваш собственный рецепт бревери!
Для приобретения придумайте рецепт по шаблону ниже и создайте тикет в Discord.

Название напитка: (чай)
Цвет напитка: (бордовый)
Лор: (волшебный чай)
Опьянение: (+10%)
Эффекты: (регенерация, слепота)
Ингредиенты: (два тотема и листья акации)
Время варки в котле: (17 минут)
Циклы дистилляции: (необязательно)
Настойка в бочке: (1 год = 20 минут)

Пожалуйста, придумывайте сбалансированный рецепт. Если он будет слишком сильным, мы попросим его изменить.
`,
    },
    {
      id: "effects",
      name: "Наборы Эффектов",
      price: 99,
      banner: "4.png",
      description: `
Эксклюзивный набор эффектов "Коллапс":
- Фиолетовый след при ходьбе
- Особый режим AFK
- Особые эффекты для стрел, мечей, телепорта

Подробнее можно увидеть на вики.
Создан Axoiot_6!
`,
    },
  ];

  const fmboyVariants = [
    { id: "fmboy_7", name: "ФМбойчик (7 дней)", price: 99 },
    { id: "fmboy_30", name: "ФМбойчик (30 дней)", price: 399 },
    { id: "fmboy_90", name: "ФМбойчик (90 дней)", price: 999 },
  ];

  const effects = [
    { id: "collapse", name: "Коллапс", price: 99 },
    { id: "collapse_forever", name: "Коллапс (Навсегда)", price: 149 },
    { id: "holy", name: "Святая Поступь", price: 99 },
    { id: "holy_forever", name: "Святая Поступь (Навсегда)", price: 149 },
  ];

  const addToCart = (item: Product) => setCart((prev) => [...prev, item]);
  const removeFromCart = (id: string) =>
    setCart((prev) => prev.filter((i) => i.id !== id));
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-[#0b0014] text-white px-6 py-10 flex flex-col justify-between">
      {/* Верхняя панель */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0b0014]/70 backdrop-blur-md border-b border-[#d946ef]/30 shadow-[0_0_20px_#d946ef20]">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.gif"
              alt="Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-cover"
            />
            <span className="text-2xl font-bold text-[#d946ef]">FreeMind</span>
          </Link>

          {/* Мобильное меню */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-[#d946ef]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Навигация */}
          <nav className="hidden md:flex items-center gap-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const className = clsx(
                "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                isActive
                  ? "bg-[#d946ef]/50 border border-[#d946ef] shadow-[0_0_10px_#d946ef70]"
                  : "bg-[#d946ef]/30 hover:bg-[#ff00ff]/40"
              );
              return (
                <Link key={item.href} href={item.href} className={className}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Контент */}
      <div className="max-w-6xl mx-auto pt-24 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.03 }}
              className="bg-[#10001f]/80 border border-[#d946ef]/30 rounded-2xl shadow-[0_0_20px_#d946ef20] overflow-hidden cursor-pointer"
              onClick={() => setSelected(item)}
            >
              <img
                src={item.banner}
                alt={item.name}
                className="w-full h-64 object-contain bg-black"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-[#d946ef]">{item.name}</h2>
                <p className="text-gray-400 mt-1">{item.price} ₽</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Нижняя иконка корзины */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative bg-[#d946ef] p-4 rounded-full shadow-lg hover:bg-[#c026d3] transition"
        >
          <ShoppingCart className="text-white" size={28} />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-white text-[#d946ef] text-xs rounded-full px-2 py-0.5 font-bold">
              {cart.length}
            </span>
          )}
        </button>
      </div>

      {/* Модалка описания */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-[999]"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-[#10001f] border border-[#d946ef]/40 rounded-2xl shadow-[0_0_25px_#d946ef40] p-6 max-w-md w-full text-center relative"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>

              <img
                src={selected.banner}
                alt={selected.name}
                className="w-full h-52 object-contain rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold text-[#d946ef] mb-2">
                {selected.name}
              </h2>
              <p className="text-gray-300 whitespace-pre-line mb-4">
                {selected.description}
              </p>

              {selected.id === "fmboy" ? (
                <div className="space-y-2 mb-4">
                  {fmboyVariants.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() =>
                        addToCart({
                          id: sub.id,
                          name: sub.name,
                          price: sub.price,
                          banner: selected.banner,
                          description: sub.name,
                        })
                      }
                      className="w-full py-2 bg-[#d946ef]/20 hover:bg-[#d946ef]/30 rounded-lg transition"
                    >
                      {sub.name} — {sub.price} ₽
                    </button>
                  ))}
                </div>
              ) : selected.id === "effects" ? (
                <div className="space-y-2 mb-4">
                  {effects.map((eff) => (
                    <button
                      key={eff.id}
                      onClick={() =>
                        addToCart({
                          id: eff.id,
                          name: eff.name,
                          price: eff.price,
                          banner: selected.banner,
                          description: eff.name,
                        })
                      }
                      className="w-full py-2 bg-[#d946ef]/20 hover:bg-[#d946ef]/30 rounded-lg transition"
                    >
                      {eff.name} — {eff.price} ₽
                    </button>
                  ))}
                </div>
              ) : (
                <button
                  onClick={() => addToCart(selected)}
                  className="mt-3 px-6 py-2 bg-[#d946ef] text-white rounded-lg hover:bg-[#c026d3] transition"
                >
                  Добавить в корзину ({selected.price} ₽)
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Корзина */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-[999]"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-[#10001f] border border-[#d946ef]/40 rounded-2xl shadow-[0_0_25px_#d946ef40] p-6 max-w-md w-full relative"
            >
              <button
                onClick={() => setIsCartOpen(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>

              <h2 className="text-2xl font-bold text-[#d946ef] mb-4">
                🛒 Ваша корзина
              </h2>

              {cart.length === 0 ? (
                <p className="text-gray-400">Корзина пуста</p>
              ) : (
                <>
                  <ul className="space-y-3">
                    {cart.map((item, index) => (
                      <li
                        key={`${item.id}-${index}`}
                        className="flex justify-between items-center border-b border-[#d946ef]/20 pb-2"
                      >
                        <span>{item.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-gray-400">{item.price} ₽</span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-400 hover:text-red-500"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4">
                    <label className="block text-gray-300 text-sm mb-1">
                      Ник игрока:
                    </label>
                    <input
                      type="text"
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                      placeholder="Введите ник..."
                      className="w-full bg-[#1a0025] border border-[#d946ef]/40 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#d946ef]"
                    />
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-bold text-gray-200">
                      Итого:
                    </span>
                    <span className="text-2xl text-[#d946ef] font-bold">
                      {total} ₽
                    </span>
                  </div>

                  <button
                    disabled={!nickname.trim()}
                    className={`mt-5 w-full py-2 rounded-lg transition ${
                      nickname.trim()
                        ? "bg-[#d946ef] hover:bg-[#c026d3]"
                        : "bg-gray-600 cursor-not-allowed"
                    }`}
                  >
                    Оформить заказ
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
