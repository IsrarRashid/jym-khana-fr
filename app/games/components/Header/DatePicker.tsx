"use client";
import {
  Box,
  Button,
  Dialog,
  Flex,
  IconButton,
  Text,
  useThemeContext,
} from "@radix-ui/themes";
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import DateRangeFilter from "./DateRangeFilter";

const DatePicker = () => {
  const theme = useThemeContext();

  return (
    <Button
      className={`bg-theme !font-normal !text-xl !lg:w-80 !w-auto !rounded-xl !py-6 !px-4 ${
        theme.appearance === "light" ? "text-white" : "!text-secondary "
      } !outline !outline-whiteSecondary`}
    >
      <Dialog.Root>
        <Dialog.Trigger>
          <Flex className="w-full" align="center" justify="between" gap="2">
            <Text as="p">Pick a date</Text>
            <Box>
              <FaChevronDown />
            </Box>
          </Flex>
        </Dialog.Trigger>

        <Dialog.Content maxWidth="1000px">
          <Dialog.Title className="text-end">
            <Flex gap="3" justify="end">
              &nbsp;{" "}
              <Dialog.Close>
                <IconButton variant="soft" color="gray">
                  <MdOutlineClose />
                </IconButton>
              </Dialog.Close>
            </Flex>
          </Dialog.Title>
          <DateRangeFilter />
        </Dialog.Content>
      </Dialog.Root>
    </Button>
  );
};

export default DatePicker;
