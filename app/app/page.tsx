
"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "Главная", external: false },
    { href: "/map", label: "Онлайн-карта", external: false },
    { href: "/wiki", label: "Вики", external: false },
    { href: "/rules", label: "Правила", external: false },
    { href: "/shop", label: "Магазин", external: false },
    { href: "/elections", label: "Выборы", external: false }
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0b0014] text-white overflow-hidden">
      {/* Фоновые частицы */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "#0b0014" },
          fpsLimit: 60,
          particles: {
            number: { value: 80 },
            color: { value: "#d946ef" },
            shape: { type: "circle" },
            opacity: { value: 0.4 },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 1, outModes: "bounce" },
            links: { enable: true, distance: 150, color: "#d946ef", opacity: 0.3, width: 1 },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* 🔝 Верхняя панель / Боковая панель */}
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

          {/* Мобильное меню (hamburger) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-[#d946ef] focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Горизонтальное меню (на десктопе) */}
          <nav className="hidden md:flex gap-4">
            {navItems.map((item) => {
              const isActive = !item.external && (pathname === item.href || (item.href === "/" && pathname === "/"));
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
                <Link
                  key={item.href}
                  href={item.href}
                  className={className}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Боковая панель (мобильная) */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isMenuOpen ? 0 : "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 h-full w-64 bg-[#0b0014]/90 backdrop-blur-md border-l border-[#d946ef]/30 p-6 z-50 md:hidden"
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-300 hover:text-[#d946ef] mb-6"
          >
            <X size={24} />
          </button>
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = !item.external && (pathname === item.href || (item.href === "/" && pathname === "/"));
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
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={className}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </motion.div>
      </header>

      {/* Главная секция */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center pt-32">
        <motion.img
          src="/logo.gif"
          alt="FreeMind Logo"
          className="w-32 h-32 mb-6 object-cover"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-[#d946ef] mb-4 drop-shadow-[0_0_10px_#d946ef]"
        >
          FreeMind
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-2xl mb-8 max-w-xl text-gray-300"
        >
          FreeMind — vanilla+ сервер без лишних забот, созданный максимально комфортным и интересным для вас!
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-6 text-gray-400"
        >
          <p>
            IP:{" "}
            <span className="text-[#d946ef] font-mono drop-shadow-[0_0_5px_#d946ef]">
              free-mind.fun
            </span>
          </p>
          <p className="text-sm text-gray-500 mt-1">Версия: 1.21.6 - 1.21.8</p>
        </motion.div>
      </div>

      {/* Секция "Наша команда" */}
      <section
        className="relative w-full min-h-[70vh] flex flex-col items-center justify-center text-center bg-cover bg-center mt-20 px-6"
        style={{
          backgroundImage: "url('/banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 rounded-2xl backdrop-blur-md border border-[#d946ef]/40 shadow-[0_0_40px_#d946ef30]"></div>

        <div className="relative z-10 max-w-4xl">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-[#d946ef] mb-4 drop-shadow-[0_0_10px_#d946ef]"
          >
            Наша команда
          </motion.h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            Мы — дружная команда игроков и администраторов, создающая атмосферу тепла, уюта и веселья!
          </p>
        </div>
      </section>

      {/* Почему мы */}
      <section className="relative z-10 mt-24 mb-24 px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl p-8 bg-[#0b0014]/70 border border-[#d946ef]/40 rounded-2xl shadow-[0_0_30px_#d946ef30] backdrop-blur-md"
        >
          <h2 className="text-4xl font-bold text-[#d946ef] mb-4 drop-shadow-[0_0_10px_#d946ef]">
            Почему мы?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Потому что мы создаём уют, где каждый игрок чувствует себя частью настоящего сообщества.
          </p>
        </motion.div>
      </section>

      {/* Соцсети */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="mt-16 flex justify-center gap-6"
      >
        <a
          href="https://discord.gg/Ecq4MJZN3k"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:scale-110"
        >
          <img
            src="/discord.svg"
            alt="Discord"
            className="w-10 h-10 drop-shadow-[0_0_10px_#5865F2] hover:drop-shadow-[0_0_20px_#5865F2] transition-all"
          />
        </a>

        <a
          href="https://t.me/FreeMindnes"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:scale-110"
        >
          <img
            src="/telegram.svg"
            alt="Telegram"
            className="w-10 h-10 drop-shadow-[0_0_10px_#0088cc] hover:drop-shadow-[0_0_20px_#0088cc] transition-all"
          />
        </a>

        <a
          href="https://hotmc.ru/minecraft-server-275654"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:scale-110"
        >
          <img
            src="/hotmc.ico"
            alt="HotMc"
            className="w-10 h-10 drop-shadow-[0_0_10px_#ff00ff] hover:drop-shadow-[0_0_20px_#ff00ff] transition-all"
          />
        </a>
      </motion.div>

      {/* Footer */}
      <footer className="relative z-10 mt-16 py-6 text-center border-t border-[#d946ef]/30 bg-[#0b0014]/80 backdrop-blur-md">
        <p className="text-gray-400 text-sm">
          © 2025 FreeMind. Все права защищены.
        </p>
        <p className="text-gray-500 text-xs mt-1">
          FreeMind не связан, не одобрен и не принадлежит Mojang Studios или Microsoft.
        </p>
      </footer>
    </div>
  );
}
