import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4  max-w-[500px]">
        <h1 className="text-4xl font-bold">Kirish</h1>
        <p>
          Shaxsiy akkauntingizga kirish uchun{" "}
          <span className="font-bold">elektron pochta </span> va{" "}
          <span className="font-bold">parolingizni</span> kiriting.
        </p>

        <div className="flex flex-col gap-4 w-full mt-4">
          <Input className="rounded" id="email" label="Email:" />
          <Input className="rounded" id="parol" label="Parol:" />
        </div>
        <div className="flex gap-2 items-center">
          <Button className="bg-blue-500 w-fit rounded-md text-white hover:bg-blue-400">
            Kirish
          </Button>
          <p className="text-blue-500 hover:text-orange-400 cursor-pointer">
            Parolni unutdim
          </p>
        </div>
        <p>
          Agar sizda hali akkaunt bo'lmasa, yangi akkaunt yaratishingiz kerak!
        </p>
        <p>
          Akkaunt yaratganingizdan so'ng, so'zlarni{" "}
          <span className="font-bold">sandiqqa</span> saqlab qo'yishingiz va
          ularni{" "}
          <Link
            to="/interval-repetition"
            className="text-blue-500 hover:text-orange-400"
          >
            intervalli takrorlash
          </Link>{" "}
          usuli yordamida yodlashni boshlashingiz mumkin.
        </p>
      </div>
    </div>
  );
};

export default Login;
