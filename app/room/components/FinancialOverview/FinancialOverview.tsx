import { Badge, Box, Flex, Heading, Text } from "@radix-ui/themes";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import MyLineChart from "./MyLineChart";

const FinancialOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
      <Box className="bg-theme rounded-[14px]" p="0">
        <Text as="p" className="font-semibold p-4">
          Cash
        </Text>
        <div
          style={{
            borderBottom: "2px solid rgba(135,137,141,0.3)",
            width: "100%",
          }}
        ></div>
        <Flex align="center" justify="between" p="4">
          <Heading className="text-[2rem]" weight="bold">
            20,000{" "}
            <Text size="3" weight="bold">
              RS/-
            </Text>
          </Heading>
          <Badge
            className="text-[var(--accent-11)] bg-[var(--accent-a3)] ring-2 ring-[#FFFFFF99] font-medium text-sm px-2"
            radius="full"
            size="3"
          >
            <GoArrowUpRight />
            3.1%
          </Badge>
          <Box className="w-[40%]">
            <MyLineChart mon={0} tue={10} wed={20} thu={10} fri={20} />
          </Box>
        </Flex>
      </Box>
      <Box className="bg-theme rounded-[14px]" p="0">
        <Text as="p" className="font-semibold p-4">
          Credit Card
        </Text>
        <div
          style={{
            borderBottom: "2px solid rgba(135,137,141,0.3)",
            width: "100%",
          }}
        ></div>
        <Flex align="center" justify="between" p="4">
          <Heading className="text-[2rem]" weight="bold">
            20,000{" "}
            <Text size="3" weight="bold">
              RS/-
            </Text>
          </Heading>
          <Badge
            className="ring-2 ring-[#FFFFFF99] font-medium text-sm px-2"
            radius="full"
            color="red"
            size="3"
          >
            <GoArrowDownRight />
            -2.1%
          </Badge>
          <Box className="w-[40%]">
            <MyLineChart mon={0} tue={10} wed={20} thu={10} fri={5} />
          </Box>
        </Flex>
      </Box>
      <Box className="bg-theme rounded-[14px]" p="0">
        <Text as="p" className="font-semibold p-4">
          Credit
        </Text>
        <div
          style={{
            borderBottom: "2px solid rgba(135,137,141,0.3)",
            width: "100%",
          }}
        ></div>
        <Flex align="center" justify="between" p="4">
          <Heading className="text-[2rem]" weight="bold">
            20,000{" "}
            <Text size="3" weight="bold">
              RS/-
            </Text>
          </Heading>
          <Badge
            color="red"
            className="ring-2 ring-[#FFFFFF99] font-medium text-sm px-2"
            radius="full"
            size="3"
          >
            <GoArrowDownRight />
            -2.1%
          </Badge>
          <Box className="w-[40%]">
            <MyLineChart mon={0} tue={10} wed={20} thu={10} fri={5} />
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default FinancialOverview;
