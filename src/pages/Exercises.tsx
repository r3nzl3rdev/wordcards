import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { cards } from '../hardcode/hardcode'

const Exercises: React.FC = () => {
  return (
    <div className="flex w-full lg:justify-center">
      <div className="flex flex-col gap-4 items-start self-center w-fit overflow-auto no-scrollbar pb-2 lg:p-2">
        <div className="flex flex-col gap-4 items-left w-full sticky left-1 max-w-[973px]">
          <h1 className="text-2xl md:text-4xl font-bold">Mashqlar</h1>
          <p>
            Ushbu bo'limda siz{" "}
            <Link to={"/bookmarks"}>
              <span className="text-blue-primary hover:text-orange-500 hover:cursor-pointer">
                xatcho'plar
              </span>
            </Link>ga
            qo'shilgan so'zlarni o'rganadigan mashqlar turini tanlashingiz mumkin.
          </p>
          <p>
            Agar siz hali xatcho'plaringizga so'z qo'shmagan bo'lsangiz, avvalo <b>Ekspress testdan</b> o'tishingizni tavsiya qilamiz.
          </p>
          <div className="flex flex-wrap items-center flex-col md:flex-row p-2 gap-8 pb-6 max-w-[900px]">
            {cards.map((el, index) => (
              <Card
                key={index}
                title={el.title}
                description={el.description}
                buttonTitle={el.buttonTitle}
                buttonColor={el.buttonColor}
                wordCount={el.wordCount}
                link={el.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Exercises
