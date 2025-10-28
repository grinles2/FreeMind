"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SimplePage() {
  return (
    <div className="relative min-h-screen bg-[#0b0014] text-white flex flex-col">

      {/* Топбар */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0b0014]/70 backdrop-blur-md border-b border-[#d946ef]/30 shadow-[0_0_20px_#d946ef20]">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.gif" alt="Logo" className="w-10 h-10 object-cover" />
            <span className="text-2xl font-bold text-[#d946ef]">FreeMind</span>
          </Link>
          <nav className="flex gap-4">
            <Link href="/" className="px-4 py-2 bg-[#d946ef]/30 hover:bg-[#ff00ff]/40 rounded-full text-sm font-semibold transition-all duration-300">
              Главная
            </Link>
          </nav>
        </div>
      </header>

      {/* Контент - картинка по центру */}
      <main className="flex-1 flex items-center justify-center pt-20 pb-20">
        <motion.img
          src="/lini.webp"
          alt="Главная картинка"
          className="max-w-full max-h-[80vh] border-4 border-[#d946ef] rounded-xl shadow-[0_0_30px_#d946ef50]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </main>

      {/* Футер */}
      <footer className="py-6 text-center border-t border-[#d946ef]/30 bg-[#0b0014]/80 backdrop-blur-md">
        <p className="text-gray-400 text-sm">© 2025 FreeMind. Все права защищены.</p>
      </footer>

    </div>
  );
}
