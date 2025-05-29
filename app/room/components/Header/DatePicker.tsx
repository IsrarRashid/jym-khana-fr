import { Box, Button, Flex, Text } from "@radix-ui/themes";
import { FaChevronDown } from "react-icons/fa";

const DatePicker = () => {
  return (
    <Button
      className={`bg-theme !font-normal !text-xl !w-auto !rounded-xl !py-6 !px-4 !text-secondary !outline !outline-whiteSecondary`}
    >
      <Flex className="w-full" align="center" justify="between" gap="2">
        <Text as="p">Pick a date</Text>
        <Box>
          <FaChevronDown />
        </Box>
      </Flex>
    </Button>
  );
};

export default DatePicker;
