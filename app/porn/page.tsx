"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PlayersPage() {
  const players = [
    { name: "Данечка", image: "/forum/daniela.jpg" },
    { name: "Копатыч", image: "/forum/hevi.jpg" },
    { name: "Копатыч", image: "/forum/hevi1.jpg" },
    { name: "Копатыч", image: "/forum/hevi2.jpg" },
    { name: "Фембойчик", image: "/forum/tostem1.png" },
    { name: "Фембойчик", image: "/forum/tostem2.png" },
    { name: "Фембойчик", image: "/forum/tostem3.png" },
    { name: "Фембойчик", image: "/forum/tostem4.png" },
    { name: "Фембойчик", image: "/forum/tostem5.png" },
    { name: "Фембойчик", image: "/forum/tostem6.png" },
    { name: "Фембойчик", image: "/forum/tostem7.png" },
    { name: "Маслина", image: "/forum/her.png" },

  ];

  return (
    <div className="min-h-screen bg-[#0b0014] text-white flex flex-col">

      {/* Топбар */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0b0014]/70 backdrop-blur-md border-b border-[#d946ef]/30 shadow-[0_0_20px_#d946ef20]">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.gif" alt="Logo" className="w-10 h-10 object-cover" />
            <span className="text-2xl font-bold text-[#d946ef]">FreeMind</span>
          </Link>
          <nav className="flex gap-4">
            <Link
              href="/"
              className="px-4 py-2 bg-[#d946ef]/30 hover:bg-[#ff00ff]/40 rounded-full text-sm font-semibold transition-all duration-300"
            >
              Главная
            </Link>
          </nav>
        </div>
      </header>

      {/* Контент */}
      <main className="flex-1 flex flex-col items-center justify-center pt-28 pb-16 px-6">
        <h1 className="text-3xl font-bold text-[#d946ef] mb-10 text-center">
          Игроки сервера FreeMind
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
          {players.map((player, index) => (
            <motion.div
              key={index}
              className="bg-[#1a0026]/70 rounded-2xl overflow-hidden shadow-[0_0_20px_#d946ef30] border border-[#d946ef]/20 backdrop-blur-md hover:shadow-[0_0_30px_#d946ef60] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <img
                src={player.image}
                alt={player.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <p className="text-lg font-semibold text-[#ff8cff]">{player.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Футер */}
      <footer className="py-6 text-center border-t border-[#d946ef]/30 bg-[#0b0014]/80 backdrop-blur-md">
        <p className="text-gray-400 text-sm">© 2025 FreeMind. Все права защищены.</p>
      </footer>
    </div>
  );
}
