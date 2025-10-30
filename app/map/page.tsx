
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function MapPage() {
  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "Главная", external: false },
    { href: "/map", label: "Онлайн-карта", external: false },
    { href: "/wiki", label: "Вики", external: false },
    { href: "/rules", label: "Правила", external: false },
    { href: "/shop", label: "Магазин", external: false }
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mapHeight, setMapHeight] = useState("0px");

  useEffect(() => {
    const updateHeight = () => {
      const headerHeight = document.querySelector("header")?.clientHeight || 80;
      const footerHeight = document.querySelector("footer")?.clientHeight || 60;
      const vh = window.innerHeight;
      const topOffset = headerHeight; // Оставляем место под заголовок
      const availableHeight = vh - topOffset - footerHeight - 20; // -20px для дополнительного отступа сверху
      setMapHeight(`${availableHeight}px`);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0b0014] text-white">
      {/* 🔝 Верхняя панель / Боковая панель */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0b0014]/70 backdrop-blur-md border-b border-[#d946ef]/30 shadow-[0_0_20px_#d946ef20]">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo.gif"
              alt="Logo"
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

      {/* Центральная секция с iframe */}
      <main className="relative min-h-screen pt-[80px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-[80px] left-0 w-screen"
          style={{ height: mapHeight }}
        >
          <iframe
            src="http://94.156.170.142:25570/"
            className="w-full h-full"
            title="Онлайн-карта"
            allowFullScreen
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </motion.div>
      </main>

      {/* Футер */}
      <footer className="fixed bottom-0 left-0 w-full z-10 py-6 text-center border-t border-[#d946ef]/30 bg-[#0b0014]/80 backdrop-blur-md">
        <p className="text-gray-400 text-sm">
          FreeMind не связан, не одобрен и не принадлежит Mojang Studios или Microsoft.
        </p>
      </footer>
    </div>
  );
}
