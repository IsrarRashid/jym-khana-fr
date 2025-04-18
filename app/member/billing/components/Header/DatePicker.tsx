import { Box, Button, Flex, Text, useThemeContext } from "@radix-ui/themes";
import { FaChevronDown } from "react-icons/fa";

const DatePicker = () => {
  const theme = useThemeContext();

  return (
    <Button
      className={`bg-theme !font-normal !text-xl !lg:w-80 !w-auto !rounded-xl !py-6 !px-4 ${
        theme.appearance === "light" ? "text-white" : "!text-secondary "
      } !outline !outline-whiteSecondary`}
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
