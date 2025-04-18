import Image, { StaticImageData } from "next/image";
import React from "react";
interface Props {
  icon: StaticImageData;
  title: string;
  value: number;
  cardBackgroundColor: string;
  titleTextColor: string;
  valueTextColor: string;
}

const CardMenu = ({
  icon,
  title,
  value,
  cardBackgroundColor,
  titleTextColor,
  valueTextColor,
}: Props) => {
  return (
    <>
      <div
        className={`${cardBackgroundColor} shadow-lg rounded-2xl px-4 py-6 flex items-center gap-4 w-[70%] sm:w-full md:w-[48%] lg:w-[23%]`}
      >
        <div className="flex-shrink-0">
          <div>
            <Image src={icon} alt="icon" className="w-14 h-14" />
          </div>
        </div>
        <div>
          <p className={`text-base ${titleTextColor}`}>{title}</p>
          <p className={`text-2xl font-bold ${valueTextColor}`}>{value}</p>
        </div>
      </div>
    </>
  );
};

export default CardMenu;
