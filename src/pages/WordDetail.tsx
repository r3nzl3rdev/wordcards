import React from "react";
import { Link, useParams } from "react-router-dom";
import { wordDetails } from "../hardcode/hardcode";

const WordDetail: React.FC = () => {
  const { word } = useParams<{ word: string }>();
  return (
    <div className="flex w-full h-screen">
      <div className="flex flex-col flex-1 gap-4 items-start">
        <h1 className="text-4xl font-bold mb-4">{word}</h1>
        <p className="flex bg-yellow-100 p-4 shadow-lg shadow-gray-400">
          Sizning &nbsp;
          <span className="text-blue-primary hover:text-orange-500 hover:cursor-pointer">
            shaxsiy hisobingiz
          </span>
          &nbsp; endi bizning veb-saytimizda mavjud! &nbsp;
          <span className="text-blue-primary hover:text-orange-500 hover:cursor-pointer">
            {" "}
            Intervalli takrorlash
          </span>
          &nbsp; usuli yordamida so'zlarni yodlang!
        </p>
        <button className="py-2 px-4 bg-blue-primary hover:bg-blue-400 rounded-md text-white">
          <i className="fa-solid fa-bookmark mr-1"></i>
          Saqlanganlarga qo'shish
        </button>
        <div className="flex gap-2 items-center">
          <p className="text-2xl font-bold text-green-primary">
            [{wordDetails.transcription}]
          </p>
          <button className="py-2 px-3 border bg-gray-100 border-gray-300 rounded-md hover:bg-gray-300 hover:border-gray-400">
            <i className="fa-solid fa-volume-high"></i>
          </button>
        </div>
        <p className="flex gap-2 text-lg">
          <span className="font-bold">{wordDetails.typeEn}</span>
          <span>{wordDetails.typeUz}</span>
        </p>
        <p className="flex text-gray-500">
          <span className="italic">Ko'plik shakli</span>&nbsp;(plural):&nbsp;
          <span className="text-blue-primary">{wordDetails.plural}</span>.
        </p>
        <p className="flex flex-wrap">
          <span className="italic text-black">Sinonimlari:&nbsp;</span>
          {wordDetails.synonymList.map((synonym, index) => {
            return (
              <Link key={index} to={`/en/${synonym}`}>
                <span className="text-blue-primary hover:text-orange-500 text-md">
                  {synonym}
                </span>
                {index == wordDetails.synonymList.length - 1 ? "." : ","}&nbsp;
              </Link>
            );
          })}
        </p>
      </div>
      <div className="flex flex-col flex-1 bg-slate-300"></div>
    </div>
  );
};

export default WordDetail;
