import { Flex } from "@radix-ui/themes";
import DatePicker from "./DatePicker";
import GalleryView from "./GalleryView";
import MemberTypeFilter from "./MemberTypeFilter";

const Header = () => {
  return (
    <Flex justify="between" mb="4" wrap="wrap">
      <MemberTypeFilter />
      <Flex justify="between" gap="5" wrap="wrap">
        <GalleryView />
        <DatePicker />
      </Flex>
    </Flex>
  );
};

export default Header;
