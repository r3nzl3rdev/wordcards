import Input from "./Input";
import Menu from "./Menu";

const Header = () => {
  const menuOptions = [
    {
      title: "Home", // Главная
      route: "/home",
    },
    {
      title: "Irregular Verbs",
      route: "/irregular-verbs",
    },
    {
      title: "Plural", // Множественное число
      route: "/plural",
    },
    {
      title: "Palindromes", // Палиндромы
      route: "/palindromes",
    },
    {
      title: "Numerals", // Числительные
      route: "/numerals",
    },
    {
      title: "Word Selection", // Подбор слов
      route: "/word-selection",
    },
    {
      title: "Bulk Translation", // Массовый перевод
      route: "/bulk-translation",
    },
    {
      title: "Frequency List", // Частотный список
      route: "/frequency-list",
    },
    {
      title: "Spaced Repetition Method", // Метод интервальных повторений
      route: "/spaced-repetition",
    },
    {
      title: "Reviews", // Отзывы
      route: "/reviews",
    },
  ];
  return (
    <div className="flex w-full justify-between bg-green-primary">
      <div className="flex">
        <Menu options={menuOptions} />
        <Input placeholder="So'z qidirish..." />
      </div>
    </div>
  );
};

export default Header;
