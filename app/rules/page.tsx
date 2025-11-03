
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Menu, X, AlertTriangle, MessageSquare, Gamepad2, Shield } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type RuleTab =
  | "Общие правила"
  | "Правила поведения в чате"
  | "Внутриигровые правила"
  | "Правила модерации";

interface RuleContent {
  [key: string]: React.ReactNode;
}

export default function RulesPage() {
  const pathname = usePathname();
  const [selected, setSelected] = useState<RuleTab>("Общие правила");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bottomMenuOpen, setBottomMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Главная", external: false },
    { href: "/map", label: "Онлайн-карта", external: false },
    { href: "/wiki", label: "Вики", external: false },
    { href: "/rules", label: "Правила", external: false },
    { href: "/shop", label: "Магазин", external: false },
  ];

  const banners = {
    "Общие правила": "/rules.png",
    "Правила поведения в чате": "/rules2.png",
    "Внутриигровые правила": "/rules3.png",
    "Правила модерации": "/rules4.png",
  };

  const ruleSections: { name: RuleTab; icon: React.ComponentType<any> }[] = [
    { name: "Общие правила", icon: AlertTriangle },
    { name: "Правила поведения в чате", icon: MessageSquare },
    { name: "Внутриигровые правила", icon: Gamepad2 },
    { name: "Правила модерации", icon: Shield },
  ];

  const content: RuleContent = {
    "Общие правила": (
      <div className="space-y-6 text-gray-300">
        <div className="relative rounded-2xl overflow-hidden border border-[#d946ef]/50 shadow-[0_0_30px_#d946ef50]">
          <Image
            src={banners["Общие правила"]}
            alt="Общие правила"
            width={768}
            height={192}
            className="w-full h-auto object-cover opacity-90"
          />
        </div>
        <p className="whitespace-pre-line leading-relaxed">{`1.1 Регистрируясь на проекте FreeMind вы автоматически подтверждаете свою ознакомленность с правилами, соглашаетесь со всем сводом правил и обязуетесь соблюдать их

1.2 Незнание правил не освобождает от ответственности

1.3 Профиль и ник пользователя должен соответствовать всем правилам сервера, и правилам поведения в чате.

1.4 Владелец аккаунта несёт за него полную ответственность

1.5 Запрещена передача аккаунта другим пользователям без согласования с @Админ

1.6 Разрешено создание одного твинк аккаунта с вашим ником и припиской Tvink или _Tvink (обход любого наказания с помощью твинка увеличивает срок наказания)

1.7 Запрещены любые действия, которые негативно влияют на репутацию сервера, мешают комфортной игре на сервере, приносят негатив и раздражение другим игрокам.

1.8 Средства потраченные на платные услуги являются добровольной поддержкой и не подлежат возврату.

1.9 Присутствие на дискорд сервере обязательно, иначе вы не сможете зайти на сервер.`}</p>
      </div>
    ),
    "Правила поведения в чате": (
      <div className="space-y-6 text-gray-300">
        <div className="relative rounded-2xl overflow-hidden border border-[#d946ef]/50 shadow-[0_0_30px_#d946ef50]">
          <Image
            src={banners["Правила поведения в чате"]}
            alt="Правила поведения в чате"
            width={768}
            height={192}
            className="w-full h-auto object-cover opacity-90"
          />
        </div>
        <p className="whitespace-pre-line leading-relaxed">{`2.1 Запрещен буллинг игроков и проявление провокационной токсичности в любом виде

2.2 Запрещено оскорбление религии, национальности, расы, пола и других индивидуальных отличий человека в любом виде.

2.3 Запрещено разжигание и обсуждение конфликтов

2.4 Запрещена публикация материалов грубого, насильственного характера, нацисткой символики, 18+ контента

2.5 Запрещено использование выражений и действий, за которые банят на Twitch, особенно в присутствии стримера

2.6 Запрещено разглашение чьей-либо личной информации без разрешения

2.7 Запрещено пинговать игроков после просьбы о прекращении

2.8 Запрещено упоминать любые чит-клиенты без повода

2.9 Запрещён чрезмерный капс/флуд

2.10 Запрещена реклама в любом виде

2.11 Запрещено обсуждение политики.`}</p>
      </div>
    ),
    "Внутриигровые правила": (
      <div className="space-y-6 text-gray-300">
        <div className="relative rounded-2xl overflow-hidden border border-[#d946ef]/50 shadow-[0_0_30px_#d946ef50]">
          <Image
            src={banners["Внутриигровые правила"]}
            alt="Внутриигровые правила"
            width={768}
            height={192}
            className="w-full h-auto object-cover opacity-90"
          />
        </div>
        <p className="whitespace-pre-line leading-relaxed">{`3.1 Запрещено гриферство в любом виде

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

3.13 При нарушении — обращаться в тикет или к хелперу.`}</p>
      </div>
    ),
    "Правила модерации": (
      <div className="space-y-6 text-gray-300">
        <div className="relative rounded-2xl overflow-hidden border border-[#d946ef]/50 shadow-[0_0_30px_#d946ef50]">
          <Image
            src={banners["Правила модерации"]}
            alt="Правила модерации"
            width={768}
            height={192}
            className="w-full h-auto object-cover opacity-90"
          />
        </div>
        <p className="whitespace-pre-line leading-relaxed">{`4.1 Проверка: игрок обязан пройти проверку при подозрении на нарушения. Отказ = нарушение.

4.2 Модераторы могут удалять сущности, влияющие на TPS

4.3 При постройках сохраняйте лайтматики

4.4 Администрация имеет право в особых случаях выходить за рамки правил.`}</p>
      </div>
    ),
  };

  return (
    <div className="relative min-h-screen bg-[#0b0014] text-white">
      {/* Топбар */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0b0014]/70 backdrop-blur-md border-b border-[#d946ef]/30 shadow-[0_0_20px_#d946ef20]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.gif" alt="Logo" width={36} height={36} className="w-9 h-9 object-cover" />
            <span className="text-xl font-bold text-[#d946ef]">FreeMind</span>
          </Link>

          {/* Десктоп: крупные кнопки */}
          <nav className="hidden md:flex gap-3">
            {navItems.map((item) => {
              const isActive = !item.external && pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "px-4 py-2 text-sm font-bold rounded-full transition-all duration-300",
                    isActive
                      ? "bg-[#d946ef]/50 border border-[#d946ef] shadow-[0_0_12px_#d946ef80] text-white"
                      : "bg-[#d946ef]/30 hover:bg-[#d946ef]/50 text-gray-200"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Мобильный гамбургер */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-[#d946ef] p-2"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Полноэкранное меню (мобильное) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 bg-[#0b0014] flex flex-col"
          >
            <div className="flex justify-between items-center p-4 border-b border-[#d946ef]/30">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <Image src="/logo.gif" alt="Logo" width={36} height={36} className="w-9 h-9 object-cover" />
                <span className="text-xl font-bold text-[#d946ef]">FreeMind</span>
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} className="text-[#d946ef] p-2">
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1 p-6 space-y-4">
              {navItems.map((item) => {
                const isActive = !item.external && pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={clsx(
                      "block w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all",
                      isActive
                        ? "bg-[#d946ef]/50 text-white shadow-[0_0_10px_#d946ef70]"
                        : "text-gray-300 hover:bg-[#d946ef]/20"
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

      {/* Основной контент */}
      <div className="flex pt-16 md:pt-20">
        {/* Сайдбар — только на десктопе */}
        <aside className="hidden md:block w-72 bg-[#10001f]/80 border-r border-[#d946ef]/40 p-6 backdrop-blur-md min-h-screen">
          <h2 className="text-sm font-bold text-gray-400 mb-6 tracking-widest">ПРАВИЛА СЕРВЕРА</h2>
          <ul className="space-y-3">
            {ruleSections.map(({ name, icon: Icon }) => (
              <li key={name}>
                <button
                  onClick={() => setSelected(name)}
                  className={clsx(
                    "flex items-center w-full gap-3 px-3 py-2 rounded-lg transition-all duration-300",
                    selected === name
                      ? "bg-[#d946ef]/30 border border-[#d946ef]/50 shadow-[0_0_15px_#d946ef70] text-[#d946ef] font-semibold"
                      : "hover:bg-[#d946ef]/10 text-gray-300"
                  )}
                >
                  <Icon size={18} className={selected === name ? "text-[#d946ef]" : "text-gray-400"} />
                  <span>{name}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Контент */}
        <main className="flex-1 p-6 md:p-10 pb-20">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#d946ef] mb-8 text-center md:text-left">
              {selected}
            </h1>
            <div className="bg-[#0b0014]/70 border border-[#d946ef]/40 rounded-2xl shadow-[0_0_40px_#d946ef30] backdrop-blur-md p-6 md:p-8 leading-relaxed">
              {content[selected]}
            </div>
          </motion.div>
        </main>
      </div>

      {/* КНОПКА ВНИЗУ СПРАВА — ТОЛЬКО НА МОБИЛЬНЫХ */}
      <button
        onClick={() => setBottomMenuOpen(true)}
        className="md:hidden fixed bottom-6 right-6 bg-[#d946ef]/20 backdrop-blur-md border border-[#d946ef]/40 p-3 rounded-full shadow-[0_0_20px_#d946ef40] z-40 hover:bg-[#d946ef]/30 transition-all"
      >
        <Menu size={24} className="text-[#d946ef]" />
      </button>

      {/* ШТОРКА С ВКЛАДКАМИ ПРАВИЛ */}
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
                <h3 className="text-lg font-bold text-[#d946ef]">Разделы правил</h3>
                <button onClick={() => setBottomMenuOpen(false)} className="text-[#d946ef] p-1">
                  <X size={20} />
                </button>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {ruleSections.map(({ name, icon: Icon }) => (
                  <button
                    key={name}
                    onClick={() => {
                      setSelected(name);
                      setBottomMenuOpen(false);
                    }}
                    className={clsx(
                      "flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left",
                      selected === name
                        ? "bg-[#d946ef]/30 border border-[#d946ef]/50 shadow-[0_0_15px_#d946ef70] text-[#d946ef]"
                        : "bg-[#d946ef]/10 hover:bg-[#d946ef]/20 text-gray-300"
                    )}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{name}</span>
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
