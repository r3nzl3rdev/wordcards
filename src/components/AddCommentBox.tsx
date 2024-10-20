import React from "react";
import Input from "./Input";
import Button from "./Button";

const AddCommentBox: React.FC = () => {
  return (
    <div className="bg-gray-100 p-4 flex flex-col w-full gap-4 rounded-md border border-gray-200 shadow-md shadow-gray-400">
      <p className="text-xl">Sharh qo'shish</p>
      <Input id="username" label="Ism yoki taxallus:" />
      <div>
        <p>Sharh:</p>
        <textarea className="border border-gray-300 w-full min-h-32"></textarea>
      </div>
      <Button className="text-md text-white bg-blue-500 hover:bg-blue-400 w-fit rounded-md">
        Qo'shish
      </Button>
    </div>
  );
};

export default AddCommentBox;
