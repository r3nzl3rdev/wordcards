import React from "react";
import { Link } from "react-router-dom";
import { comments, wordsList } from "../../hardcode/hardcode";
import CommentList from "../../components/CommentList";
import AddCommentBox from "../../components/AddCommentBox";

const Home: React.FC = () => {
  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i),
  );
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 max-w-[936px]">
        <h1 className="text-2xl md:text-4xl font-bold">Inglizcha-O'zbekcha Lug'at</h1>
        <p>
          So'zlar ro'yxatini ko'rish uchun ular boshlanadigan harfni tanlang:
        </p>
        <div className="flex gap-1 flex-wrap">
          {alphabet.map((letter) => {
            return (
              <Link
                to={`list/${letter.toLocaleLowerCase()}`}
                key={letter}
                className="font-bold text-md text-blue-500 hover:text-yellow-600 hover:cursor-pointer"
              >
                {letter}
              </Link>
            );
          })}
        </div>

        <p className="text-2xl font-bold">Eng ko'p ishlatilinadigan so'zlar</p>
        <div className="flex gap-1 flex-wrap">
          {wordsList.map((word, index) => {
            return (
              <Link key={index} to={`en/${word}`}>
                <span className="text-lg text-blue-500 hover:text-orange-500">
                  {word}
                </span>
                {index == wordsList.length - 1 ? "." : ","}
              </Link>
            );
          })}
        </div>

        <p className="text-2xl font-bold">
          Namunaviy jumlalari <b className="uppercase">yo'q</b> so'zlar
        </p>
        <p>
          Quyidagi so'zlarda hali misol sifatida keltirilgan iboralar yoki
          jumlalar mavjud emas. Lekin siz loyihaga yordam berishingiz va ularni
          qo'shishingiz mumkin! So'z sahifasiga o'ting va "
          <b>Namuna qo'shish</b>" tugmasini bosing.
        </p>
        <div className="flex gap-1 flex-wrap">
          {wordsList.map((word, index) => {
            return (
              <Link key={index} to={`en/${word}`}>
                <span className="text-lg text-blue-500 hover:text-orange-500">
                  {word}
                </span>
                {index == wordsList.length - 1 ? "." : ","}
              </Link>
            );
          })}
        </div>
        <div className="mt-6 lg:mt-12 w-[98%] lg:w-full sticky left-1 flex flex-col justify-center gap-4 ">
          <p className="text-xl md:text-2xl font-bold">
            Saytdagi yangi sharhlar
          </p>
          <CommentList commentList={comments} />
          <AddCommentBox />
        </div>
      </div>
    </div>
  );
};

export default Home;
