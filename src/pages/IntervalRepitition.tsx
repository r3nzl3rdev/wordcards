import React from "react";

const IntervalRepitition: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[936px] m-auto">
      <h1 className="text-4xl font-bold">Intervalli takrorlash usuli</h1>
      <p>
        Intervalli takrorlash (inglizcha:{" "}
        <span className="font-bold">spaced repetition</span>) samarali yod
        olishning ilmiy isbotlangan usuli bo'lib, yodlangan o'quv materialini
        doimiy o'sib boruvchi vaqt oralig'ida takrorlashni bildiradi.
      </p>
      <p>
        Leitner tizimi (inglizcha:{" "}
        <span className="font-bold">Leitner system</span>) 20-asrning
        70-yillarida nemis olimi va jurnalisti Sebastyan Leytner tomonidan
        taklif qilingan kartochkalar yordamida so'zlarni samarali yodlash va
        takrorlash uchun keng qo'llaniladigan usuldir.
      </p>
      <p>
        Ushbu tizim <span className="font-bold">intervalli takrorlash </span>
        metodining oddiy qo'llanilishi bo'lib, bu yerda kartalar o'sib borish
        tartibida takrorlanadi:
      </p>
      <img
        className="w-[500px]"
        src="/leitner-system.png"
        alt="leitner system"
      />
      <p>
        Bu usulda, har bir so'z biriktirilgan kartochka, o'quvchi undagi
        ma'lumotlarni qay darajada o'zlashtirganligiga qarab guruhlarga
        ajratiladi. Chet tilini o'rganishda talaba so'zning ma'nosini eslab
        qolishga harakat qiladi. Agar u eslab qolsa, karta keyingi guruhga
        o'tkaziladi. Lekin eslab qola olmasa, karta birinchi guruhga
        qaytariladi. Har bir keyingi guruh jarayon davomida takrorlanaveradi.
      </p>
      <p>
        Bizning veb-saytimiz ushbu usulni oddiy avtomatlashtirishgan versiyasini
        taklif etadi. Foydalanish uchun esa tizimga kirishingiz yoki ro'yxatdan
        o'tishingiz kifoya. Keyin sandig'ingizga kerakli so'zlarni qo'shib,
        bemalol Leitner tizimi yordamida ularni yodlashni boshlashingiz mumkin
        bo'ladi! Yangi takrorlash vaqti kelganida saytimizning o'zi sizga
        eslatib turadi.
      </p>
    </div>
  );
};

export default IntervalRepitition;
