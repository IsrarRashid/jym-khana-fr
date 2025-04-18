"use client";
import { Flex } from "@radix-ui/themes";
import DatePicker from "./DatePicker";
import GalleryView from "./GalleryView";
import NavTabs from "./NavTabs";

const Header = () => {
  return (
    <Flex justify="between" mb="4" wrap="wrap">
      <NavTabs />
      <Flex justify="between" gap="5" wrap="wrap">
        <GalleryView />
        <DatePicker />
      </Flex>
    </Flex>
  );
};

export default Header;
