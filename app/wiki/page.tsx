
"use client";

import { JSX } from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  Book,
  Mail,
  Info,
  Folder,
  Brush,
  Beaker,
  Cog,
  Package,
  Users,
} from "lucide-react";

// Define the type for category items
interface CategoryItem {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

// Define the type for categories
interface Category {
  section: string;
  items: CategoryItem[];
}

// Define the valid keys for the content object
type ContentKey =
  | "Как играть?"
  | "Команды"
  | "Сборка"
  | "Механики Сервера"
  | "Моды"
  | "Мапарты"
  | "ФМбойчик"
  | "Наборы Эффектов"
  | "Кланы";

// Define the type for the content object
interface ContentMap {
  [key: string]: JSX.Element;
}

export default function WikiPage() {
  const [selected, setSelected] = useState<ContentKey>("Как играть?");
  const pathname = usePathname();
  const [isMobileWarning, setIsMobileWarning] = useState(false);

  const navItems = [
    { href: "/", label: "Главная", external: false },
    { href: "/map", label: "Онлайн-карта", external: false },
    { href: "/wiki", label: "Вики", external: false },
    { href: "/rules", label: "Правила", external: false },
    { href: "/shop", label: "Магазин", external: false }
  ];

  const categories: Category[] = [
    {
      section: "ОСНОВНАЯ ИНФОРМАЦИЯ",
      items: [
        { name: "Как играть?", icon: Mail },
        { name: "Команды", icon: Info },
        { name: "Сборка", icon: Folder },
      ],
    },
    {
      section: "ИГРОВЫЕ МЕХАНИКИ",
      items: [
        { name: "Механики Сервера", icon: Cog },
        { name: "Моды", icon: Book },
        { name: "Мапарты", icon: Brush },
        { name: "ФМбойчик", icon: Beaker },
        { name: "Наборы Эффектов", icon: Package },
      ],
    },
    {
      section: "СЕРВЕР",
      items: [
        { name: "Кланы", icon: Users },
      ],
    },
  ];

  const MechanicsContent = () => {
    const [showSouls, setShowSouls] = useState(false);
    const [showHat, setShowHat] = useState(false);
    const [showFrames, setShowFrames] = useState(false);
    const [showBooks, setShowBooks] = useState(false);
    const [showElytra, setShowElytra] = useState(false);
    const [showBrewery, setShowBrewery] = useState(false);
    const [showAstools, setShowAstools] = useState(false);

    return (
      <div className="space-y-8 text-gray-300">
        {/* Души */}
        <div>
          <h2 className="text-lg font-semibold text-[#d946ef] mb-2">Души</h2>
          <p>
            После вашей смерти появляется душа с ресурсами. 
            При подбирании все ресурсы возвращаются к вам в инвентарь. 
            Душа живет 30 минут, после становится нестабильной и разбрасывает все вещи вокруг.
            Появляется над бездной и жидкостями. 
            До нестабильной версии подбирается только владельцем.
          </p>
          <button
            onClick={() => setShowSouls(!showSouls)}
            className="mt-2 px-4 py-2 bg-[#d946ef] text-white rounded-lg hover:bg-[#c026d3] transition-colors"
          >
            {showSouls ? "Скрыть фото" : "Показать фото"}
          </button>
          {showSouls && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="flex gap-4 mt-2 flex-wrap"
            >
              <img src="/soul1.png" alt="Душа 1" className="flex-1 min-w-[250px] rounded-lg" />
              <img src="/soul2.png" alt="Душа 2" className="flex-1 min-w-[250px] rounded-lg" />
            </motion.div>
          )}
        </div>

        {/* Братан крутой парик */}
        <div>
          <h2 className="text-lg font-semibold text-[#d946ef] mb-2">Братан крутой парик!</h2>
          <p>
            Ставим любой предмет на место головы и ловим удивлённые возгласы вашему стилю :teastolfo:
          </p>
          <p>Ну или просто <code>/hat</code>...</p>
          <button
            onClick={() => setShowHat(!showHat)}
            className="mt-2 px-4 py-2 bg-[#d946ef] text-white rounded-lg hover:bg-[#c026d3] transition-colors"
          >
            {showHat ? "Скрыть фото" : "Показать фото"}
          </button>
          {showHat && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="flex gap-4 mt-2 flex-wrap"
            >
              <img src="/hat1.png" alt="Hat 1" className="flex-1 min-w-[250px] rounded-lg" />
              <img src="/hat2.png" alt="Hat 2" className="flex-1 min-w-[250px] rounded-lg" />
            </motion.div>
          )}
        </div>

        {/* Онлайн-Карта */}
        <div>
          <h2 className="text-lg font-semibold text-[#d946ef] mb-2">Онлайн-Карта!</h2>
          <p>
            Наметилась середина сезона и все уже отхапали себе сочные кусочки? Поищи на онлайн-карте! Может ещё остались интересные места...
          </p>
          <a
            href="/map"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-[#d946ef] text-white font-semibold rounded-lg hover:bg-[#c026d3] transition-colors"
          >
            Открыть Онлайн-Карту
          </a>
        </div>

        {/* Невидимые Рамки */}
        <div>
          <h2 className="text-lg font-semibold text-[#d946ef] mb-2">Невидимые Рамки</h2>
          <p>
            Мапарту с твоей вайфу мешают рамки по бокам? Берём в руки ножницы, жмём по ним Shift + ПКМ и наслаждаемся результатом.
          </p>
          <button
            onClick={() => setShowFrames(!showFrames)}
            className="mt-2 px-4 py-2 bg-[#d946ef] text-white rounded-lg hover:bg-[#c026d3] transition-colors"
          >
            {showFrames ? "Скрыть фото" : "Показать фото"}
          </button>
          {showFrames && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="flex gap-4 mt-2 flex-wrap"
            >
              <img src="/b4r.png" alt="До" className="flex-1 min-w-[250px] rounded-lg" />
              <img src="/after.png" alt="После" className="flex-1 min-w-[250px] rounded-lg" />
            </motion.div>
          )}
        </div>

        {/* Дефицит Зачарованных Книг */}
        <div>
          <h2 className="text-lg font-semibold text-[#d946ef] mb-2">Дефицит Зачарованных Книг</h2>
          <p>
            Крестьяне приостанавливают продажу зачарованных книг :( Возможно у нас есть альтернативный вариант их получения?
          </p>
          <button
            onClick={() => setShowBooks(!showBooks)}
            className="mt-2 px-4 py-2 bg-[#d946ef] text-white rounded-lg hover:bg-[#c026d3] transition-colors"
          >
            {showBooks ? "Скрыть фото" : "Показать фото"}
          </button>
          {showBooks && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="flex gap-4 mt-2 flex-wrap"
            >
              <img src="/book1.png" alt="Книга 1" className="flex-1 min-w-[250px] rounded-lg" />
              <img src="/book2.png" alt="Книга 2" className="flex-1 min-w-[250px] rounded-lg" />
            </motion.div>
          )}
        </div>

        {/* Ребаланс Феечек Винкс */}
        <div>
          <h2 className="text-lg font-semibold text-[#d946ef] mb-2">Ребаланс Феечек Винкс</h2>
          <p>
            Элитры на постоянной основе выключены в энде 😭. В остальных мирах они без проблем работают.
          </p>
          <button
            onClick={() => setShowElytra(!showElytra)}
            className="mt-2 px-4 py-2 bg-[#d946ef] text-white rounded-lg hover:bg-[#c026d3] transition-colors"
          >
            {showElytra ? "Скрыть фото" : "Показать фото"}
          </button>
          {showElytra && (
            <motion.img
              src="/elytra.png"
              alt="Элитры"
              className="w-64 h-auto rounded-lg mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
          )}
        </div>

        {/* Звучит Как Тост */}
        <div>
          <h2 className="text-lg font-semibold text-[#d946ef] mb-2">Звучит Как Тост</h2>
          <p>
            Как же можно играть на сервере и без бревери? Если нужен гайд по варке, держи — тык.
            Кастомные рецепты напитков возможно стоит искать там же где и чар-книжки. 
            Если хочешь добавить свой личный рецепт — тык.
          </p>
          <button
            onClick={() => setShowBrewery(!showBrewery)}
            className="mt-2 px-4 py-2 bg-[#d946ef] text-white rounded-lg hover:bg-[#c026d3] transition-colors"
          >
            {showBrewery ? "Скрыть фото" : "Показать фото"}
          </button>
          {showBrewery && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="flex flex-col gap-2 mt-2"
            >
              <a
                href="https://telegra.ph/Brewery-06-15-5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-[#d946ef] text-white font-semibold rounded-lg hover:bg-[#c026d3] transition-colors"
              >
                Гайд по варке
              </a>
              <a
                href="https://freemind.easydonate.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-[#d946ef] text-white font-semibold rounded-lg hover:bg-[#c026d3] transition-colors"
              >
                Добавить свой рецепт
              </a>
              <img src="/brewery.png" alt="Brewery" className="w-48 h-auto rounded-lg" />
            </motion.div>
          )}
        </div>

