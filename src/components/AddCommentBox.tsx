import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

interface AddCommentBoxProps {
  onSubmit?: (username: string, text: string) => void;
}

const AddCommentBox: React.FC<AddCommentBoxProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!username.trim() || !text.trim()) return;
    onSubmit?.(username, text);
    setUsername("");
    setText("");
  };

  return (
    <div className="bg-gray-100 p-4 flex flex-col w-full gap-4 rounded-md border border-gray-200 shadow-md shadow-gray-400">
      <p className="text-xl">Sharh qo'shish</p>

      <Input
        id="username"
        label="Ism yoki taxallus:"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <div>
        <p>Sharh:</p>
        <textarea
          className="border border-gray-300 w-full min-h-32"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <Button
        className="text-md text-white bg-blue-500 hover:bg-blue-400 w-fit rounded-md"
        onClick={handleSubmit}
      >
        Qo'shish
      </Button>
    </div>
  );
};

export default AddCommentBox;
