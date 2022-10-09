import { NextPage } from "next";
import Image from "next/image";

const NewsAnnounce: NextPage = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <div
      className="grid grid-flow-col overflow-x-scroll"
      style={{ gridAutoColumns: "21%" }}
    >
      {nums.map((num) => (
        <div key={num}>{num}</div>
      ))}
    </div>
  );
};

export default NewsAnnounce;
