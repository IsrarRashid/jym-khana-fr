"use client";
import { Button } from "@radix-ui/themes";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

const GalleryView = () => {
  return (
    <Button
      className={`bg-theme !font-normal !text-xl !w-auto !rounded-xl !py-6 !px-4 !text-secondary !outline !outline-whiteSecondary`}
    >
      <HiOutlineSquares2X2 size={24} /> Gallery View
    </Button>
  );
};

export default GalleryView;
