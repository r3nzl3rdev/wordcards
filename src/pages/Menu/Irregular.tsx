import React from "react";
import { comments, irregularVerbs } from "../../hardcode/hardcode";
import { Link } from "react-router-dom";
import CommentList from "../../components/CommentList";
import AddCommentBox from "../../components/AddCommentBox";

const Irregular: React.FC = () => {
  return (
    <div className="flex w-full lg:justify-center">
      <div className="flex flex-col gap-4 items-start self-center w-fit overflow-auto no-scrollbar pb-2 lg:p-2">
        <div className="flex flex-col gap-4 items-left w-full sticky left-0">
          <h1 className="text-4xl font-bold">Noto'g'ri fe'llar</h1>
          <p>
            Ingliz tilidagi eng mashhur tartibsiz fe'llarni quyidagi jadvalda
            ko'rishingiz mumkin.
          </p>
          <ul className="list-disc ml-8">
            <li>
              <span className="font-bold">Infinitive </span>- fe'lning noaniq
              (boshlang'ich) shakli.
            </li>
            <li>
              <span className="font-bold">Past Simple </span>- fe'lning o'tgan
              zamon shakli.
            </li>
            <li>
              <span className="font-bold">Participle II </span>- o'tgan zamon
              fe'lning Perfect zamonlaridagi shakli.
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 rounded-md overflow-auto min-w-[973px]">
          <div className="grid grid-cols-4 capitalize p-2 font-bold text-white bg-green-primary font-lg rounded-t">
            <p>Infinitive</p>
            <p>Past Simple</p>
            <p>Participle II</p>
            <p>Tarima</p>
          </div>
          {irregularVerbs.map((verb, index) => {
            return (
              <div
                key={index}
                className={`grid grid-cols-4 p-2 border-b border-gray-200 border-x ${index == irregularVerbs.length - 1 ? "rounded-b-md " : ""} ${index % 2 == 0 ? "bg-gray-100" : ""}`}
              >
                <p className="flex w-fill">
                  <Link
                    to={`/en/${verb.baseForm}`}
                    className="text-blue-500 hover:text-orange-400"
                  >
                    {verb.baseForm}
                  </Link>
                </p>
                <p>{verb.pastSimple}</p>
                <p>{verb.pastParticiple}</p>
                <p className="text-gray-500 italic">{verb.meaning}</p>
              </div>
            );
          })}
        </div>
        <div className="w-[98%] lg:w-full max-w-[973px] sticky left-1 flex flex-col justify-center gap-4 ">
          <CommentList commentList={comments} />
          <AddCommentBox />
        </div>
      </div>
    </div>
  );
};

export default Irregular;
