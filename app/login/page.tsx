
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { Menu, X, LogIn, UserPlus, GamepadIcon, Lock, CheckCircle, XCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function AuthPage() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Главная", external: false },
    { href: "/map", label: "Онлайн-карта", external: false },
    { href: "/wiki", label: "Вики", external: false },
    { href: "/rules", label: "Правила", external: false },
    { href: "/login", label: "Вход", external: false },
  ];

  return (
    <div className="relative min-h-screen bg-[#0b0014] text-white overflow-hidden">
      {/* Фон */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0b0014] via-[#1a0028] to-[#0b0014] opacity-90" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d946ef20] via-transparent to-transparent opacity-30" />

      {/* ТОПБАР */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0b0014]/70 backdrop-blur-md border-b border-[#d946ef]/30 shadow-[0_0_20px_#d946ef20]">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.gif" alt="Logo" width={40} height={40} className="w-10 h-10 object-cover" />
            <span className="text-2xl font-bold text-[#d946ef]">FreeMind</span>
          </Link>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-[#d946ef]">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

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

        {/* МОБИЛЬНОЕ МЕНЮ */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isMenuOpen ? 0 : "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 h-full w-64 bg-[#0b0014]/90 backdrop-blur-md border-l border-[#d946ef]/30 p-6 z-50 md:hidden"
        >
          <button onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-[#d946ef] mb-6">
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
      </header>

      {/* КОНТЕНТ */}
      <main className="relative z-10 flex items-center justify-center min-h-screen pt-16 md:pt-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <div className="bg-[#0b0014]/80 backdrop-blur-xl border border-[#d946ef]/40 rounded-3xl shadow-[0_0_60px_#d946ef40] p-8 md:p-10">
            {/* Логотип */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Image
                  src="/logo.gif"
                  alt="FreeMind"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded-full border-4 border-[#d946ef]/50 shadow-[0_0_30px_#d946ef60]"
                />
                <div className="absolute inset-0 rounded-full bg-[#d946ef]/20 animate-ping" />
              </div>
            </div>

            {/* Вкладки */}
            <div className="flex mb-8 bg-[#1a0028]/50 rounded-2xl p-1">
              <button
                onClick={() => setIsLogin(true)}
                className={clsx(
                  "flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all duration-300",
                  isLogin ? "bg-[#d946ef] text-white shadow-[0_0_20px_#d946ef70]" : "text-gray-400 hover:text-white"
                )}
              >
                <LogIn size={18} />
                <span className="font-semibold">Войти</span>
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={clsx(
                  "flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all duration-300",
                  !isLogin ? "bg-[#d946ef] text-white shadow-[0_0_20px_#d946ef70]" : "text-gray-400 hover:text-white"
                )}
              >
                <UserPlus size={18} />
                <span className="font-semibold">Регистрация</span>
              </button>
            </div>

            {/* Формы */}
            <AnimatePresence mode="wait">
              {isLogin ? <LoginForm key="login" /> : <RegisterForm key="register" />}
            </AnimatePresence>

            {/* Ссылки */}
            <div className="mt-6 text-center text-sm text-gray-400">
              {isLogin ? (
                <>
                  Нет аккаунта?{" "}
                  <button onClick={() => setIsLogin(false)} className="text-[#d946ef] font-semibold hover:underline">
                    Зарегистрироваться
                  </button>
                </>
              ) : (
                <>
                  Уже есть аккаунт?{" "}
                  <button onClick={() => setIsLogin(true)} className="text-[#d946ef] font-semibold hover:underline">
                    Войти
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="mt-8 text-center text-xs text-gray-500">
            © 2025 FreeMind • Все права защищены
          </div>
        </motion.div>
      </main>
    </div>
  );
}

// === ВХОД: POST /api/login → { success, redirectTo } → редирект ===
function LoginForm() {
  const router = useRouter();
  const [mcUser, setMcUser] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNotification(null);
    setIsLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mcUser: mcUser.trim(), password }),
        credentials: "include", // HttpOnly cookie
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || data.message || "Ошибка входа");
      }

      const redirectTo = typeof data.redirectTo === "string" && data.redirectTo.startsWith("/") ? data.redirectTo : "/menu";

      setNotification({ type: "success", message: "Вход выполнен успешно!" });

      setTimeout(() => {
        router.push(redirectTo);
        router.refresh(); // Обновляем серверные данные
      }, 800);
    } catch (err: any) {
      setNotification({ type: "error", message: err.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="space-y-5"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Ник в Minecraft</label>
        <div className="relative">
          <GamepadIcon size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#d946ef]" />
          <input
            type="text"
            placeholder="Steve"
            value={mcUser}
            onChange={(e) => setMcUser(e.target.value)}
            required
            className="w-full pl-10 pr-4 py-3 bg-[#1a0028]/50 border border-[#d946ef]/30 rounded-xl focus:border-[#d946ef] focus:outline-none focus:ring-2 focus:ring-[#d946ef]/50 transition-all placeholder-gray-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Пароль</label>
        <div className="relative">
          <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#d946ef]" />
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full pl-10 pr-4 py-3 bg-[#1a0028]/50 border border-[#d946ef]/30 rounded-xl focus:border-[#d946ef] focus:outline-none focus:ring-2 focus:ring-[#d946ef]/50 transition-all placeholder-gray-500"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={clsx(
          "w-full py-3 bg-gradient-to-r from-[#d946ef] to-[#c026d3] text-white font-bold rounded-xl shadow-[0_0_20px_#d946ef60] hover:shadow-[0_0_30px_#d946ef80] transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2",
          isLoading && "opacity-70 cursor-not-allowed"
        )}
      >
        {isLoading ? <>Вход...</> : <>Войти</>}
      </button>

      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={clsx(
              "mt-4 p-3 rounded-lg flex items-center gap-2 text-sm font-medium",
              notification.type === "success"
                ? "bg-green-900/50 border border-green-500 text-green-300"
                : "bg-red-900/50 border border-red-500 text-red-300"
            )}
          >
            {notification.type === "success" ? <CheckCircle size={16} /> : <XCircle size={16} />}
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
}

// === РЕГИСТРАЦИЯ: POST /api/users → { success, redirectTo } → редирект ===
function RegisterForm() {
  const router = useRouter();
  const [mcUser, setMcUser] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [mcUserError, setMcUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setMcUserError("");
    setPasswordError("");
    setNotification(null);

    let hasError = false;

    if (!mcUser.trim()) {
      setMcUserError("Введите ник");
      hasError = true;
    }

    if (password.length < 8) {
      setPasswordError("Минимум 8 символов");
      hasError = true;
    }

    if (password !== repeatPassword) {
      setPasswordError("Пароли не совпадают");
      hasError = true;
    }

    if (hasError) return;

    setIsLoading(true);

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mcUser: mcUser.trim(),
          password,
          role: ["Player"],
          verified: "false",
          active: "true",
        }),
        credentials: "include", // HttpOnly cookie
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        if (data.error?.includes("уже занято")) {
          setMcUserError(data.error);
        } else if (data.error?.includes("8 символов")) {
          setPasswordError(data.error);
        } else {
          throw new Error(data.error || data.message || "Ошибка регистрации");
        }
        return;
      }

      const redirectTo = typeof data.redirectTo === "string" && data.redirectTo.startsWith("/") ? data.redirectTo : "/menu";

      setNotification({ type: "success", message: "Регистрация успешна!" });

      setTimeout(() => {
        router.push(redirectTo);
        router.refresh();
      }, 800);
    } catch (err: any) {
      setNotification({ type: "error", message: err.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-5"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Ник в Minecraft</label>
        <div className="relative">
          <GamepadIcon size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#d946ef]" />
          <input
            type="text"
            placeholder="Alex"
            value={mcUser}
            onChange={(e) => {
              setMcUser(e.target.value);
              setMcUserError("");
            }}
            required
            className={clsx(
              "w-full pl-10 pr-4 py-3 bg-[#1a0028]/50 border rounded-xl focus:border-[#d946ef] focus:outline-none focus:ring-2 focus:ring-[#d946ef]/50 transition-all placeholder-gray-500",
              mcUserError ? "border-red-500" : "border-[#d946ef]/30"
            )}
          />
        </div>
        {mcUserError && (
          <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
            <XCircle size={14} />
            {mcUserError}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Пароль</label>
        <div className="relative">
          <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#d946ef]" />
          <input
            type="password"
            placeholder="Минимум 8 символов"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
            }}
            required
            className={clsx(
              "w-full pl-10 pr-4 py-3 bg-[#1a0028]/50 border rounded-xl focus:border-[#d946ef] focus:outline-none focus:ring-2 focus:ring-[#d946ef]/50 transition-all placeholder-gray-500",
              passwordError ? "border-red-500" : "border-[#d946ef]/30"
            )}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Повторите пароль</label>
        <div className="relative">
          <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#d946ef]" />
          <input
            type="password"
            placeholder="••••••••"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
            className={clsx(
              "w-full pl-10 pr-4 py-3 bg-[#1a0028]/50 border rounded-xl focus:border-[#d946ef] focus:outline-none focus:ring-2 focus:ring-[#d946ef]/50 transition-all placeholder-gray-500",
              passwordError ? "border-red-500" : "border-[#d946ef]/30"
            )}
          />
        </div>
        {passwordError && !mcUserError && (
          <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
            <XCircle size={14} />
            {passwordError}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={clsx(
          "w-full py-3 bg-gradient-to-r from-[#d946ef] to-[#c026d3] text-white font-bold rounded-xl shadow-[0_0_20px_#d946ef60] hover:shadow-[0_0_30px_#d946ef80] transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2",
          isLoading && "opacity-70 cursor-not-allowed"
        )}
      >
        {isLoading ? <>Создание...</> : <>Создать аккаунт</>}
      </button>

      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={clsx(
              "mt-4 p-3 rounded-lg flex items-center gap-2 text-sm font-medium",
              notification.type === "success"
                ? "bg-green-900/50 border border-green-500 text-green-300"
                : "bg-red-900/50 border border-red-500 text-red-300"
            )}
          >
            {notification.type === "success" ? <CheckCircle size={16} /> : <XCircle size={16} />}
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
}
