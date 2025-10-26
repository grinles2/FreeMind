
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "Главная", external: false },
    { href: "http://map.free-mind.fun:20424/", label: "Онлайн-карта", external: true },
    { href: "/wiki", label: "Вики", external: false },
    { href: "/rules", label: "Правила", external: false },
  ];

  return (
    <div className="relative min-h-screen bg-[#0b0014] text-white">
      {/* 🔝 Верхняя панель */}
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
      </header>

      {/* Центральная секция */}
      <main className="flex flex-col items-center justify-center min-h-screen px-6 py-16 pt-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <Image
            src="/grinles1.png"
            alt="GrinLes1"
            width={256}
            height={256}
            className="w-64 h-64 object-cover rounded-lg border border-[#d946ef]/50 shadow-[0_0_20px_#d946ef50] mb-6"
          />
          <p className="text-xl text-gray-300">
            Сайт сделан{" "}
            <span className="text-[#d946ef] font-semibold">GrinLes1</span>, мур{" "}
            <Link href="https://t.me/grinles" target="_blank" rel="noopener noreferrer">
              <Image
                src="/telegram.svg"
                alt="Blog"
                width={24}
                height={24}
                className="inline-block ml-2 align-middle"
              />
            </Link>
          </p>
          <a
            href="https://t.me/aksolotly_kirill"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-6 py-3 bg-[#d946ef] text-white font-semibold rounded-lg hover:bg-[#c026d3] transition-colors"
          >
            Подарить Чулочки
          </a>
        </motion.div>
      </main>

      {/* Футер */}
      <footer className="relative z-10 py-6 text-center border-t border-[#d946ef]/30 bg-[#0b0014]/80 backdrop-blur-md">
        <p className="text-gray-400 text-sm">
          FreeMind не связан, не одобрен и не принадлежит Mojang Studios или Microsoft.
        </p>
      </footer>
    </div>
  );
}
