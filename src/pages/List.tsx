import React from "react";
import { useParams } from "react-router-dom";
import { prefixList } from "../hardcode/hardcode";

const List: React.FC = () => {
  const { letter } = useParams<{ letter: string }>();
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
        <div className="flex gap-[20%] w-full text-gray-500 text-xl px-4">
          <div className="flex flex-col gap-3">
            {prefixList.slice(0, prefixList.length / 2).map((prefix, index) => {
              return (
                <p className="text-lg" key={index}>
                  <span className="text-blue-500 font-bold">
                    {prefix.title}
                  </span>{" "}
                  {prefix.definition}
                </p>
              );
            })}
          </div>
          <div className="flex flex-col gap-3">
            {prefixList
              .slice(prefixList.length / 2, prefixList.length)
              .map((prefix, index) => {
                return (
                  <p className="text-lg" key={index}>
                    <span className="text-blue-500 font-bold">
                      {prefix.title}
                    </span>{" "}
                    {prefix.definition}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
