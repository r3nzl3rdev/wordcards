import React, { useCallback, useMemo, useState } from "react";
import CommentList from "../../components/CommentList";
import AddCommentBox from "../../components/AddCommentBox";
import { API_URL, comments } from "../../hardcode/hardcode";
import Button from "../../components/Button";

const BulkTranslation: React.FC = () => {
  const [direction, setDirection] = useState<"eng-uzb" | "uzb-eng">("eng-uzb");
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { from, to } = useMemo(() => {
    if (direction === "eng-uzb") return { from: "en", to: "uz" } as const;
    return { from: "uz", to: "en" } as const;
  }, [direction]);

  const translateOne = useCallback(async (text: string): Promise<string> => {
    try {
      const res = await fetch(`${API_URL}/translators`, {
        method: "POST",
        headers: { "Content-Type": "application/json", accept: "application/json" },
        body: JSON.stringify({ text, from, to }),
      });
      if (!res.ok) {
        const t = await res.text().catch(() => "");
        throw new Error(t || `HTTP ${res.status}`);
      }
      const data = (await res.json()) as { data?: string; message?: string };
      return (data?.data ?? "").toString();
    } catch {
      return `⛔️`;
    }
  }, [from, to]);

  const handleTranslate = useCallback(async () => {
    setError(null);
    setLoading(true);
    setTranslatedText("");
    try {
      const lines = sourceText.split(/\r?\n/);
      const results: string[] = [];
      for (const line of lines) {
        if (!line.trim()) {
          results.push("");
          continue;
        }
        const translated = await translateOne(line.trim());
        results.push(translated);
      }
      setTranslatedText(results.join("\n"));
    } catch (e) {
      const message = e instanceof Error ? e.message : "Noma'lum xatolik yuz berdi";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [sourceText, translateOne]);

  return (
    <div className="flex w-full lg:justify-center">
      <div className="flex flex-col gap-4 items-start self-center w-full overflow-auto no-scrollbar pb-2 lg:p-2 max-w-[1100px]">
        <div className="flex flex-col gap-4 items-left w-full sticky left-0">
          <h1 className="text-2xl md:text-4xl font-bold">
            Ro'yxat bo'yicha so'zlarni tarjima qilish
          </h1>
          <p>
            Tugmani bitta bosish bilan bir nechta so'zlarni tarjima qiling! Har
            bir so'z alohida qatorda bo'lishi kerak.
          </p>
          <p>
            Tarjima yo'nalishini ham tanlashingiz mumkin: ingliz tilidan rus
            tiliga yoki aksincha.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <select
            id="languageSelect"
            className="px-4 py-3 border bg-gray-100 border-gray-300 rounded-md"
            value={direction}
            onChange={(e) => setDirection(e.target.value as "eng-uzb" | "uzb-eng")}
            disabled={loading}
          >
            <option value="eng-uzb">Eng - Uzb</option>
            <option value="uzb-eng">Uzb - Eng</option>
          </select>
          {loading && <span className="text-sm text-gray-500">Yuklanmoqda...</span>}
        </div>
        {error && (
          <div className="text-red-600 text-sm bg-red-50 border border-red-200 px-3 py-2 rounded">
            {error}
          </div>
        )}
        <div className="flex flex-wrap gap-4 h-56 w-full">
          <div className="flex flex-1 flex-col">
            <p>So'zlar ro'yhati </p>
            <textarea
              className="border border-gray-300 rounded-md h-full p-2"
              placeholder={"each word on a new line"}
              value={sourceText}
              onChange={(e) => setSourceText(e.target.value)}
              disabled={loading}
            ></textarea>
          </div>
          <div className="flex flex-1 flex-col">
            <p>Tarjima</p>
            <textarea
              className="border border-gray-300 rounded-md h-full p-2 bg-gray-50"
              value={translatedText}
              readOnly
            ></textarea>
          </div>
        </div>{" "}
        <Button
          onClick={handleTranslate}
          disabled={loading || !sourceText.trim()}
          className="text-md text-white bg-green-500 disabled:opacity-60 disabled:cursor-not-allowed active:bg-green-300 lg:hover:bg-green-400 w-fit rounded-md"
        >
          {loading ? "Tarjima qilinmoqda..." : "Tarjima qilish"}
        </Button>
        <div className="mt-6 lg:mt-12 w-[98%] lg:w-full sticky left-1 flex flex-col justify-center self-center gap-4 max-w-[937px]">
          <p className="text-xl md:text-2xl font-bold">Sharhlar</p>
          <p>
            Bu yerda siz tarjima qilingan so'zlar ro'yxati bo'yicha
            fikr-mulohazalaringizni qoldirishingiz mumkin.
          </p>
          <CommentList commentList={comments} />
          <AddCommentBox />
        </div>
      </div>
    </div>
  );
};

export default BulkTranslation;
