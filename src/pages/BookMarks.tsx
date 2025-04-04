import React, { useEffect, useState } from 'react'
import ErrorPage from './ErrorPage';

type BookMark = {
  word: string;
  translation: string;
  partOfSpeech: string;
  level: number;
  status: string;
}

const BookMarks: React.FC = () => {

  const [bookmarkList, setBookmarkList] = useState<BookMark[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://chatlink.uz/api/words/bookmarks`);
        if (!response.ok) {
          throw new Error("Failed to fetch word details");
        }
        const data = await response.json();
        console.log("First Fetch:", data);
        setBookmarkList(data)
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookmarks();
  }, [bookmarkList]);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 max-w-[945px]">
        <h1 className="text-2xl md:text-4xl font-bold">Xatcho‘plar</h1>
        <p>
          Bu yerda siz o'zingiz belgilagan barcha so'zlarni, shuningdek ularni o'rganish jarayonini ko'rishingiz mumkin.
          Daraja so'zni o'rganish jarayonini ko'rsatadi. O'z darajangizni oshirish uchun mashqlarni bajaring.
        </p>

        <div className="flex flex-col w-full gap-4">
          {
            loading && <p>Loading...</p>
            ||
            error && <ErrorPage />
            ||
            !bookmarkList && <p>No data found.</p>
            ||
            bookmarkList &&
            <div className='grid grid-cols-1 md:grid-cols-5 divide-x divide-gray-300 border border-gray-300 text-md'>
            <div className=''>

            </div>
              {
                bookmarkList?.map((bookmark, index) => {
                  return (
                    <div
                      key={index}
                      className="grid grid-cols-1 md:grid-cols-3 divide-x divide-gray-300 border border-gray-300 text-md"
                    >

                    </div>
                  );
                })
              }
            </div>


          }
        </div>
      </div>
    </div>
  )
}

export default BookMarks;
