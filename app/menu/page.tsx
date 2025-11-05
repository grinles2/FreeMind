
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Menu, X, Home, Map, BookOpen, Scroll, LogOut, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function MenuPage() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Главная", icon: Home },
    { href: "/map", label: "Онлайн-карта", icon: Map },
    { href: "/wiki", label: "Вики", icon: BookOpen },
    { href: "/rules", label: "Правила", icon: Scroll },
  ];

  const handleLogout = () => {
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    window.location.href = "/login";
  };

  return (
    <div className="relative min-h-screen bg-[#0b0014] text-white overflow-hidden">
      {/* Фон */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0b0014] via-[#1a0028] to-[#0b0014] opacity-90" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d946ef20] via-transparent to-transparent opacity-30" />

      {/* ТОПБАР */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0014]/70 backdrop-blur-md border-b border-[#d946ef]/30 shadow-[0_0_20px_#d946ef20]">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.gif" alt="Logo" width={40} height={40} className="w-10 h-10 object-cover" />
            <span className="text-2xl font-bold text-[#d946ef]">FreeMind</span>
          </Link>

          {/* Мобильный гамбургер */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden text-gray-300 hover:text-[#d946ef]"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Десктоп: профиль + логаут */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <User size={18} className="text-[#d946ef]" />
              <span className="text-gray-300">Игрок</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-[#d946ef]/30 hover:bg-[#d946ef]/40 rounded-full text-sm font-semibold transition-all"
            >
              <LogOut size={16} />
              Выйти
            </button>
          </div>
        </div>
      </header>

      {/* САЙДБАР */}
      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: isSidebarOpen ? 0 : -280 }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 top-0 h-full w-64 bg-[#0b0014]/90 backdrop-blur-md border-r border-[#d946ef]/30 p-6 z-40 md:translate-x-0 md:static md:z-auto"
      >
        <div className="flex items-center justify-between mb-8 md:hidden">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.gif" alt="Logo" width={32} height={32} className="w-8 h-8 object-cover" />
            <span className="text-xl font-bold text-[#d946ef]">FreeMind</span>
          </Link>
          <button onClick={() => setIsSidebarOpen(false)} className="text-gray-300 hover:text-[#d946ef]">
            <X size={24} />
          </button>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsSidebarOpen(false)}
                className={clsx(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300",
                  isActive
                    ? "bg-[#d946ef]/50 border border-[#d946ef] shadow-[0_0_10px_#d946ef70] text-white"
                    : "text-gray-300 hover:bg-[#d946ef]/20 hover:text-white"
                )}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* МОБИЛЬНЫЙ ЛОГАУТ */}
        <div className="mt-auto pt-8 border-t border-[#d946ef]/20 md:hidden">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-red-400 hover:bg-red-900/20 transition-all"
          >
            <LogOut size={18} />
            Выйти
          </button>
        </div>
      </motion.aside>

      {/* КОНТЕНТ */}
      <main className="relative z-10 flex-1 md:ml-64 pt-20 px-6">
        <div className="flex items-center justify-center min-h-[calc(100vh-5rem)]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-[#d946ef] mb-4">
              Разрабатывается
            </h1>
            <p className="text-xl text-gray-400">Скоро здесь будет что-то крутое</p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
