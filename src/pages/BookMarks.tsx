import React, { useEffect, useState } from 'react'
import ProtectedRoute from '../components/ProtectedRoute';
import { bookmarks as fallbackBookmarks } from '../hardcode/hardcode';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';

type BookMark = {
  word: string;
  translation: string;
  part_of_speech: string;
  level: number;
  status: string;
}

const BookMarks: React.FC = () => {
  const navigate = useNavigate()
  const [bookmarkList, setBookmarkList] = useState<BookMark[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        setLoading(true);

        let accessToken = localStorage.getItem("accessToken");
        const refreshToken = localStorage.getItem("refreshToken");

        let response = await fetch(`https://api.words.uz/api/bookmarks`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        // If token expired, refresh it
        if (response.status === 401 && refreshToken) {
          console.warn("Access token expired, attempting refresh...");

          const refreshRes = await fetch(`https://api.words.uz/api/auth/refresh`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ refreshToken }),
          });

          if (!refreshRes.ok) {
            throw new Error("Unable to refresh access token");
          }

          const refreshData = await refreshRes.json();
          accessToken = refreshData.accessToken;
          localStorage.setItem("accessToken", accessToken);

          // Retry request
          response = await fetch(`https://api.words.uz/api/bookmarks`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
        }

        if (!response.ok) {
          throw new Error("Failed to fetch bookmarks");
        }

        const data = await response.json();
        console.log("Fetched bookmarks:", data);
        setBookmarkList(data);
      } catch (err) {
        console.error("Error fetching bookmarks:", err);
        setBookmarkList(fallbackBookmarks); // fallback
      } finally {
        setLoading(false);
      }
    };

    fetchBookmarks();
  }, []);

  return (
    <ProtectedRoute>
      <div className="flex justify-center">
        <div className="flex flex-col gap-4 max-w-[945px] overflow-auto no-scrollbar items-start">
          <h1 className="text-2xl md:text-4xl font-bold">Xatcho‘plar</h1>
          <p>
            Bu yerda siz o'zingiz belgilagan barcha so'zlarni, shuningdek ularni o'rganish jarayonini ko'rishingiz mumkin.
            Daraja so'zni o'rganish jarayonini ko'rsatadi. O'z darajangizni oshirish uchun mashqlarni bajaring.
          </p>

          <div className="flex flex-col sm:w-full min-w-[700px] overflow-auto items-start gap-4">
            {loading ? (
              <p>Loading...</p>
            ) : bookmarkList.length === 0 ? (
              <p>No bookmarks found.</p>
            ) : (
              <div className="grid grid-cols-5 w-full items-start text-md rounded-md overflow-auto">
                <div className="p-2 font-bold bg-green-primary text-white rounded-tl">Word</div>
                <div className="p-2 font-bold bg-green-primary text-white">Translation</div>
                <div className="p-2 font-bold bg-green-primary text-white">Part of Speech</div>
                <div className="p-2 font-bold bg-green-primary text-white">Level</div>
                <div className="p-2 font-bold bg-green-primary text-white rounded-tr-md">Status</div>

                {bookmarkList.map((el, index) => (
                  <React.Fragment key={`${el.word}-${index}`}>
                    <div className={`p-2 border-b border-l ${index % 2 === 0 ? "bg-white" : "bg-gray-200"} ${index === bookmarkList.length - 1 ? "rounded-b-md" : ""}`}>
                      <Link to={`/en/${el.word}`} className="text-blue-500 hover:text-orange-400">
                        <p>{el.word}</p>
                      </Link>
                    </div>
                    <div className={`p-2 border-b ${index % 2 === 0 ? "bg-white" : "bg-gray-200"}`}>
                      <p>{el.translation}</p>
                    </div>
                    <div className={`p-2 border-b ${index % 2 === 0 ? "bg-white" : "bg-gray-200"}`}>
                      <p>{el.part_of_speech}</p>
                    </div>
                    <div className={`p-2 border-b ${index % 2 === 0 ? "bg-white" : "bg-gray-200"}`}>
                      <p>{el.level}</p>
                    </div>
                    <div className={`p-2 border-b border-r ${index % 2 === 0 ? "bg-white" : "bg-gray-200"} ${index === bookmarkList.length - 1 ? "rounded-b-md" : ""}`}>
                      <p>{el.status}</p>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>

          <Button onClick={() => navigate("/exercises")} className="bg-blue-500 w-fit rounded-md text-white hover:bg-blue-400">
            <i className="fa-solid fa-share mr-2"></i>
            Mashqlarga o'tish
          </Button>

          <p>Jami so'zlar soni: <b>{bookmarkList.length}</b>.</p>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default BookMarks;
