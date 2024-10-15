import React from "react";
import { useParams } from "react-router-dom";

const WordDetail: React.FC = () => {
  const { word } = useParams<{ word: string }>();
  return <div>WordDetail: {word}</div>;
};

export default WordDetail;
