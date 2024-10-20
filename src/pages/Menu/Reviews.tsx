import React from "react";
import CommentList from "../../components/CommentList";
import AddCommentBox from "../../components/AddCommentBox";
import { comments } from "../../hardcode/hardcode";

const Reviews: React.FC = () => {
  return (
    <div className="flex w-full lg:justify-center">
      <div className="flex flex-col gap-4 items-start self-center w-full overflow-auto no-scrollbar pb-2 lg:p-2 max-w-[973px]">
        <div className="flex flex-col gap-4 items-left w-full sticky left-0">
          <h1 className="text-2xl md:text-4xl font-bold">Fikr-mulohaza</h1>
          <p>
            Ushbu sahifada <b>words.uz</b> loyihasi bo'yicha
            fikr-mulohazalaringizni qoldirishingiz mumkin. Har qanday
            fikr-mulohaza, istak va takliflaringizni qabul qilishdan xursand
            bo'lamiz! Barcha sharhlar nashrdan oldin tekshiriladi.
          </p>
          <p>
            P.S. Iltimos, tegishli sahifalarda aniq so'zlar bo'yicha sharhlar
            qoldiring.
          </p>
        </div>

        <div className="mt-6 lg:mt-12 w-[98%] lg:w-full sticky left-1 flex flex-col justify-center gap-4 ">
          <h1 className="text-xl md:text-2xl font-bold">
            words.uz loyihasi bo'yicha sharhlar, tilaklar va takliflar
          </h1>
          <CommentList commentList={comments} />
          <AddCommentBox />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
