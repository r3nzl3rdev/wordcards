import React from "react";
import CommentList from "../../components/CommentList";
import AddCommentBox from "../../components/AddCommentBox";
import { comments } from "../../hardcode/hardcode";
import Button from "../../components/Button";

const BulkTranslation: React.FC = () => {
  return (
    <div className="flex w-full lg:justify-center">
      <div className="flex flex-col gap-4 items-start self-center w-full overflow-auto no-scrollbar pb-2 lg:p-2 max-w-[1100px]">
        <div className="flex flex-col gap-4 items-left w-full sticky left-0">
          <h1 className="text-2xl md:text-4xl font-bold">
            Ro'yxat bo'yicha so'zlarni tarjima qilish
          </h1>
          <p>
            Tugmani bitta bosish bilan bir nechta so'zlarni tarjima qiling! Har
            bir so'z alohida qatorda bo'lishi kerak.
          </p>
          <p>
            Tarjima yo'nalishini ham tanlashingiz mumkin: ingliz tilidan rus
            tiliga yoki aksincha.
          </p>
        </div>
        <select
          id="languageSelect"
          className="px-4 py-3 border bg-gray-100 border-gray-300 rounded-md"
        >
          <option value="eng-uzb">Eng - Uzb</option>
          <option value="uzb-eng">Uzb - Eng</option>
        </select>
        <div className="flex flex-wrap gap-4 h-56 w-full">
          <div className="flex flex-1 flex-col">
            <p>So'zlar ro'yhati </p>
            <textarea className="border border-gray-300 rounded-md h-full"></textarea>
          </div>
          <div className="flex flex-1 flex-col">
            <p>Tarjima</p>
            <textarea className="border border-gray-300 rounded-md h-full"></textarea>
          </div>
        </div>{" "}
        <Button className="text-md text-white bg-green-500 active:bg-green-300 lg:hover:bg-green-400 w-fit rounded-md">
          Tarjima qilish
        </Button>
        <div className="mt-6 lg:mt-12 w-[98%] lg:w-full sticky left-1 flex flex-col justify-center self-center gap-4 max-w-[937px]">
          <p className="text-xl md:text-2xl font-bold">Sharhlar</p>
          <p>
            Bu yerda siz tarjima qilingan so'zlar ro'yxati bo'yicha
            fikr-mulohazalaringizni qoldirishingiz mumkin.
          </p>
          <CommentList commentList={comments} />
          <AddCommentBox />
        </div>
      </div>
    </div>
  );
};

export default BulkTranslation;
