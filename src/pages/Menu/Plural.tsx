import React from "react";
import CommentList from "../../components/CommentList";
import AddCommentBox from "../../components/AddCommentBox";
import { comments } from "../../hardcode/hardcode";

const Plural: React.FC = () => {
  return (
    <div className="flex w-full lg:justify-center">
      <div className="flex flex-col gap-4 items-start self-center w-fit overflow-auto no-scrollbar pb-2 lg:p-2">
        <div className="flex flex-col gap-4 items-left w-full sticky left-1 max-w-[973px]">
          <h1 className="text-4xl font-bold">
            Ingliz tilida otlarning ko'plik shakli
          </h1>
          <p>
            Ingliz tilidagi otlar birlik yoki ko'plik shaklida bo'lishi mumkin.
            Ko'pincha otning ko'plik shakli, o'sha otning birlik shakliga{" "}
            <b>-s</b> yoki <b>-es</b> qo'shimchasini qo'shish orqali yasaladi.
          </p>
          <p>
            Masalan, <b>dog</b> (it) - <b>dogs</b> (itlar) yoki <b>bus</b>{" "}
            (avtobus) - <b>buses</b> (avtobuslar). Ammo bu qoidadan mustasno
            so'zlar ham mavjud.
          </p>
          <p>
            Quyidagi jadvalda esa umumiy qoidaga to'g'ri kelmaydigan ba'zi
            so'zlar ko'rsatilgan.
          </p>
        </div>

        <div className="grid grid-cols-1 rounded-md overflow-auto min-w-[973px]">
          <div className="grid grid-cols-2 p-2 font-bold text-white bg-green-primary font-lg rounded-t">
            <p>Birlik shakli (singular)</p>
            <p>Ko'plik shakli (plural)</p>
          </div>
        </div>
        <div className="w-[98%] lg:w-full max-w-[973px] sticky left-1 flex flex-col justify-center gap-4 ">
          <CommentList commentList={comments} />
          <AddCommentBox />
        </div>
      </div>
    </div>
  );
};

export default Plural;
