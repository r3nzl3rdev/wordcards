import React from "react";
import { getLastWord, removeLastWord } from "../utils";

interface Form {
  singular: string;
  plural: string;
}

interface Content {
  title: string;
  forms: Form[];
}

interface Tense {
  tense: string;
  content: Content[];
}

interface TensesTableProps {
  tenseList: Tense[];
}

const TensesTable: React.FC<TensesTableProps> = ({ tenseList }) => {
  return (
    <div className="flex flex-col w-full gap-4">
      {tenseList.map((tense, index) => {
        return (
          <div
            key={index}
            className="grid grid-cols-3 divide-x divide-gray-300 border border-gray-300 text-md"
          >
            {tense.content.map((el, index) => {
              return (
                <div key={index} className="grid grid-cols-1 divide-y">
                  <div className="p-3 bg-green-primary text-black font-bold">
                    {el.title}
                  </div>
                  {el.forms.map((form, index) => {
                    return (
                      <div
                        key={index}
                        className={`grid grid-cols-2 p-2 ${index % 2 == 0 ? "" : "bg-gray-200"}`}
                      >
                        <p>
                          {" "}
                          {removeLastWord(form.singular)}{" "}
                          <span className="font-bold">
                            {getLastWord(form.singular)}
                          </span>
                        </p>
                        <p>
                          {" "}
                          {removeLastWord(form.plural)}{" "}
                          <span className="font-bold">
                            {getLastWord(form.plural)}
                          </span>
                        </p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TensesTable;
