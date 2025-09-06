import React from "react";
import { useParams } from "react-router-dom";
import { prefixList } from "../hardcode/hardcode";

const List: React.FC = () => {
  const { letter } = useParams<{ letter: string }>();
  const prefixes = letter ? prefixList[letter.toLowerCase()] || [] : [];

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 w-full max-w-[936px]">
        <h1 className="text-4xl font-bold">English-Uzbek Lug'at</h1>
        <p>
          <span className="font-bold">
            {letter ? letter.toLocaleUpperCase() : ""}
          </span>{" "}
          harfi bilan boshlanadigan prefikslar ro'yxati:
        </p>
        <div className="flex gap-[20%] w-full text-gray-500 px-4">
          <div className="flex flex-col gap-3">
            {prefixes
              .slice(0, Math.ceil(prefixes.length / 2))
              .map((prefix, index) => (
                <p className="text-lg" key={index}>
                  <span className="text-blue-500 font-bold">
                    {prefix.title}
                  </span>{" "}
                  {prefix.definitions.join(" - ")}
                </p>
              ))}
          </div>
          <div className="flex flex-col gap-3">
            {prefixes
              .slice(Math.ceil(prefixes.length / 2))
              .map((prefix, index) => (
                <p className="text-lg" key={index}>
                  <span className="text-blue-500 font-bold">
                    {prefix.title}
                  </span>{" "}
                  {prefix.definitions.join(" - ")}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;

