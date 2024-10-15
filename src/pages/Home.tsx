import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i),
  );
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 max-w-[936px]">
        <h1 className="text-3xl font-bold">English-Uzbek Lug'at</h1>
        <p>
          So'zlar ro'yxatini ko'rish uchun ular boshlanadigan harfni tanlang:
        </p>
        <div className="flex gap-1 flex-wrap">
          {alphabet.map((letter) => {
            return (
              <Link
                to={`list/${letter.toLocaleLowerCase()}`}
                key={letter}
                className="font-bold text-md text-blue-500 hover:text-yellow-600 hover:cursor-pointer"
              >
                {letter}
              </Link>
            );
          })}
        </div>

        <p className="text-2xl font-bold">Eng ko'p ishlatilinadigan so'zlar</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum impedit
          ab mollitia cumque repellat nam voluptates! Qui, quidem? Minus, nam
          quo veniam tempore debitis eveniet sed numquam laudantium? Temporibus,
          officia natus? Fugiat odio veritatis voluptatum tenetur. Iure
          necessitatibus modi ducimus, quo corporis ad non adipisci quae,
          accusamus eligendi pariatur incidunt.
        </p>
      </div>
    </div>
  );
};

export default Home;
