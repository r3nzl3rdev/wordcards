import React from "react";

interface Comment {
  date: string;
  time: string;
  user: string;
  text: string;
}

interface CommentListProps {
  commentList: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ commentList }) => {
  return (
    <div className="flex flex-col gap-6 w-full">
      {commentList.map((comment, index) => {
        return (
          <div
            key={index}
            className="flex flex-col w-full shadow-md shadow-gray-400 rounded-md"
          >
            <div className="flex gap-2 px-4 py-1 bg-gray-200 border-1 border-gray-300 rounded-t-md">
              <p>{comment.date}</p>
              <p>{comment.time}</p>
              <p className="font-bold">{comment.user}</p>
            </div>
            <p className="p-4">{comment.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
