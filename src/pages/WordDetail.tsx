import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TensesTable from "../components/TensesTable";
import Button from "../components/Button";
import AddCommentBox from "../components/AddCommentBox";
import Modal from "../components/Modal";
import Input from "../components/Input";

const WordDetail: React.FC = () => {
  const { word } = useParams<{ word: string }>();
  const [wordDetails, setWordDetails] = useState<any>(null);
  const [tenseList, setTenseList] = useState<any>(null);
  const [isSaveWordModalOpen, setSaveWordModalOpen] = useState(false);
  const [isAddWordModalOpen, setAddWordModalOpen] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWordDetails = async () => {
      try {
        const response = await fetch(`https://chatlink.uz/api/words/${word}`);
        if (!response.ok) {
          throw new Error("Failed to fetch word details");
        }
        const data = await response.json();
        setWordDetails(data);
        setTenseList(data?.verbForms)
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWordDetails();
  }, [word]);
 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!wordDetails) return <p>No data found.</p>;

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">{word}</h1>
      <div className="flex flex-wrap w-full gap-6">
        <div className="flex flex-col lg:flex-1 gap-4 items-start">
          <p className="w-full bg-yellow-100 p-4 shadow-lg shadow-gray-400">
            Endi bizning veb-saytimizda
            <Link to="/login">
              <span className="text-blue-primary hover:text-orange-500 hover:cursor-pointer">
                &nbsp;shaxsiy hisob&nbsp;
              </span>
            </Link>
            ochish imkoniyati bor!
            <Link to="/interval-repetition">
              <span className=" inline text-blue-primary hover:text-orange-500 hover:cursor-pointer">
                &nbsp;Intervalli takrorlash&nbsp;
              </span>
            </Link>
            usuli yordamida so'zlarni yodlang!
          </p>
          <Button
            className="py-2 px-4 bg-blue-primary hover:bg-blue-400 rounded-md text-white"
            onClick={() => setSaveWordModalOpen(true)}
          >
            <i className="fa-solid fa-bookmark mr-1"></i>
            Saqlanganlarga qo'shish
          </Button>
          <div className="flex gap-2 items-center">
            <p className="text-2xl font-bold text-green-primary">
              [{wordDetails?.transcription}]
            </p>
            <button className="py-2 px-3 border bg-gray-100 border-gray-300 rounded-md hover:bg-gray-300 hover:border-gray-400">
              <i className="fa-solid fa-volume-high"></i>
            </button>
          </div>
          {wordDetails?.definitions.map((def: { typeEn: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; typeUz: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; plural: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; synonymList: any[]; others: any[]; }, index: React.Key | null | undefined) => {
            return (
              <div key={index}>
                <p className="flex gap-2 text-lg">
                  <span className="font-bold">{def.typeEn}</span>
                  <span>{def.typeUz}</span>
                </p>
                <p className="flex text-gray-500">
                  <span className="italic">Ko'plik shakli</span>
                  &nbsp;(plural):&nbsp;
                  <span className="text-blue-primary">{def.plural}</span>.
                </p>
                <p className="flex flex-wrap">
                  <span className="italic text-black">Sinonimlari:&nbsp;</span>
                  {def.synonymList?.map((synonym, index) => {
                    return (
                      <Link key={index} to={`/en/${synonym}`}>
                        <span className="text-blue-primary hover:text-orange-500 text-md">
                          {synonym}
                        </span>
                        {index == def.synonymList.length - 1 ? "." : ","}
                        &nbsp;
                      </Link>
                    );
                  })}
                </p>
                <div className="flex flex-col gap-4 px-2">
                  {def.others.map((d, index) => {
                    return (
                      <div key={index} className="flex flex-col gap-4">
                        <p>
                          {index + 1 + ". "}
                          <span className="font-bold">{d.meaning}</span>
                        </p>
                        {d.examples?.map((e: { phrase: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; translation: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => {
                          return (
                            <div key={index} className="flex flex-col px-4">
                              <p>{e.phrase}</p>
                              <p className="italic text-gray-500">
                                {e.translation}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col md:flex-1 gap-4 items-start">
          <p className="text-2xl font-bold">Anagrammalar</p>
          <p>
            <span className="font-bold">{word}</span> bilan bir xil harflarni
            o'z ichiga olgan so'zlar:
            {wordDetails?.anagrams.map((el: string, index: React.Key | null | undefined) => {
              return (
                <span key={index}>
                  <span className="text-blue-primary hover:cursor-pointer hover:text-orange-500">
                    {" " + el}
                  </span>
                  {index == wordDetails?.anagrams.length - 1 ? "." : ", "}
                </span>
              );
            })}
          </p>
          <p className="text-2xl font-bold">Foydalanish chastotasi</p>
          <p>
            1 million so'zga {word} so'zidan foydalanish soni:{" "}
            <span className="font-bold">{wordDetails?.usageFrequency}</span> ta.
          </p>
          <p className="text-2xl font-bold">Namunaviy jumlalar</p>
          {wordDetails?.exampleSentences?.map((s: { sentence: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; translation: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => {
            return (
              <div key={index} className="flex flex-col">
                <p>{s.sentence}</p>
                <p className="italic text-gray-500">{s.translation}</p>
              </div>
            );
          })}
          <Button
            className="bg-green-500 hover:bg-green-400 rounded-md text-white"
            onClick={() => {
              setAddWordModalOpen(true);
            }}
          >
            Namuna qo'shish
          </Button>
        </div>
      </div>

      <TensesTable tenseList={tenseList} />

      <div className="mt-6 lg:mt-12 flex flex-col items-left self-center text-left gap-4">
        <h1 className="font-bold text-2xl text-left">Sharhlar</h1>
        <p>
          Bu yerda <span className="font-bold">{word}</span> so'ziga tegishli
          sharh qoldirshingiz mumkin. Sharh faqat o'zbek yoki ingliz tillarida
          bo'lishi kerak.
        </p>
        <AddCommentBox />
      </div>

      <Modal
        isOpen={isSaveWordModalOpen}
        onClose={() => setSaveWordModalOpen(false)}
        title="Words.uz"
      >
        <div className="flex flex-col gap-4">
          <p className="text-lg">Sandiqqa so'z qo'shish </p>
          <p className="">
            <b>{word}</b> so'zi qo'shilgandan so'ng, uni{" "}
            <Link to="/interval-repetition">
              <span className=" inline text-blue-primary hover:text-orange-500 hover:cursor-pointer">
                &nbsp;Intervalli takrorlash&nbsp;
              </span>
            </Link>
            usuli yordamida o'rganishni boshlashingiz mumkin.
          </p>
          <p>
            Qo'shish jarayonida so'zning turkumini tanlash imkoniyati ham
            mavjud.
          </p>
          <p>
            Barcha qo'shilgan so'zlarni o'z shaxsiy hisobingizda ko'rsa bo'ladi.
          </p>
          <div className="flex flex-col gap-1">
            <p>So'z turkumi</p>
            <select
              id="languageSelect"
              className="px-2 lg:px-4 py-3 border bg-gray-100 border-gray-300 rounded-md"
            >
              <option value="noun">Ot</option>
              <option value="adjective">Sifat</option>
              <option value="verb">Fe'l</option>
            </select>
          </div>
          <Button className="bg-green-500 hover:bg-green-400 rounded-md text-white w-fit">
            Qo'shish
          </Button>
        </div>
      </Modal>
      <Modal
        isOpen={isAddWordModalOpen}
        onClose={() => setAddWordModalOpen(false)}
        title="Words.uz"
      >
        <div className="flex flex-col gap-4">
          <p className="text-lg">Namunaviy jumla qo'shish </p>
          <p>
            <b>{word}</b> so'ziga jumla qo'shing va u adminlar tekshiruvdan
            o'tgandan so'ng saytda nashr etiladi.
          </p>
          <Input id="example_en" label="Ingliz tilidagi namuna" />
          <Input id="example_uz" label="O'zbek tilidagi tarjima" />
          <Button className="bg-green-500 hover:bg-green-400 rounded-md text-white w-fit">
            Qo'shish
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default WordDetail;
