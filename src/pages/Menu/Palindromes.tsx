import React from "react";
import CommentList from "../../components/CommentList";
import AddCommentBox from "../../components/AddCommentBox";
import {
  comments,
  palindromeList,
  uzPalindromeList,
} from "../../hardcode/hardcode";
import { Link } from "react-router-dom";

const Palindromes: React.FC = () => {
  return (
    <div className="flex w-full lg:justify-center">
      <div className="flex flex-col gap-4 items-start self-center w-fit overflow-auto no-scrollbar pb-2 lg:p-2">
        <div className="flex flex-col gap-4 items-left w-full sticky left-1 max-w-[973px]">
          <h1 className="text-2xl md:text-4xl font-bold">Palindrom so'zlar</h1>
          <p>
            <b>Palindromlar</b> - bu chapdan o'ngga va o'ngdan chapga bir xil
            o'qiladigan so'zlar.
          </p>
          <p>
            Quyida o'zbek va ingliz tillaridagi palindrom so'zlar keltirilgan.
          </p>
        </div>

        <p className="text-3xl font-bold">Inglizcha palindromlar</p>
        <div className="grid grid-cols-1 rounded-md overflow-auto w-full min-w-[300px] lg:min-w-[973px]">
          <div className="grid grid-cols-2 p-2 font-bold text-white bg-green-primary font-lg rounded-t">
            <p>Palindrom so'z</p>
            <p>Tarjima</p>
          </div>
          {palindromeList.map((palindrome, index) => {
            return (
              <div
                key={index}
                className={`grid grid-cols-2 p-2 border-b border-gray-200 border-x lg:hover:bg-gray-200 ${index == palindromeList.length - 1 ? "rounded-b-md " : ""} ${index % 2 == 0 ? "bg-gray-100" : ""}`}
              >
                <p className="flex gap-2 w-fill">
                  <Link
                    to={`/en/${palindrome.word}`}
                    className="text-blue-500 hover:text-orange-400"
                  >
                    {palindrome.word}
                  </Link>
                </p>
                <p className="flex gap-2 w-fill text-gray-500 italic">
                  {palindrome.translation}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-3xl font-bold">O'zbekcha palindromlar</p>
        <div className="grid grid-cols-1 rounded-md overflow-auto w-full min-w-[50px] lg:min-w-[973px]">
          <div className="grid grid-cols-2 p-2 font-bold text-white bg-green-primary font-lg rounded-t">
            <p>Palindrom so'z</p>
          </div>
          {uzPalindromeList.map((word, index) => {
            return (
              <p
                key={index}
                className={`flex gap-2 w-fill  p-2 border-b border-gray-200 border-x hover:bg-gray-200 ${index == uzPalindromeList.length - 1 ? "rounded-b-md " : ""} ${index % 2 == 0 ? "bg-gray-100" : ""}`}
              >
                {word}
              </p>
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

export default Palindromes;
