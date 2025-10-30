"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";

interface Candidate {
  id: number;
  banner: string;
  slogan: string;
  username: string;
  plans: string[];
}

const spawnCandidates: Candidate[] = [
  {
    id: 1,
    banner: "/elections1.png",
    slogan: "Хуи пинать - это исскуство",
    username: "GrinLes1",
    plans: [
      "Ля не ебу"
    ],
  },
  {
    id: 2,
    banner: "/elections.png",
    slogan: "Чулочки - в каждый дом!",
    username: "Contichek",
    plans: [
      "Подарить грину чулочки"
    ],
  },
  {
    id: 3,
    banner: "/elections2.png",
    slogan: "Депресия - это кайф",
    username: "dan1elLa_sde",
    plans: [
      "Быть счастливой"
    ],
  },
];

const netherCandidates: Candidate[] = [
  {
    id: 1,
    banner: "/elections.jpg",
    slogan: "Накопаю алмазы - за пиво",
    username: "Рудний",
    plans: [
      "проебать экономику сервера"
    ],
  },
  {
    id: 2,
    banner: "/elections.jpg",
    slogan: "оооо аааа булавааа",
    username: "Хлебушек",
    plans: [
      "ВЫЕБАТЬ ВАС БУЛАВОЙ"
    ],
  },
  {
    id: 3,
    banner: "/elections.jpg",
    slogan: "Сосать это талант",
    username: "Axoit_6",
    plans: [
      "Отсосать",
      "Забить хуй",
      "подрочить",
    ],
  },
];

const endCandidates: Candidate[] = [
  {
    id: 1,
    banner: "/elections.jpg",
    slogan: "Спидраним булава",
    username: "H1wvY",
    plans: [
      "Построить уничтожитель миров",
      "Построить ферму пороха на лям в час",
      "Купить чулки грину",
    ],
  },
  {
    id: 2,
    banner: "/elections.jpg",
    slogan: "Бобик",
    username: "Десфор",
    plans: [
      "Бобик Десфора в каждый дом"
    ],
  },
  {
    id: 3,
    banner: "/elections.jpg",
    slogan: "СЛИПИЛЕНД - 6 СЕЗОН",
    username: "Слипич",
    plans: [
      "Напиздеть",
      "Заморозить",
      "Повторить",
    ],
  },
];

const categories = [
  { id: "spawn", label: "Глава Спавна", candidates: spawnCandidates },
  { id: "nether", label: "Глава Ада", candidates: netherCandidates },
  { id: "end", label: "Глава Энда", candidates: endCandidates },
];

export default function ElectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("spawn");
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Главная", external: false },
    { href: "/map", label: "Онлайн-карта", external: false },
    { href: "/wiki", label: "Вики", external: false },
    { href: "/rules", label: "Правила", external: false },
    { href: "/shop", label: "Магазин", external: false },
    { href: "/elections", label: "Выборы", external: false },
  ];

  const currentCategory = categories.find((cat) => cat.id === selectedCategory);
  const candidates = currentCategory?.candidates || [];

  return (
    <div className="relative min-h-screen bg-[#0b0014] text-white flex flex-col">
      {/* Топбар */}
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

          <nav className="flex gap-4">
            {navItems.map((item) => {
              const isActive = !item.external && pathname === item.href;
              const className = clsx(
                "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                isActive
                  ? "bg-[#d946ef]/50 border border-[#d946ef] shadow-[0_0_10px_#d946ef70]"
                  : "bg-[#d946ef]/30 hover:bg-[#ff00ff]/40"
              );
              return item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {item.label}
                </a>
              ) : (
                <Link key={item.href} href={item.href} className={className}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* контент */}
      <main className="flex-1 pt-24 px-6 pb-24"> {/*тступ */}
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center text-[#d946ef] mb-8 drop-shadow-[0_0_15px_#d946ef]"
          >
            Выборы на FreeMind
          </motion.h1>

          {/* Переключатель */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={clsx(
                  "px-6 py-3 rounded-full font-semibold transition-all duration-300",
                  selectedCategory === cat.id
                    ? "bg-[#d946ef] text-white shadow-[0_0_15px_#d946ef70]"
                    : "bg-[#d946ef]/20 text-gray-300 hover:bg-[#d946ef]/40"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Карточки кандидатов */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {candidates.map((candidate, index) => (
    <motion.div
      key={candidate.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-[#10001f]/80 rounded-2xl overflow-hidden border border-[#d946ef]/40 shadow-[0_0_25px_#d946ef30] hover:shadow-[0_0_35px_#d946ef50] transition-shadow duration-300 flex flex-col"
    >
      {/* БАННЕР —*/}
      <div className="relative h-48 bg-[#0b0014]/50 flex items-center justify-center overflow-hidden">
        <Image
          src={candidate.banner}
          alt={`Кандидат ${candidate.id}`}
          width={512}
          height={192}
          className="w-full h-full object-contain"
          priority={index < 3}
        />
        {/* Номер  */}
        <div className="absolute bottom-3 left-3 bg-[#0b0014]/80 backdrop-blur-sm px-3 py-1 rounded-full text-xl font-bold text-white shadow-lg">
          #{candidate.id}
        </div>
      </div>

      {/* Контент */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#d946ef] mb-2 line-clamp-2">
          {candidate.slogan}
        </h3>
        <p className="text-lg text-gray-300 mb-4">@{candidate.username}</p>

        <div className="mt-auto space-y-2">
          <p className="text-sm font-semibold text-[#d946ef]">Планы:</p>
          <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
            {candidate.plans.map((plan, i) => (
              <li key={i}>{plan}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  ))}
</div>

          {candidates.length === 0 && (
            <p className="text-center text-gray-400 mt-12">
              Кандидаты скоро появятся...
            </p>
          )}
        </div>
      </main>

      {/* Футер */}
      <footer className="mt-auto py-6 text-center border-t border-[#d946ef]/30 bg-[#0b0014]/80 backdrop-blur-md text-gray-400 text-sm">
        FreeMind не связан, не одобрен и не принадлежит Mojang Studios или Microsoft.
      </footer>
    </div>
  );
}