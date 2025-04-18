"use client";
import { StaticImageData } from "next/image";
import { useRef, useState } from "react";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import "./ScrollbarCustom.css";

// import useElapsedTime from "../Components/useElapsedTime";
import { KitchenList } from "@/app/hooks/useKitchenOrders";
import { IconButton, useThemeContext } from "@radix-ui/themes";
import classnames from "classnames";
import { MdFastfood } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
import Order from "./Order";

interface Props {
  data: KitchenList[];
  menuHandler: (status: boolean, tableName: string) => void;
  heading: string;
  icon: StaticImageData;
  borderStyle: string;
}
const Orders = ({ data, menuHandler, heading, icon, borderStyle }: Props) => {
  const sectionRef = useRef<HTMLDivElement>(null); // Reference to measure the full height
  const theme = useThemeContext();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  // const orderTimer = (orderTime: string) => {
  //   if (orderTime) return useElapsedTime(orderTime);
  // };

  return (
    <div className="bg-theme shadow-xl rounded-2xl px-4 mb-4">
      <section className="flex justify-between items-center">
        <h2
          className={classnames({
            "text-[1.563rem] font-medium px-2 pt-2": true,
            "text-[#007AFF]": theme.appearance === "light",
            "text-[#fff]": theme.appearance === "dark",
          })}
        >
          {heading}
        </h2>
        <IconButton
          variant="soft"
          color="gray"
          className="rounded-xl cursor-pointer"
          onClick={toggleExpand}
        >
          {isExpanded ? (
            <RiCloseLine
              className={`text-xl ${
                theme.appearance === "light" ? "text-[#007AFF]" : "text-[#fff]"
              }`}
            />
          ) : (
            // Close icon
            <PiDotsThreeOutlineFill
              className={`text-xl ${
                theme.appearance === "light" ? "text-[#007AFF]" : "text-[#fff]"
              }`}
            />
          )}
        </IconButton>
      </section>
      <section
        ref={sectionRef}
        className="flex flex-wrap justify-normal gap-4 pt-4 pb-6 mb-2 overflow-hidden transition-all duration-300 ease-in-out overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 custom-scrollbar"
        style={{
          height: isExpanded
            ? sectionRef.current?.scrollHeight + "px"
            : data.length === 0
            ? "5rem"
            : "9rem", // Collapsed height (10rem = h-40)
        }}
      >
        {data.length > 0 ? (
          data?.map((order, i) => (
            <Order
              key={i}
              menuHandler={menuHandler}
              order={order}
              icon={icon}
              borderStyle={borderStyle}
            />
          ))
        ) : (
          <div className="w-full my-auto flex justify-center items-center gap-3">
            <MdFastfood />
            No Orders Available
          </div>
        )}
      </section>
    </div>
  );
};

export default Orders;
