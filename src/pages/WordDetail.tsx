import React from "react";
import { Link, useParams } from "react-router-dom";
import { wordDetails } from "../hardcode/hardcode";
import TensesTable from "../components/TensesTable";
import Button from "../components/Button";
import AddCommentBox from "../components/AddCommentBox";

const WordDetail: React.FC = () => {
  const { word } = useParams<{ word: string }>();
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">{word}</h1>
      <div className="flex flex-wrap w-full gap-6">
        <div className="flex flex-col lg:flex-1 gap-4 items-start">
          <p className="w-full bg-yellow-100 p-4 shadow-lg shadow-gray-400">
            Sizning
            <Link to="/login">
              <span className="text-blue-primary hover:text-orange-500 hover:cursor-pointer">
                &nbsp;shaxsiy hisobingiz&nbsp;
              </span>
            </Link>
            endi bizning veb-saytimizda mavjud!
            <Link to="/interval-repetition">
              <span className=" inline text-blue-primary hover:text-orange-500 hover:cursor-pointer">
                &nbsp;Intervalli takrorlash&nbsp;
              </span>
            </Link>
            usuli yordamida so'zlarni yodlang!
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
          {wordDetails.definitions.map((def, index) => {
            return (
              <div key={index}>
                <p className="flex gap-2 text-lg">
                  <span className="font-bold">{def.typeEn}</span>
                  <span>{def.typeUz}</span>
                </p>
                <p className="flex text-gray-500">
                  <span className="italic">Ko'plik shakli</span>
                  &nbsp;(plural):&nbsp;
                  <span className="text-blue-primary">{def.plural}</span>.
                </p>
                <p className="flex flex-wrap">
                  <span className="italic text-black">Sinonimlari:&nbsp;</span>
                  {def.synonymList?.map((synonym, index) => {
                    return (
                      <Link key={index} to={`/en/${synonym}`}>
                        <span className="text-blue-primary hover:text-orange-500 text-md">
                          {synonym}
                        </span>
                        {index == def.synonymList.length - 1 ? "." : ","}
                        &nbsp;
                      </Link>
                    );
                  })}
                </p>
                <div className="flex flex-col gap-4 px-2">
                  {def.others.map((d, index) => {
                    return (
                      <div key={index} className="flex flex-col gap-4">
                        <p>
                          {index + 1 + ". "}
                          <span className="font-bold">{d.meaning}</span>
                        </p>
                        {d.examples?.map((e, index) => {
                          return (
                            <div key={index} className="flex flex-col px-4">
                              <p>{e.phrase}</p>
                              <p className="italic text-gray-500">
                                {e.translation}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col md:flex-1 gap-4 items-start">
          <p className="text-2xl font-bold">Anagrammalar</p>
          <p>
            <span className="font-bold">{word}</span> bilan bir xil harflarni
            o'z ichiga olgan so'zlar:
            {wordDetails.anagrams.map((el, index) => {
              return (
                <span key={index}>
                  <span className="text-blue-primary hover:cursor-pointer hover:text-orange-500">
                    {" " + el}
                  </span>
                  {index == wordDetails.anagrams.length - 1 ? "." : ", "}
                </span>
              );
            })}
          </p>
          <p className="text-2xl font-bold">Foydalanish chastotasi</p>
          <p>
            1 million so'zga {word} so'zidan foydalanish soni:{" "}
            <span className="font-bold">{wordDetails.usageFrequency}</span> ta.
          </p>
          <p className="text-2xl font-bold">Namunaviy jumlalar</p>
          {wordDetails.exampleSentences?.map((s, index) => {
            return (
              <div key={index} className="flex flex-col">
                <p>{s.sentence}</p>
                <p className="italic text-gray-500">{s.translation}</p>
              </div>
            );
          })}
          <Button className="bg-green-500 hover:bg-green-400 rounded-md text-white">
            Namuna qo'shish
          </Button>
        </div>
      </div>

      <TensesTable tenseList={wordDetails.verbforms} />

      <div className="mt-6 lg:mt-12 flex flex-col items-left self-center text-left gap-4">
        <h1 className="font-bold text-2xl text-left">Sharhlar</h1>
        <p>
          Bu yerda <span className="font-bold">{word}</span> so'ziga tegishli
          sharh qoldirshingiz mumkin. Sharh faqat o'zbek yoki ingliz tillarida
          bo'lishi kerak.
        </p>
        <AddCommentBox />
      </div>
    </div>
  );
};

export default WordDetail;
