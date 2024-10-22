import React from "react";
import CommentList from "../../components/CommentList";
import AddCommentBox from "../../components/AddCommentBox";
import { comments } from "../../hardcode/hardcode";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";

const WordSelection: React.FC = () => {
  return (
    <div className="flex w-full lg:justify-center">
      <div className="flex flex-col gap-4 items-start self-center w-fit overflow-auto no-scrollbar pb-2 lg:p-2">
        <div className="flex flex-col gap-4 items-left w-full sticky left-1 max-w-[973px]">
          <h1 className="text-2xl md:text-4xl font-bold">
            Harf bo'yicha so'zlarni tanlash
          </h1>
          <p>
            Ushbu sahifada krossvordlar yoki Wordle kabi o'yinlar uchun so'zlar
            qidirish imkon mavjud. Bu yerda siz, o'zingiz biladigan ingliz yoki
            o'zbek tilidagi so'zning ba'zi harflarini tanlasangiz, sayt o'sha
            so'zni sizga topib beradi.
          </p>
          <p>
            Ingliz tilidagi eng keng tarqalgan harflar (kamayish tartibida):{" "}
            <b>e, t, a, o, i, n, s, h, r.</b>
          </p>
          <p className="w-full bg-yellow-100 p-4 shadow-lg shadow-gray-400">
            Endi bizning veb-saytimizda
            <Link to="/login">
              <span className="text-blue-primary hover:text-orange-500 hover:cursor-pointer">
                &nbsp;shaxsiy hisob&nbsp;
              </span>
            </Link>
            ochish imkoniyati bor!
            <Link to="/interval-repetition">
              <span className=" inline text-blue-primary hover:text-orange-500 hover:cursor-pointer">
                &nbsp;Intervalli takrorlash&nbsp;
              </span>
            </Link>
            usuli yordamida so'zlarni yodlang!
          </p>

          <div className="flex flex-col gap-4 mt-6 lg:mt-12 max-w-[400px]">
            <div>
              <p>Til</p>
              <select
                id="languageSelect"
                className="px-4 py-3 border bg-gray-100 border-gray-300 rounded-md"
              >
                <option value="eng-uzb">Eng - Uzb</option>
                <option value="uzb-eng">Uzb - Eng</option>
              </select>
            </div>
            <Input
              id="letterNumber"
              label="So'zdagi harflar soni:"
              className="rounded"
              type="number"
            />
            <Input
              id="letterBelongList"
              label="So'zga tegishli harflar:"
              className="rounded"
            />
            <Input
              id="letterNotBelongList"
              label="So'zga tegishli bo'lmagan harflar:"
              className="rounded"
            />
            <Input
              id="letterNotBelongList"
              label="Eslay olganizcha (taxminiy so'z)"
              className="rounded"
            />
            <div className="flex gap-1">
              <input type="checkbox" id="isUnique" name="isUnique" checked />
              <label htmlFor="isUnique">So'zda harflar takrorlanmaydi</label>
            </div>
            <div className="flex gap-4 flex-wrap">
              <Button className="flex gap-1 py-2 px-4 bg-blue-primary hover:bg-blue-400 rounded-md text-white">
                <i className="fa-solid fa-magnifying-glass"></i>
                Topish
              </Button>
              <Button className="flex gap-1 py-2 px-4 bg-yellow-500 hover:bg-blue-400 rounded-md text-black">
                <i className="fa-solid fa-xmark"></i>
                Filterlarni o'chirish
              </Button>
              <Button className="flex gap-1 py-2 px-4 bg-green-500 hover:bg-blue-400 rounded-md text-white">
                <i className="fa-solid fa-plus"></i>
                So'z qo'shish
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-6 lg:mt-12 w-[98%] lg:w-full max-w-[973px] sticky left-1 flex flex-col justify-center gap-4 ">
          <p className="text-xl md:text-2xl font-bold">Sharhlar</p>
          <p className="mb-6">Bu yerda siz ushbu sahifa haqida sharh qoldirishingiz mumkin.</p>
          <CommentList commentList={comments} />
          <AddCommentBox />
        </div>
      </div>
    </div>
  );
};

export default WordSelection;
