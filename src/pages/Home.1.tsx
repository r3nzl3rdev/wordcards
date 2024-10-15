import React from "react";
import getAlphabet from "../utils";

export const Home: React.FC = () => {
  const alphabet = getAlphabet();
  return (
    <div className="flex justify-center py-8">
      <div className="flex flex-col gap-6 max-w-[936px]">
        <h1 className="text-3xl font-bold">English-Uzbek Lug'at</h1>
        <p>
          To view the list of words, select the letter from which they begin:{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum impedit
          ab mollitia cumque repellat nam voluptates! Qui, quidem? Minus, nam
          quo veniam tempore debitis eveniet sed numquam laudantium? Temporibus,
          officia natus? Fugiat odio veritatis voluptatum tenetur. Iure
          necessitatibus modi ducimus, quo corporis ad non adipisci quae,
          accusamus eligendi pariatur incidunt.
        </p>
        <div className="flex gap-1 flex-wrap">
          {alphabet.map((letter) => {
            <div
              key={letter}
              className="m-2 p-4 border border-gray-300 rounded"
            >
              {letter}
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};
