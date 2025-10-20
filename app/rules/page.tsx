"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function RulesPage() {
  const banners = [
    "/rules.png",
    "/rules2.png",
    "/rules3.png",
    "/rules4.png",
  ];

  return (
    <div className="min-h-screen bg-[#0b0014] text-white">

      {/* 🔝 Верхняя панель */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0b0014]/70 backdrop-blur-md border-b border-[#d946ef]/30 shadow-[0_0_20px_#d946ef20]">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.gif" alt="Logo" className="w-10 h-10 object-cover" />
            <span className="text-2xl font-bold text-[#d946ef]">FreeMind</span>
          </Link>

          <nav className="flex gap-4">
            <a href="http://map.free-mind.fun:20424/" className="px-4 py-2 bg-[#d946ef]/30 hover:bg-[#ff00ff]/40 rounded-full text-sm font-semibold transition-all duration-300">Онлайн-карта</a>
            <a href="/" className="px-4 py-2 bg-[#d946ef]/30 hover:bg-[#ff00ff]/40 rounded-full text-sm font-semibold transition-all duration-300">Главная</a>
            <Link href="/rules" className="px-4 py-2 bg-[#d946ef]/30 hover:bg-[#ff00ff]/40 rounded-full text-sm font-semibold transition-all duration-300">Правила</Link>
            <a href="https://freemind.easydonate.ru/" className="px-4 py-2 bg-[#d946ef]/30 hover:bg-[#ff00ff]/40 rounded-full text-sm font-semibold transition-all duration-300">Донат</a>
          </nav>
        </div>
      </header>

      {/* Контент страницы */}
      <div className="px-6 py-16 flex flex-col items-center pt-28">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-[#d946ef] mb-12 drop-shadow-[0_0_20px_#d946ef]"
        >
          Правила Сервера FreeMind
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-4xl bg-[#0b0014]/70 border border-[#d946ef]/40 rounded-2xl shadow-[0_0_40px_#d946ef30] backdrop-blur-md p-8 leading-relaxed space-y-12"
        >

          {/* Общие правила */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-[#d946ef]/50 shadow-[0_0_30px_#d946ef50] animate-pulse-slow">
              <img
                src={banners[0]}
                alt="Общие правила"
                className="w-full h-48 object-cover opacity-90 hover:opacity-100 transition-all duration-500"
              />
            </div>
            <h2 className="text-2xl font-semibold text-[#d946ef] mt-4">Общие правила</h2>
            <p className="text-gray-300 whitespace-pre-line">{`1.1 Регистрируясь на проекте FreeMind вы автоматически подтверждаете свою ознакомленность с правилами, соглашаетесь со всем сводом правил и обязуетесь соблюдать их

1.2 Незнание правил не освобождает от ответственности

1.3 Профиль и ник пользователя должен соответствовать всем правилам сервера, и правилам поведения в чате.

1.4 Владелец аккаунта несёт за него полную ответственность

1.5 Запрещена передача аккаунта другим пользователям без согласования с @Админ

1.6 Разрешено создание одного твинк аккаунта с вашим ником и припиской Tvink или _Tvink (обход любого наказания с помощью твинка увеличивает срок наказания)

1.7 Запрещены любые действия, которые негативно влияют на репутацию сервера, мешают комфортной игре на сервере, приносят негатив и раздражение другим игрокам.

1.8 Средства потраченные на платные услуги являются добровольной поддержкой и не подлежат возврату.

1.9 Присутствие на дискорд сервере обязательно, иначе вы не сможете зайти на сервер.`}</p>
          </div>

          {/* Правила поведения в чате */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-[#d946ef]/50 shadow-[0_0_30px_#d946ef50] animate-pulse-slow">
              <img
                src={banners[1]}
                alt="Правила поведения в чате"
                className="w-full h-48 object-cover opacity-90 hover:opacity-100 transition-all duration-500"
              />
            </div>
            <h2 className="text-2xl font-semibold text-[#d946ef] mt-4">Правила поведения в чате</h2>
            <p className="text-gray-300 whitespace-pre-line">{`2.1 Запрещен буллинг игроков и проявление провокационной токсичности в любом виде

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

          {/* Внутриигровые правила */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-[#d946ef]/50 shadow-[0_0_30px_#d946ef50] animate-pulse-slow">
              <img
                src={banners[2]}
                alt="Внутриигровые правила"
                className="w-full h-48 object-cover opacity-90 hover:opacity-100 transition-all duration-500"
              />
            </div>
            <h2 className="text-2xl font-semibold text-[#d946ef] mt-4">Внутриигровые правила</h2>
            <p className="text-gray-300 whitespace-pre-line">{`3.1 Запрещено гриферство в любом виде

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

          {/* Правила модерации */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-[#d946ef]/50 shadow-[0_0_30px_#d946ef50] animate-pulse-slow">
              <img
                src={banners[3]}
                alt="Правила модерации"
                className="w-full h-48 object-cover opacity-90 hover:opacity-100 transition-all duration-500"
              />
            </div>
            <h2 className="text-2xl font-semibold text-[#d946ef] mt-4">Правила модерации</h2>
            <p className="text-gray-300 whitespace-pre-line">{`4.1 Проверка: игрок обязан пройти проверку при подозрении на нарушения. Отказ = нарушение.

4.2 Модераторы могут удалять сущности, влияющие на TPS

4.3 При постройках сохраняйте лайтматики

4.4 Администрация имеет право в особых случаях выходить за рамки правил.`}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
