import React from "react"
import Button from "./Button"
import { Link, useNavigate } from "react-router-dom";

type ButtonColor = 'blue' | 'green'

export interface CardProps {
  title: string;
  description: string;
  buttonTitle: string;
  wordCount: string;
  buttonColor: ButtonColor;
  link: string;
}

const buttonStyle = {
  "blue": "bg-blue-400",
  "green": "bg-green-primary"
}

const Card: React.FC<CardProps> = ({ title, description, buttonTitle, wordCount, buttonColor, link }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col shadow-gray-500 shadow-lg max-w-[320px]" >
      <p className="text-2xl font-bold w-full px-4 py-3 bg-gray-200">{title}</p>
      <p className="p-4">
        {description}
      </p>
      <div className="w-[90%] self-center h-1 border-gray-200 border-b" />
      <p className="p-4">
        Jami so'zlar: <b>{wordCount}</b>
      </p>
      <Button onClick={() => navigate(link)} className={`${buttonStyle[buttonColor]} text-white hover:bg-gray-400 hover:text-black`}>
        <p className="w-full items-center">
          {buttonTitle}
        </p>
      </Button>
    </div >
  )
}

export default Card
