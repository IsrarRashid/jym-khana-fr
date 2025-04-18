"use client";
import React, { useRef, useState } from "react";
// import { MdOutlineTableBar } from "react-icons/md";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import "./ScrollbarCustom.css";

import tablePic from "../../public/images/tablePic.png";
import Image from "next/image";
interface RuningOrderProps {
  menuHandler: (staus: boolean) => void;
}
const RunningOrder: React.FC<RuningOrderProps> = ({ menuHandler }) => {
  const sectionRef = useRef<HTMLDivElement>(null); // Reference to measure the full height
  // Sample data for tables
  const tables = [
    { id: 1, name: "Table 21", orderNumber: "8468" },
    { id: 2, name: "Table 22", orderNumber: "7354" },
    { id: 3, name: "Table 23", orderNumber: "4567" },
    { id: 4, name: "Table 24", orderNumber: "4567" },
    { id: 5, name: "Table 25", orderNumber: "4567" },
    { id: 6, name: "Table 26", orderNumber: "4567" },
    { id: 7, name: "Table 27", orderNumber: "4567" },
    { id: 8, name: "Table 28", orderNumber: "4567" },
    { id: 9, name: "Table 29", orderNumber: "4567" },
    { id: 10, name: "Table 30", orderNumber: "4567" },
    { id: 11, name: "Table 31", orderNumber: "4567" },
    { id: 12, name: "Table 32", orderNumber: "4567" },
    { id: 13, name: "Table 33", orderNumber: "4567" },
    { id: 14, name: "Table 34", orderNumber: "4567" },
    { id: 14, name: "Table 34", orderNumber: "4567" },
    { id: 14, name: "Table 34", orderNumber: "4567" },
    { id: 14, name: "Table 34", orderNumber: "4567" },
    { id: 14, name: "Table 34", orderNumber: "4567" },
    { id: 14, name: "Table 34", orderNumber: "4567" },
    { id: 14, name: "Table 34", orderNumber: "4567" },
    // Add more tables as needed
  ];
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    // alert("Expand");
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl px-4 ">
      <section className="flex justify-between">
        <h2 className="text-2xl font-bold px-2 text-[#2B3674]">
          Running Order
        </h2>
        <div
          className="bg-[#F4F7FE] px-3 py-2 rounded-xl mt-2 cursor-pointer"
          onClick={toggleExpand}
        >
          {isExpanded ? (
            <span className="text-xl">✖</span> // Close icon
          ) : (
            <PiDotsThreeOutlineFill className="text-xl text-[#2b3674]" />
          )}
        </div>
      </section>
      <section
        ref={sectionRef}
        className="flex flex-wrap justify-normal gap-4 my-2 overflow-hidden transition-all duration-300 ease-in-out overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 custom-scrollbar"
        style={{
          height: isExpanded
            ? sectionRef.current?.scrollHeight + "px"
            : "10rem", // Collapsed height (10rem = h-40)
        }}
      >
        {tables.map((table) => (
          <div
            onClick={() => menuHandler(true)}
            key={table.id}
            className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] xl:w-[12%] flex flex-col items-center bg-white rounded-xl shadow-sm border border-[#F1F1F1] py-1 px-6"
          >
            <h3 className="font-semibold text-lg text-center text-[#3C3C3C]">
              {table.name}
            </h3>
            {/* <MdOutlineTableBar className="text-5xl text-center my-1" /> */}
            <Image src={tablePic} alt="disPic" className="w-10 h-10" />
            <h3 className="font-semibold text-base text-[#3C3C3C] text-center">
              {table.orderNumber}
            </h3>
          </div>
        ))}
      </section>
    </div>
  );
};

export default RunningOrder;
