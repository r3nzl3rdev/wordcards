import React from "react";
import { comments, mostUsedWords } from "../../hardcode/hardcode";
import { Link } from "react-router-dom";
import CommentList from "../../components/CommentList";
import AddCommentBox from "../../components/AddCommentBox";

const FrequencyList: React.FC = () => {
  return (
    <div className="flex w-full lg:justify-center">
      <div className="flex flex-col gap-4 items-start self-center w-full overflow-auto no-scrollbar pb-2 lg:p-2 max-w-[973px]">
        <div className="flex flex-col gap-4 items-left w-full sticky left-0">
          <h1 className="text-2xl md:text-4xl font-bold">
            Eng ko'p ishlatilinadigan so'zlar
          </h1>
          <p>
            Quyida ingliz tilida eng ko'p qo'llaniladigan <b>TOP-1000</b> ta
            so'zlar jadvali keltirilgan.
          </p>
          <p>
            Statistika ingliz tilidagi Vikipediyadagi maqolalar matnini tahlil
            qilish orqali yaratilgan.
          </p>
        </div>
        <div className="grid grid-cols-1 rounded-md overflow-auto w-full min-w-[550px]">
          <div className="grid grid-cols-4 capitalize p-2 px-4 font-bold text-white bg-green-primary font-lg rounded-t">
            <p>O'rin</p>
            <p>So'z</p>
            <p>Milliontadan</p>
            <p>Tarjima</p>
          </div>
          {mostUsedWords.map((word, index) => {
            return (
              <div
                key={index}
                className={`grid grid-cols-4 p-2 px-4 border-b border-gray-200 border-x hover:bg-gray-200 ${index == mostUsedWords.length - 1 ? "rounded-b-md " : ""} ${index % 2 == 0 ? "bg-gray-100" : ""}`}
              >
                <p className="text-gray-500">{index}.</p>
                <p className="flex w-fill">
                  <Link
                    to={`/en/${word.word}`}
                    className="text-blue-500 hover:text-orange-400"
                  >
                    {word.word}
                  </Link>
                </p>
                <p>{word.frequency}</p>
                <p className="text-gray-500 italic">{word.translation}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-6 lg:mt-12 w-[98%] lg:w-full max-w-[973px] sticky left-1 flex flex-col justify-center gap-4 ">
          <CommentList commentList={comments} />
          <AddCommentBox />
        </div>
      </div>
    </div>
  );
};

export default FrequencyList;
