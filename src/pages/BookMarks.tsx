import React, { useEffect, useState } from 'react'
import ErrorPage from './ErrorPage';
import ProtectedRoute from '../components/ProtectedRoute';

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
        const response = await fetch(`https://chatlink.uz/api/bookmarks`);
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
  }, []);

  return (
    <ProtectedRoute>
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
              <div
                className="grid grid-cols-1 md:grid-cols-5 divide-x divide-gray-300 border border-gray-300 text-md"
              >
                {bookmarkList?.map((el, index) => {
                  return (
                    <div
                      key={index}
                      className={`grid grid-cols-5 p-2 ${index % 2 === 0 ? "" : "bg-gray-200"}`}
                    >
                      <p>
                        {" "}
                        {(form.singular)}{" "}
                        <span className="font-bold">
                          {(form.singular)}
                        </span>
                      </p>
                      <p>
                        {" "}
                        {(form.plural)}{" "}
                        <span className="font-bold">
                          {(form.plural)}
                        </span>
                      </p>
                      <p>
                        {" "}
                        {(form.someOtherSingular)}{" "}
                        <span className="font-bold">
                          {(form.someOtherSingular)}
                        </span>
                      </p>
                      <p>
                        {" "}
                        {(form.someOtherPlural)}{" "}
                        <span className="font-bold">
                          {(form.someOtherPlural)}
                        </span>
                      </p>
                      <p>
                        {" "}
                        {(form.anotherSingular)}{" "}
                        <span className="font-bold">
                          {(form.anotherSingular)}
                        </span>
                      </p>
                    </div>
                  );
                })}
              </div>
            }
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}

export default BookMarks;
