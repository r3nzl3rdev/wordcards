import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import ProtectedRoute from '../components/ProtectedRoute'

interface Game {
  id: string;
  title: string;
  description: string;
}

const Exercises: React.FC = () => {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const token = localStorage.getItem("accessToken")
        const url = "https://api.words.uz/api/games"

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
        const json = await res.json()
        console.log("📥 Parsed Response:", json)

        setGames(json.data)
      } catch (err) {
        console.error("❌ Failed to fetch games:", err)
      }
    }

    fetchGames()
  }, [])

  return (
    <ProtectedRoute>
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
            <div className="flex flex-wrap items-center flex-col md:flex-row p-2 gap-8 pb-6 max-w-[900px]">
              {games.map((game) => (
                <Card
                  key={game.id}
                  gameId={game.id}
                  title={game.title}
                  description={game.description}
                  buttonTitle="Ko‘rish"
                  buttonColor="blue"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}

export default Exercises
