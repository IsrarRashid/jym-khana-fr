"use client";

import { KitchenList } from "@/app/hooks/useKitchenOrders";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import classnames from "classnames";
import { useThemeContext } from "@radix-ui/themes";

interface Props {
  menuHandler: (status: boolean, tableName: string) => void;
  order: KitchenList;
  icon: StaticImageData;
  borderStyle: string;
}

const Order = ({ menuHandler, order, icon, borderStyle }: Props) => {
  const [elapsedTime, setElapsedTime] = useState<string>("");
  const theme = useThemeContext();

  useEffect(() => {
    const calculateElapsedTime = () => {
      const orderDate = new Date(order.orderTime);
      const now = new Date();
      const difference = now.getTime() - orderDate.getTime();

      // Calculate hours, minutes, and seconds
      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setElapsedTime(`${hours}h ${minutes}m ${seconds}s`);
    };

    // Calculate elapsed time every second
    calculateElapsedTime();
    const interval = setInterval(calculateElapsedTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [order.orderTime]); // Add order.orderTime to dependency array

  return (
    <button
      onClick={() => menuHandler(true, order.tableName)}
      className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] xl:w-[12%] flex flex-col items-center bg-theme rounded-xl shadow-sm border py-1 px-6 "
      style={{ border: borderStyle }}
    >
      <h3
        className={classnames({
          "font-semibold text-lg text-center text-[#3C3C3C] whitespace-nowrap mb-2":
            true,
          "text-[#3C3C3C]": theme.appearance === "light",
          "text-[#fff]": theme.appearance === "dark",
        })}
      >
        {order.tableName}
      </h3>
      <div className="w-10 h-10 mb-2">
        <Image src={icon} alt="icon" className="w-full h-full" />
      </div>
      <h3
        className={classnames({
          "font-semibold text-base text-[#3C3C3C] text-center whitespace-nowrap":
            true,
          "text-[#3C3C3C]": theme.appearance === "light",
          "text-[#fff]": theme.appearance === "dark",
        })}
      >
        {elapsedTime}
      </h3>
    </button>
  );
};

export default Order;
