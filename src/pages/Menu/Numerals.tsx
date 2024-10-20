import React from "react";
import AddCommentBox from "../../components/AddCommentBox";
import CommentList from "../../components/CommentList";
import { comments, englishNumbers } from "../../hardcode/hardcode";
import { Link } from "react-router-dom";

const Numerals: React.FC = () => {
  return (
    <div className="flex w-full lg:justify-center">
      <div className="flex flex-col gap-4 items-start self-center w-fit overflow-auto no-scrollbar pb-2 lg:p-2 max-w-[973px]">
        <div className="flex flex-col gap-4 items-left w-full sticky left-0">
          <h1 className="text-2xl md:text-4xl font-bold">Noto'g'ri fe'llar</h1>
          <p>
            Ushbu jadvalda ingliz tilining bir so'z bilan yozilgan asosiy
            raqamlari keltirilgan. Qolgan raqamlar odatda bu erda keltirilgan
            raqamlardan birlashtiriladi. Misol uchun, <b>21</b> raqami "yigirma"
            va "bir" so'zlarining birikmasi sifatida yozilishi mumkin, ya'ni.
            <b>yigirma bir</b>.
          </p>
        </div>
        <div className="grid grid-cols-1 rounded-md overflow-auto w-full min-w-[300px]">
          <div className="grid grid-cols-3 capitalize p-2 px-4 font-bold text-white bg-green-primary font-lg rounded-t">
            <p>Son</p>
            <p>Inglizcha</p>
            <p>O'zbekcha</p>
          </div>
          {englishNumbers.map((numeral, index) => {
            return (
              <div
                key={index}
                className={`grid grid-cols-3 p-2 px-4 border-b border-gray-200 border-x hover:bg-gray-200 ${index == englishNumbers.length - 1 ? "rounded-b-md " : ""} ${index % 2 == 0 ? "bg-gray-100" : ""}`}
              >
                <p>{numeral.number}</p>
                <p className="flex w-fill">
                  <Link
                    to={`/en/${numeral.numeral}`}
                    className="text-blue-500 hover:text-orange-400"
                  >
                    {numeral.numeral}
                  </Link>
                </p>
                <p className="text-gray-500 italic">{numeral.translation}</p>
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

export default Numerals;
