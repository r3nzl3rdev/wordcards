import React from "react"
import Button from "./Button"

type ButtonColor = 'blue' | 'green'

interface CardProps {
  gameId: string;
  title: string;
  description: string;
  buttonTitle: string;
  buttonColor: ButtonColor;
}

const buttonStyle = {
  "blue": "bg-blue-400",
  "green": "bg-green-primary"
}

const Card: React.FC<CardProps> = ({ gameId, title, description, buttonTitle, buttonColor }) => {
  const handleClick = async () => {
    try {
      const token = localStorage.getItem("accessToken")
      const url = `https://api.words.uz/api/games/${gameId}`

      console.log("📤 Request:", {
        url,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })

      const res = await fetch(url, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }
      const gameDetails = await res.json()
      console.log("📥 Parsed Response:", gameDetails)
    } catch (err) {
      console.error("❌ Failed to fetch game details:", err)
    }
  }

  return (
    <div className="flex flex-col shadow-gray-500 shadow-lg max-w-[320px]" >
      <p className="text-2xl font-bold w-full px-4 py-3 bg-gray-200">{title}</p>
      <p className="p-4">{description}</p>
      <Button
        onClick={handleClick}
        className={`${buttonStyle[buttonColor]} text-white hover:bg-gray-400 hover:text-black`}
      >
        <p className="w-full items-center">{buttonTitle}</p>
      </Button>
    </div>
  )
}

export default Card

