import { Flex } from "@radix-ui/themes";
import GalleryView from "./GalleryView";
import FilterButton from "./FilterButton";

const Header = () => {
  return (
    <Flex justify="between" mb="4" wrap="wrap">
      <FilterButton />
      <Flex justify="between" gap="5" wrap="wrap">
        <GalleryView />
      </Flex>
    </Flex>
  );
};

export default Header;