        {/* Стойки для брони */}
        <div>
          <h2 className="text-lg font-semibold text-[#d946ef] mb-2">Стойки для брони</h2>
          <p>
            Вводите команду <code>/astools</code> и превращаете свою постройку в целый артхаус с детальными настройками стоек.
          </p>
          <button
            onClick={() => setShowAstools(!showAstools)}
            className="mt-2 px-4 py-2 bg-[#d946ef] text-white rounded-lg hover:bg-[#c026d3] transition-colors"
          >
            {showAstools ? "Скрыть фото" : "Показать фото"}
          </button>
          {showAstools && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="flex gap-4 mt-2 flex-wrap"
            >
              <img src="/astools1.png" alt="Astools 1" className="flex-1 min-w-[250px] rounded-lg" />
              <img src="/astools2.png" alt="Astools 2" className="flex-1 min-w-[250px] rounded-lg" />
            </motion.div>
          )}
        </div>
      </div>
    );
  };

  const content: ContentMap = {
    "Как играть?": (
      <div className="space-y-2">
        <p>Для подключения к серверу используйте следующие адреса:</p>
        <p className="font-semibold">Айпи Java 1.21.4+:</p>
        <p>free-mind.fun</p>
        <p className="font-semibold">Айпи Bedrock 1.21.4+:</p>
        <p>mc.free-mind.fun:20873</p>
      </div>
    ),
    "Команды": (
      <p>
        Команды: /sex *игрок* заходите на сервер и узнайте что она делает. Только руки на стол
      </p>
    ),
    "Сборка": (
      <div>
        <p>
          Наша сборка включает оптимизацию и визуальные улучшения, чтобы вы получали максимум удовольствия от игры. 
          Вы можете собрать сборку из модов, которые разрешены на форуме, но также можете скачать готовую сборку ниже 👇
        </p>
        <a
          href="https://drive.usercontent.google.com/download?id=1tK1Jlb3bY6Q6o7cjKAGCQaGUWp3OQuO4&export=download&authuser=0&confirm=t&uuid=72928829-7e7d-46f6-8548-dc94d3f69c6e&at=AKSUxGP0NJHhiodTiZJdywI4zIKn:1761131622464"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-3 bg-[#d946ef] text-white font-semibold rounded-lg hover:bg-[#c026d3] transition-colors"
        >
          Скачать сборку
        </a>
      </div>
    ),
    "Механики Сервера": <MechanicsContent />,
    "Моды": (
      <div>
        <h2 className="text-lg font-semibold text-[#d946ef] mb-2">Запрещённые моды:</h2>
        <ul className="list-disc list-inside mb-4 text-gray-300">
          <li>X-ray</li>
          <li>Baritone</li>
          <li>Auto-Totem</li>
          <li>Kill-Aura</li>
          <li>Jesus</li>
          <li>Sigma</li>
          <li>Seed-Cracker</li>
          <li>Entity Outliner</li>
          <li>Nofall</li>
          <li>Venus</li>
          <li>Cmd Cam</li>
          <li>Auto-Fish</li>
        </ul>
        <h2 className="text-lg font-semibold text-[#d946ef] mb-2">⚠ Спорные моды (использовать осторожно, уточняйте у администрации):</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>Freecam</li>
          <li>Litematica Printer</li>
          <li>Full brightness toggle (гамма)</li>
          <li>Xaero's map</li>
          <li>Auto-Clicker (только для AFK ферм)</li>
        </ul>
      </div>
    ),
    "Мапарты": (
      <div className="space-y-4 text-gray-300">
        <p>Командой <code>/if *название арта* размер и URL</code> вы сможете создать мап-арт.</p>
        <p>По дефолту можно создать два мапарта (с подпиской 15).</p>
        <p>Как создать:</p>
        <ol className="list-decimal list-inside ml-4">
          <li>Создаём пустые карты, количество зависит от размера арта.</li>
          <li>Вводим команду: <code>/if create {"{название арта}"} {"{ссылка на арт}"} {"{ширина}"} {"{высота}"}</code></li>
          <li>Дальше можно выбрать тип арта:
            <ul className="list-disc list-inside ml-6">
              <li>nearest-color — ближайшие цвета</li>
              <li>combined — цельный арт</li>
              <li>floyd-steinberg — чёрно-белый</li>
            </ul>
          </li>
          <li>Ссылки брать с дискорда.</li>
        </ol>
        <p>Пример: я хочу сделать арт с пацаном на фото 3 на 3 цельным:</p>
        <p><code>/if create фембой ссылка 3 3 combined</code></p>
      </div>
    ),
    "ФМбойчик": (
      <div className="space-y-4 text-gray-300">
        <p>ФМбойчик — это ебать какая ахуенная залупа.</p>
        <p>Играйте интересней с нашей подпиской ФМбойчик! Помимо того, что подписка символично делает вас ФМбойчиком, добавляя красивый префикс в табе, вы получаете:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Более удобный просмотр логов /co loocup</li>
          <li>Записывание песен на пластинки и рога /disc burn</li>
          <li>Команды /rename и /setlore</li>
          <li>Три уникальных набора эффектов</li>
        </ul>
      </div>
    ),



    "Наборы Эффектов": (
  <div className="space-y-6 text-gray-300">
    <div>
      <h2 className="text-lg font-semibold text-[#d946ef] mb-2">Святая Поступь</h2>
      <img
        src="/fly2.gif" // Замените на путь к вашей гифке (например, /holy-step.gif)
        alt="Святая Поступь Эффект"
        className="w-full h-auto max-h-48 rounded-lg mb-4 object-cover"
      />
      <p>След ходьбы<br />Особый "афк" вид<br />След стрел, мечей, телепорта...</p>
      <p className="mt-2 font-semibold">Способ Получения:</p>
      <p>Купить на сайте</p>
    </div>
    <div>
      <h2 className="text-lg font-semibold text-[#d946ef] mb-2">Варден</h2>
      <img
        src="/warden.gif" // Замените на путь к вашей гифке (например, /warden.gif)
        alt="Варден Эффект"
        className="w-full h-auto max-h-48 rounded-lg mb-4 object-cover"
      />
      <p>Особенности:<br />След ходьбы<br />След стрел, мечей...</p>
      <p className="mt-2 font-semibold">Способ Получения:</p>
      <p>Идёт в комплекте с подпиской Фмбойчик</p>
    </div>
    <div>
      <h2 className="text-lg font-semibold text-[#d946ef] mb-2">Коллапс</h2>
      <img
        src="/collaps4.gif" // Замените на путь к вашей гифке (например, /collapse.gif)
        alt="Коллапс Эффект"
        className="w-full h-auto max-h-48 rounded-lg mb-4 object-cover"
      />
      <p>Создан @Axoiot_6</p>
      <p>Особенности:<br />След ходьбы<br />Особый "афк" вид<br />След стрел, мечей, телепорта...</p>
      <p className="mt-2 font-semibold">Способ Получения:</p>
      <p>Купить на сайте поддержав @Axoiot_6</p>
    </div>
    <div>
      <h2 className="text-lg font-semibold text-[#d946ef] mb-2">Загадка</h2>
      <img
        src="/zagadka.gif" // Замените на путь к вашей гифке (например, /mystery.gif)
        alt="Загадка Эффект"
        className="w-full h-auto max-h-48 rounded-lg mb-4 object-cover"
      />
      <p>Особенности:<br />Неизвестно...<br />Кто-то подчищает следы...<br />Котя, может ты знаешь?</p>
      <p className="mt-2 font-semibold">Способ Получения:</p>
      <p>Идёт в комплекте с подпиской Фмбойчик</p>
    </div>
    <div>
      <h2 className="text-lg font-semibold text-[#d946ef] mb-2">Сакура</h2>
      <img
        src="/sakura.gif" // Замените на путь к вашей гифке (например, /sakura.gif)
        alt="Сакура Эффект"
        className="w-full h-auto max-h-48 rounded-lg mb-4 object-cover"
      />
      <p>Особенности:<br />Классический след ходьбы, ничего отвлекающего...</p>
      <p className="mt-2 font-semibold">Способ Получения:</p>
      <p>Идёт в комплекте с подпиской Фмбойчик</p>
    </div>
    <div>
      <h2 className="text-lgCentre font-semibold text-[#d946ef] mb-2">Заражённый</h2>
      <img
        src="/zaraza.gif" // Замените на путь к вашей гифке (например, /infected.gif)
        alt="Заражённый Эффект"
        className="w-full h-auto max-h-48 rounded-lg mb-4 object-cover"
      />
      <p>Особенности:<br />Разлетающиеся споры</p>
      <p className="mt-2 font-semibold">Способы Получения:</p>
      <p>Набрав 15 голосов со своего ника на Хот-мс!</p>
      <a
        href="https://hotmc.ru/minecraft-server-275654"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 px-4 py-2 bg-[#d946ef] text-white font-semibold rounded-lg hover:bg-[#c026d3] transition-colors"
      >
        Голосовать на HotMC
      </a>
      <p className="mt-2">Приобретя любой донат на сервере</p>
    </div>
    <div>
      <h2 className="text-lg font-semibold text-[#d946ef] mb-2">Звездочёт</h2>
      <img
        src="/zvezdni.gif" // Замените на путь к вашей гифке (например, /stargazer.gif)
        alt="Звездочёт Эффект"
        className="w-full h-auto max-h-48 rounded-lg mb-4 object-cover"
      />
      <p>Особенности:<br />След ходьбы<br />След мечей, урона...</p>
      <p>Выдаётся за выдающиеся дела на сервере!</p>
      <p>Примеры:<br />За впечатляющий проект или постройку<br />Проведение Ивентов<br />Контентмейкерам</p>
    </div>
    <div>
      <h2 className="text-lg font-semibold text-[#d946ef] mb-2">Сонный</h2>
      <img
        src="/sleep.gif" // Замените на путь к вашей гифке (например, /sleepy.gif)
        alt="Сонный Эффект"
        className="w-full h-auto max-h-48 rounded-lg mb-4 object-cover"
      />
      <p>Особенности:<br />След ходьбы</p>
      <p className="mt-2 font-semibold">Способы Получения:</p>
      <p>Побывать на первом сезоне FreeMind, скоро...</p>
    </div>
  </div>
),

    
    "Кланы": (
      <div className="space-y-6 text-gray-300">
        <div className="text-center">
          <img
            src="/aqua.png"
            alt="Клан Aqua Banner"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold text-[#d946ef] mb-4">Клан Aqua</h2>
          <p className="leading-relaxed mb-6">
            Клан Aqua — это команда, где каждый участник важен. Мы не гонимся за личной выгодой — наша цель — равномерное развитие всех членов, поддержка идей и совместный прогресс.
          </p>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-[#d946ef] mb-2">💧 Что нас отличает:</h3>
            <ul className="list-disc list-inside text-left">
              <li>Один из топовых кланов прошлого сезона</li>
              <li>Сильное взаимопонимание и командная игра</li>
              <li>Поддержка каждого участника в развитии и проектах</li>
              <li>Дружелюбная атмосфера и активное сообщество</li>
            </ul>
          </div>
          <p className="italic text-gray-400 mb-6">
            🚀 Присоединяйся к нам и стань частью команды, где каждый двигается вперёд вместе!
          </p>
          <a
            href="http://example.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#d946ef] text-white font-semibold rounded-lg hover:bg-[#c026d3] transition-all duration-300 shadow-[0_0_10px_#d946ef30]"
          >
            🔗 Присоединиться к нашему Discord
          </a>
        </div>
      </div>
    ),
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const isPortrait = window.innerHeight > window.innerWidth;
      setIsMobileWarning(width < 768 && isPortrait);
    };

    handleResize(); // Проверка при загрузке
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0b0014] text-white">
      {isMobileWarning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#0b0014]/90 p-6 rounded-xl border border-[#d946ef]/40 shadow-[0_0_20px_#d946ef30] text-center max-w-md"
          >
            <h2 className="text-2xl font-bold text-[#d946ef] mb-4">Внимание!</h2>
            <p className="text-gray-300 mb-4">
              Для лучшего опыта использования Вики переверните телефон горизонтально.
            </p>
            <button
              onClick={() => setIsMobileWarning(false)}
              className="px-4 py-2 bg-[#d946ef] text-white rounded-lg hover:bg-[#c026d3] transition-colors"
            >
              Закрыть
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* 🔝 Верхняя панель */}
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

      {/* Основной контент */}
      <div className="flex pt-20">
        {/* Боковое меню */}
        <aside className="w-72 bg-[#10001f]/80 border-r border-[#d946ef]/40 p-6 backdrop-blur-md flex flex-col justify-between min-h-[calc(100vh-5rem)]">
          <div>
            {categories.map((group, idx) => (
              <div key={idx} className="mb-8">
                <h2 className="text-sm font-bold text-gray-400 mb-4 tracking-widest">
                  {group.section}
                </h2>
                <ul className="space-y-3">
                  {group.items.map(({ name, icon: Icon }) => (
                    <li key={name}>
                      <button
                        onClick={() => setSelected(name as ContentKey)}
                        className={`flex items-center w-full gap-3 px-3 py-2 rounded-lg transition-all duration-300 ${
                          selected === name
                            ? "bg-[#d946ef]/30 border border-[#d946ef]/50 shadow-[0_0_15px_#d946ef70]"
                            : "hover:bg-[#d946ef]/10"
                        }`}
                      >
                        <Icon
                          size={18}
                          className={`${
                            selected === name ? "text-[#d946ef]" : "text-gray-400"
                          }`}
                        />
                        <span
                          className={`${
                            selected === name
                              ? "text-[#d946ef] font-semibold"
                              : "text-gray-300"
                          }`}
                        >
                          {name}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* 📜 Контентная область */}
        <main className="flex-1 p-10">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#d946ef]/40 shadow-[0_0_40px_#d946ef30] mb-6">
              <img
                src="/banner.jpg"
                alt={selected}
                className="w-full h-64 object-cover opacity-80"
              />
            </div>
            <h1 className="text-4xl font-bold text-[#d946ef] mb-6 drop-shadow-[0_0_15px_#d946ef]">
              {selected}
            </h1>
            <div className="text-gray-300 text-lg leading-relaxed">
              {content[selected] || <p>Контент не найден.</p>}
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
