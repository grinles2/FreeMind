
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function RulesPage() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bottomMenuOpen, setBottomMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Главная", external: false },
    { href: "/map", label: "Онлайн-карта", external: false },
    { href: "/wiki", label: "Вики", external: false },
    { href: "/rules", label: "Правила", external: false },
    { href: "/login", label: "Вход", external: false },
  ];

  const sections = [
    {
      id: "general",
      title: "Общие правила",
      banner: "/rules.png",
      content: `1.1 Регистрируясь на проекте FreeMind вы автоматически подтверждаете свою ознакомленность с правилами, соглашаетесь со всем сводом правил и обязуетесь соблюдать их

1.2 Незнание правил не освобождает от ответственности

1.3 Профиль и ник пользователя должен соответствовать всем правилам сервера, и правилам поведения в чате.

1.4 Владелец аккаунта несёт за него полную ответственность

1.5 Запрещена передача аккаунта другим пользователям без согласования с @Админ

1.6 Разрешено создание одного твинк аккаунта с вашим ником и припиской Tvink или _Tvink (обход любого наказания с помощью твинка увеличивает срок наказания)

1.7 Запрещены любые действия, которые негативно влияют на репутацию сервера, мешают комфортной игре на сервере, приносят негатив и раздражение другим игрокам.

1.8 Средства потраченные на платные услуги являются добровольной поддержкой и не подлежат возврату.

1.9 Присутствие на дискорд сервере обязательно, иначе вы не сможете зайти на сервер.`,
    },
    {
      id: "chat",
      title: "Правила поведения в чате",
      banner: "/rules2.png",
      content: `2.1 Запрещен буллинг игроков и проявление провокационной токсичности в любом виде

2.2 Запрещено оскорбление религии, национальности, расы, пола и других индивидуальных отличий человека в любом виде.

2.3 Запрещено разжигание и обсуждение конфликтов

2.4 Запрещена публикация материалов грубого, насильственного характера, нацисткой символики, 18+ контента

2.5 Запрещено использование выражений и действий, за которые банят на Twitch, особенно в присутствии стримера

2.6 Запрещено разглашение чьей-либо личной информации без разрешения

2.7 Запрещено пинговать игроков после просьбы о прекращении

2.8 Запрещено упоминать любые чит-клиенты без повода

2.9 Запрещён чрезмерный капс/флуд

2.10 Запрещена реклама в любом виде

2.11 Запрещено обсуждение политики.`,
    },
    {
      id: "gameplay",
      title: "Внутриигровые правила",
      banner: "/rules3.png",
      content: `3.1 Запрещено гриферство в любом виде

3.2 Запрещено использование читов, скриптов, авто-кликеров, X-ray, baritone и подобных

3.3 Приваты помечаются табличками с ником со всех 4 сторон (ломать чужие таблички запрещено)

3.4 Территория 250x250 от нулевой точки принадлежит спавну

3.5 Запрещено создавать помехи другим игрокам, находиться на территории после просьбы покинуть её

3.6 PvP только по взаимному согласию

3.7 Запрещены мультиаккаунты и обход бана

3.8 Запрещено использовать баги или скрывать их

3.9 Разрешён только дюп TNT и ковров

3.10 Запрещено строить лаг-машины

3.11 Запрещено убивать мобов в чужом привате

3.12 18+ арты должны быть в закрытых комнатах

3.13 При нарушении — обращаться в тикет или к хелперу.`,
    },
    {
      id: "moderation",
      title: "Правила модерации",
      banner: "/rules4.png",
      content: `4.1 Проверка: игрок обязан пройти проверку при подозрении на нарушения. Отказ = нарушение.

4.2 Модераторы могут удалять сущности, влияющие на TPS

4.3 При постройках сохраняйте лайтматики

4.4 Администрация имеет право в особых случаях выходить за рамки правил.`,
    },
  ];

  // Плавный скролл
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setBottomMenuOpen(false);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0b0014] text-white">
      {/* ТОПБАР */}
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

          {/* Мобильный гамбургер */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#d946ef] focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Десктоп: кнопки */}
          <nav className="hidden md:flex gap-4">
            {navItems.map((item) => {
              const isActive = !item.external && pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                    isActive
                      ? "bg-[#d946ef]/50 border border-[#d946ef] shadow-[0_0_10px_#d946ef70]"
                      : "bg-[#d946ef]/30 hover:bg-[#d946ef]/40"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* МОБИЛЬНОЕ МЕНЮ — СПРАВА */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 bg-[#0b0014]/90 backdrop-blur-md border-l border-[#d946ef]/30 p-6 z-50 md:hidden"
            >
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-[#d946ef] mb-6"
              >
                <X size={24} />
              </button>
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => {
                  const isActive = !item.external && pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={clsx(
                        "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                        isActive
                          ? "bg-[#d946ef]/50 border border-[#d946ef] shadow-[0_0_10px_#d946ef70]"
                          : "bg-[#d946ef]/30 hover:bg-[#d946ef]/40"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ОСНОВНОЙ КОНТЕНТ */}
      <div className="flex pt-20">
        {/* САЙДБАР — ЯКОРЯ */}
        <aside className="hidden md:block w-72 bg-[#10001f]/80 border-r border-[#d946ef]/40 p-6 backdrop-blur-md min-h-screen sticky top-20">
          <h2 className="text-sm font-bold text-gray-400 mb-6 tracking-widest">РАЗДЕЛЫ</h2>
          <ul className="space-y-3">
            {sections.map(({ id, title }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className="flex items-center w-full gap-3 px-3 py-2 rounded-lg transition-all duration-300 text-left hover:bg-[#d946ef]/10 text-gray-300"
                >
                  <span>{title}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* КОНТЕНТ — ВСЁ НА ОДНОЙ СТРАНИЦЕ */}
        <main className="flex-1 p-6 md:p-10 pb-32">
          <div className="max-w-4xl mx-auto space-y-16">
            {sections.map(({ id, title, banner, content }) => (
              <motion.section
                key={id}
                id={id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                {/* БАННЕР БЕЗ ТЕКСТА И ИКОНОК */}
                <div className="relative rounded-2xl overflow-hidden border border-[#d946ef]/50 shadow-[0_0_30px_#d946ef50] mb-6">
                  <Image
                    src={banner}
                    alt={title}
                    width={768}
                    height={192}
                    className="w-full h-auto object-cover opacity-90"
                  />
                </div>

                {/* ТЕКСТ ПРАВИЛ */}
                <div className="bg-[#0b0014]/70 border border-[#d946ef]/40 rounded-2xl shadow-[0_0_40px_#d946ef30] backdrop-blur-md p-6 md:p-8 text-gray-300 leading-relaxed whitespace-pre-line">
                  {content}
                </div>
              </motion.section>
            ))}
          </div>
        </main>
      </div>

      {/* НИЖНЯЯ КНОПКА */}
      <button
        onClick={() => setBottomMenuOpen(true)}
        className="md:hidden fixed bottom-6 right-6 bg-[#d946ef]/20 backdrop-blur-md border border-[#d946ef]/40 p-3 rounded-full shadow-[0_0_20px_#d946ef40] z-40 hover:bg-[#d946ef]/30 transition-all"
      >
        <Menu size={24} className="text-[#d946ef]" />
      </button>

      {/* ШТОРКА С ЯКОРЯМИ */}
      <AnimatePresence>
        {bottomMenuOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0b0014]/95 backdrop-blur-xl border-t border-[#d946ef]/40 shadow-[0_-20px_40px_#d946ef30] rounded-t-3xl z-50 overflow-hidden"
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-[#d946ef]">Разделы</h3>
                <button onClick={() => setBottomMenuOpen(false)} className="text-[#d946ef] p-1">
                  <X size={20} />
                </button>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {sections.map(({ id, title }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#d946ef]/10 hover:bg-[#d946ef]/20 text-gray-300 transition-all text-left"
                  >
                    <span className="font-medium">{title}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
