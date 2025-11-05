"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function LoginForm() {
  const router = useRouter();
  const [mcUser, setMcUser] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNotification(null);
    setIsLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mcUser, password }),
        credentials: "include",
      });

      const data = await res.json();
      console.log("🔹 Login response:", data);

      if (!res.ok || !data.success) throw new Error(data.error || "Ошибка входа");

      const redirectTo = data.redirectTo || "/menu";

      setNotification({ type: "success", message: "Вход выполнен успешно!" });

      setTimeout(() => {
        router.push(redirectTo);
        router.refresh();
      }, 500);
    } catch (err) {
      console.error("Login error:", err);
      setNotification({ type: "error", message: err.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-4"
    >
      <input
        type="text"
        placeholder="Minecraft Nick"
        value={mcUser}
        onChange={(e) => setMcUser(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Вход..." : "Войти"}
      </button>

      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
}
