import React, { useEffect, useState } from 'react'
// import ErrorPage from './ErrorPage';
import ProtectedRoute from '../components/ProtectedRoute';
import { bookmarks } from '../hardcode/hardcode';
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
  const [bookmarkList, setBookmarkList] = useState<BookMark[]>();
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.words.uz/api/bookmarks`);
        if (!response.ok) {
          throw new Error("Failed to fetch word details");
        }
        const data = await response.json();
        console.log("First Fetch:", data);
        setBookmarkList(data)
      } catch (err: any) {
        // setError(err.message);
      } finally {
        setLoading(false);
        setBookmarkList(bookmarks)
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
            {
              loading && <p>Loading...</p>
              ||
              // error && <ErrorPage />
              // ||
              !bookmarkList && <p>No data found.</p>
              ||
              bookmarkList &&
              <div className="grid grid-cols-5 w-full items-start text-md rounded-md overflow-auto">
                <div className="p-2 font-bold bg-green-primary text-white rounded-tl">Word</div>
                <div className="p-2 font-bold bg-green-primary  text-white">Translation</div>
                <div className="p-2 font-bold bg-green-primary text-white">Part of Speech</div>
                <div className="p-2 font-bold bg-green-primary text-white">Level</div>
                <div className="p-2 font-bold bg-green-primary text-white rounded-tr-md">Status</div>

                {bookmarks?.map((el, index) => (
                  <>
                    <div className={`p-2 border-b border-l ${index % 2 === 0 ? "bg-white" : "bg-gray-200"}
                      ${index == bookmarkList.length - 1 ? "rounded-b-md " : ""}`}>
                      <Link
                        to={`/en/${el.word}`}
                        className="text-blue-500 hover:text-orange-400">
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
                    <div className={`p-2 border-b border-r ${index % 2 === 0 ? "bg-white" : "bg-gray-200"} 
                      ${index == bookmarkList.length - 1 ? "rounded-b-md " : ""}`}>
                      <p>{el.status}</p>
                    </div>
                  </>
                ))}
              </div>
            }
          </div>
          <Button onClick={()=>navigate("/exercises")} className='bg-blue-500 w-fit rounded-md text-white hover:bg-blue-400'>
            <i className="fa-solid fa-share mr-2"></i>
            Mashqlarga o'tish
          </Button>
          <p>
            Jami so'zlar soni: <b>{bookmarkList?.length}</b>.
          </p>
        </div>
      </div>
    </ProtectedRoute>
  )
}

export default BookMarks;
