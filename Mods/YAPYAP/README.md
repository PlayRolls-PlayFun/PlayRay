# PlayRay Menu v1.4.2 - Crash Fix Update

Advanced mod menu for YAPYAP with ESP, God Mode, spawning, and value modifications.

**v1.4.2 Changes:**
- 🛡️ Fixed memory leak causing game crashes (particle system optimization)
- 🛡️ Added maximum particle limit (100) to prevent overflow
- 🛡️ Reduced particle count per effect from 20 to 10
- 🛡️ Added automatic resource cleanup on mod unload
- 🛡️ Added try-catch protection in all critical functions
- 🛡️ Fixed NetworkServer spawn checks to prevent crashes
- ⚡ Improved overall stability and performance

[English](#english) | [Русский](#russian)

---

<a name="english"></a>
## 🇬🇧 English

### Features

#### 💰 Values Tab
- Add money (100, 1000, 10000)
- Add quota points (100, 1000, 10000)
- Real-time value display
- Works in multiplayer (shared balance)

#### 🏃 Player Tab
- **God Mode** - Automatic health restoration to 110 HP
- **Health modification** - Set to 100, 1000, or max HP
- **Stamina modification** - Set to 100, 1000, or infinite
- Real-time health and stamina display

#### 👁️ Visual Tab
- **ESP Players** - See all players through walls (green labels)
- **ESP Enemies** - See all enemies through walls (red labels)
  - Spider 🕷, Mimic 📦, Goatman 🐐, Fetch 🐕, Eye 👁, Slime 💧, Fairy 🧚, and more
- **ESP Items** - See all items through walls (yellow/cyan labels)
  - Gold 💰, Books 📖, Potions 🧪, Torches 🔦, Wands 🪄, and more
- **ESP Settings** (collapsible menu):
  - Max Distance: 10m, 20m, 30m, 50m, 100m
  - Only Valuable items filter
  - Only Gold filter
- **Fullbright** - Maximum brightness for better visibility

#### � Spawn Tcab
- **Spawn Enemies**:
  - Spider 🕷, Goat 🐐, Fetch 🐕, Eye 👁, Slime 💧, Goblin 👺, Jester 🤡, Bomber 💣
  - Enemies spawn 3m in front of you
- **Spawn Items**:
  - Gold Coin 💰, Gold Pile 💰, Treasure 💎
  - Torch 🔦, Potion 🧪
  - **Wands** 🪄 - Browse and spawn any wand from the game

#### 🔧 Misc Tab
- **Auto Collect Gold** - Automatically collect gold coins and piles
  - Adjustable radius: 20m, 50m, 100m
  - Works continuously in background

#### 🎨 Interface
- Beautiful animated GUI with smooth fade effects
- Tab-based navigation (Values, Player, Visual, Spawn, Misc)
- Collapsible settings menus
- Particle effects on button clicks
- Real-time value updates
- Press **F2** to toggle menu

### Installation
1. Install BepInEx 5.x
2. Copy `PlayRayMenu.dll` to `BepInEx/plugins/`
3. Launch game

### ⚠️ Known Issues & Solutions

#### Issue 1: Microphone not working after installing mod
**Problem:** Game doesn't capture audio from microphone after installing BepInEx and the mod.

**Solution:** 
1. Install BepInEx
2. Launch game once
3. Close game
4. Reinstall "Online Fix Players" (if you're using it)
5. Replace files when prompted
6. Launch game again - microphone should work now!

**Why this happens:** BepInEx modifies some game files, and the online fix needs to be reapplied after BepInEx installation.

#### Issue 2: Mod doesn't work / Menu doesn't open
**Possible causes and solutions:**

1. **BepInEx not installed correctly**
   - Make sure BepInEx 5.x is installed in the game root folder
   - Check that `BepInEx/plugins/` folder exists
   - Launch game once to let BepInEx initialize

2. **Wrong BepInEx version**
   - This mod requires BepInEx 5.x (not 6.x)
   - Download: [BepInEx 5.4.21](https://github.com/BepInEx/BepInEx/releases/tag/v5.4.21)

3. **DLL blocked by Windows**
   - Right-click on `PlayRayMenu.dll`
   - Properties → Check "Unblock" if present → Apply

4. **Conflicting mods**
   - Try removing other mods temporarily
   - Test if PlayRay works alone

5. **Check logs**
   - Open `BepInEx/LogOutput.log`
   - Look for "PlayRay Menu" or errors
   - Share logs if you need help

**Still not working?** Share your `BepInEx/LogOutput.log` file!

### Usage
1. Press **F2** to open the menu
2. Navigate between tabs:
   - **💰 Values** - Money and quota points
   - **🏃 Player** - God Mode, health and stamina
   - **👁️ Visual** - ESP and visual enhancements
   - **🎭 Spawn** - Spawn enemies and items
   - **🔧 Misc** - Auto collect and other features
3. Click buttons to toggle features or modify values
4. Use **▶** buttons to expand/collapse advanced settings
5. Press **F2** to close menu

### Performance & Stability
- **v1.4.2**: Fixed critical memory leak causing crashes
- **v1.4.2**: Added particle limit protection (max 100 particles)
- **v1.4.2**: Reduced particle effects for better performance
- **v1.4.2**: Added automatic cleanup and crash protection
- Optimized ESP with caching (updates every 2s)
- Maximum 30 ESP labels per frame to prevent lag
- Direct type access instead of reflection for better performance
- Automatic cleanup of destroyed objects
- Efficient item prefab caching

### Technical Details
- Uses direct YAPYAP type references (Pawn, GameManager, ValuableObject, etc.)
- Minimal reflection usage for maximum performance
- Supports NetworkPuppetWandProp for wand detection
- Compatible with Mirror networking

### Notes
- ESP labels show distance and object type
- God Mode restores health automatically every second
- All features work in multiplayer
- Spawned items/enemies are networked and visible to all players
- Auto collect works on all gold items within radius

### Credits
Created by PlaySet

---

<a name="russian"></a>
## 🇷🇺 Русский

### Возможности

#### 💰 Вкладка Values
- Добавление денег (100, 1000, 10000)
- Добавление очков квоты (100, 1000, 10000)
- Отображение текущих значений в реальном времени
- Работает в мультиплеере (общий баланс)

#### 🏃 Вкладка Player
- **God Mode** - Автоматическое восстановление здоровья до 110 HP
- **Изменение здоровья** - Установить 100, 1000 или максимальное HP
- **Изменение выносливости** - Установить 100, 1000 или бесконечную
- Отображение здоровья и выносливости в реальном времени

#### 👁️ Вкладка Visual
- **ESP Players** - Видеть всех игроков сквозь стены (зеленые метки)
- **ESP Enemies** - Видеть всех врагов сквозь стены (красные метки)
  - Паук 🕷, Мимик 📦, Козлочеловек 🐐, Фетч 🐕, Глаз 👁, Слизь 💧, Фея 🧚 и другие
- **ESP Items** - Видеть все предметы сквозь стены (желтые/голубые метки)
  - Золото 💰, Книги 📖, Зелья 🧪, Факелы 🔦, Палочки 🪄 и другие
- **ESP Settings** (выдвижное меню):
  - Максимальная дистанция: 10м, 20м, 30м, 50м, 100м
  - Фильтр "Только ценные предметы"
  - Фильтр "Только золото"
- **Fullbright** - Максимальная яркость для лучшей видимости

#### 🎭 Вкладка Spawn
- **Спавн врагов**:
  - Паук 🕷, Козел 🐐, Фетч 🐕, Глаз 👁, Слизь 💧, Гоблин 👺, Джокер 🤡, Бомбер 💣
  - Враги появляются в 3м перед вами
- **Спавн предметов**:
  - Золотая монета 💰, Куча золота 💰, Сокровище 💎
  - Факел 🔦, Зелье 🧪
  - **Палочки** 🪄 - Просмотр и спавн любой палочки из игры

#### 🔧 Вкладка Misc
- **Auto Collect Gold** - Автоматический сбор золотых монет и куч
  - Настраиваемый радиус: 20м, 50м, 100м
  - Работает постоянно в фоне

#### � Интерфейс
- Красивое анимированное GUI с плавными эффектами
- Навигация по вкладкам (Values, Player, Visual, Spawn, Misc)
- Выдвижные меню настроек
- Эффекты частиц при нажатии кнопок
- Обновление значений в реальном времени
- Нажмите **F2** для открытия/закрытия меню

### Установка
1. Установите BepInEx 5.x
2. Скопируйте `PlayRayMenu.dll` в `BepInEx/plugins/`
3. Запустите игру

### ⚠️ Известные проблемы и решения

#### Проблема 1: Микрофон не работает после установки мода
**Проблема:** Игра не захватывает звук с микрофона после установки BepInEx и мода.

**Решение:** 
1. Установите BepInEx
2. Запустите игру один раз
3. Закройте игру
4. Переустановите "Online Fix Players" (если используете)
5. Замените файлы при запросе
6. Запустите игру снова - микрофон должен работать!

**Почему это происходит:** BepInEx изменяет некоторые файлы игры, и онлайн-фикс нужно применить заново после установки BepInEx.

#### Проблема 2: Мод не работает / Меню не открывается
**Возможные причины и решения:**

1. **BepInEx установлен неправильно**
   - Убедитесь что BepInEx 5.x установлен в корневую папку игры
   - Проверьте что папка `BepInEx/plugins/` существует
   - Запустите игру один раз чтобы BepInEx инициализировался

2. **Неправильная версия BepInEx**
   - Этот мод требует BepInEx 5.x (не 6.x)
   - Скачать: [BepInEx 5.4.21](https://github.com/BepInEx/BepInEx/releases/tag/v5.4.21)

3. **DLL заблокирована Windows**
   - Правый клик на `PlayRayMenu.dll`
   - Свойства → Отметьте "Разблокировать" если есть → Применить

4. **Конфликт с другими модами**
   - Попробуйте временно удалить другие моды
   - Проверьте работает ли PlayRay отдельно

5. **Проверьте логи**
   - Откройте `BepInEx/LogOutput.log`
   - Ищите "PlayRay Menu" или ошибки
   - Поделитесь логами если нужна помощь

**Всё ещё не работает?** Поделитесь файлом `BepInEx/LogOutput.log`!

### Использование
1. Нажмите **F2** чтобы открыть меню
2. Переключайтесь между вкладками:
   - **💰 Values** - Деньги и очки квоты
   - **🏃 Player** - God Mode, здоровье и выносливость
   - **👁️ Visual** - ESP и визуальные улучшения
   - **🎭 Spawn** - Спавн врагов и предметов
   - **🔧 Misc** - Автосбор и другие функции
3. Нажимайте кнопки для включения функций или изменения значений
4. Используйте кнопки **▶** для раскрытия/скрытия дополнительных настроек
5. Нажмите **F2** чтобы закрыть меню

### Производительность и стабильность
- **v1.4.2**: Исправлена критическая утечка памяти, вызывающая крашы
- **v1.4.2**: Добавлена защита от переполнения частиц (макс 100)
- **v1.4.2**: Уменьшены эффекты частиц для лучшей производительности
- **v1.4.2**: Добавлена автоочистка и защита от крашей
- Оптимизированный ESP с кэшированием (обновление каждые 2с)
- Максимум 30 ESP меток за кадр для предотвращения лагов
- Прямой доступ к типам вместо рефлексии для лучшей производительности
- Автоматическая очистка уничтоженных объектов
- Эффективное кэширование префабов предметов

### Технические детали
- Использует прямые ссылки на типы YAPYAP (Pawn, GameManager, ValuableObject и т.д.)
- Минимальное использование рефлексии для максимальной производительности
- Поддержка NetworkPuppetWandProp для обнаружения палочек
- Совместимость с Mirror networking

### Примечания
- ESP метки показывают дистанцию и тип объекта
- God Mode автоматически восстанавливает здоровье каждую секунду
- Все функции работают в мультиплеере
- Заспавненные предметы/враги синхронизированы и видны всем игрокам
- Автосбор работает на всех золотых предметах в радиусе

### Благодарности
Создано PlaySet

---

Enjoy! 🎮
