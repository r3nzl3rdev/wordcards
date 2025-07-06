import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import { hardNavigate } from "../utils";
import { API_URL } from "../hardcode/hardcode";

const Login: React.FC = () => {
  const [isPasswordModalOpen, setPasswordModalOpen] = useState(false);
  const [isRegisterdModalOpen, setRegisterModalOpen] = useState(false);
  const [isCodeSent, setCodeSent] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmationCode, setCode] = useState<string>("")
  const navigate = useNavigate();

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("email", email)
      localStorage.setItem("accessToken", data.data.accessToken)
      localStorage.setItem("refreshToken", data.data.refreshToken)

      alert("Login successful!");
      hardNavigate("/settings")
    } else {
      alert("Login failed!");
    }

    console.log(data)
  };

  const handleRegSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("PRSSSSSSSSSSSSSSSS: ", JSON.stringify({ email, password }))
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    console.log("reg: ", response)

    await response.json();
    if (response.ok) {
      alert("Code sent!");
      setCodeSent(true)
    } else {
      alert("Registration failed!");
    }
  }

  const handleCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch(`${API_URL}/auth/verify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ confirmationCode }),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("email", data.email)
      localStorage.setItem("accessToken", data.accessToken)
      localStorage.setItem("refreshToken", data.refreshToken)
      alert("Registered successfully!");
      navigate("/settings")
    } else {
      alert("Registration failed!");
    }
    console.log(data)
  }

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
          <Input className="rounded" id="email" label="Email:" onChange={(e) => { setEmail(e.target.value) }} />
          <Input className="rounded" id="parol" label="Parol:" onChange={(e) => { setPassword(e.target.value) }} />
        </div>
        <div className="flex gap-2 items-center">
          <Button onClick={handleLoginSubmit} className="bg-blue-500 w-fit rounded-md text-white hover:bg-blue-400">
            Kirish
          </Button>
          <p
            className="text-blue-500 hover:text-orange-400 cursor-pointer"
            onClick={() => {
              setPasswordModalOpen(true);
            }}
          >
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
        <Button className="bg-green-primary w-fit rounded-md text-white hover:bg-green-400" onClick={() => setRegisterModalOpen(true)}>
          Ro'yhatdan O'tish
        </Button>
      </div>
      <Modal
        isOpen={isPasswordModalOpen}
        onClose={() => setPasswordModalOpen(false)}
        title="Words.uz"
      >
        <form className="flex flex-col gap-4">
          <p className="text-lg">Parolni tiklash</p>
          <p>
            Parolni tiklash uchun saytda ro'yxatdan o'tishda foydalanilgan{" "}
            <b>email</b> manzilini kiriting. Keyin esa parolni o'zgartirish
            bo'yicha ko'rsatmalar olasiz.
          </p>
          <Input id="email" label="Email" />
          <Button type="submit" className="bg-yellow-500 hover:bg-yellow-400 rounded-md text-black w-fit">
            Tiklash
          </Button>
        </form>
      </Modal>
      <Modal
        isOpen={isRegisterdModalOpen}
        onClose={() => setRegisterModalOpen(false)}
        title="Words.uz"
      >
        <div className="flex flex-col gap-4">
          <p className="text-lg">Ro'yxatdan o'tish</p>
          <p>
            Ro'yxatdan o'tish uchun elektron pochtangizni kiriting. Unga vaqtinchalik parol yuboriladi.
          </p>
          <Input className="rounded" id="email" label="Email:" onChange={(e) => { setEmail(e.target.value) }} />
          <Input className="rounded" id="parol" label="Parol:" onChange={(e) => { setPassword(e.target.value) }} />
          <Button className="bg-yellow-500 hover:bg-yellow-400 rounded-md text-black w-fit"
            onClick={handleRegSubmit}
          >
            Kod yuborish
          </Button>

          {isCodeSent && (
            <>
              <Input id="verification-code" label="Tasdiqlash kodi" onChange={(e) => { setCode(e.target.value) }} />
              <Button onClick={handleCodeSubmit} className="bg-blue-500 hover:bg-blue-400 rounded-md text-white w-fit">
                Yuborish
              </Button>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Login;
