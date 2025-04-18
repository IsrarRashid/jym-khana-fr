import { convertToTitleCase } from "@/app/utils/utils";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { HiUsers } from "react-icons/hi2";
import { ImStatsDots } from "react-icons/im";
import { RestaurantDetail } from "../page";

const StatSummary = ({ details }: { details: RestaurantDetail }) => {
  console.log("details:", details);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 mb-4">
      <Box className="bg-theme rounded-[14px]" p="4">
        <Flex justify="between" align="center" className="mb-[27px]">
          <Box>
            <Text as="p" className="font-semibold" mb="2">
              {convertToTitleCase(Object.keys(details)[0])}
            </Text>
            <Heading size="7" weight="bold">
              {details.totalSales}{" "}
              <Text size="1" weight="bold">
                RS/-
              </Text>
            </Heading>
          </Box>
          <Box className="bg-[#4AD99142] rounded-3xl flex items-center justify-center p-4">
            <ImStatsDots size={28} className="text-[#4AD991]" />
          </Box>
        </Flex>
        {/* <Flex align="center" justify="center" gap="3">
          <IoMdTrendingUp className="text-[var(--accent-9)]" size={24} />
          <Text as="p" className="font-semibold">
            <Text color="green">8.5%</Text> Up from yesterday
          </Text>
        </Flex> */}
      </Box>
      <Box className="bg-theme rounded-[14px]" p="4">
        <Flex justify="between" align="center" className="mb-[27px]">
          <Box>
            <Text as="p" className="font-semibold" mb="2">
              {convertToTitleCase(Object.keys(details)[1])}
            </Text>
            <Heading size="7" weight="bold">
              {details.cashSale}{" "}
              <Text size="1" weight="bold">
                RS/-
              </Text>
            </Heading>
          </Box>
          <Box className="bg-[#8280FF42] rounded-3xl flex items-center justify-center p-4">
            <HiUsers size={28} className="text-[#8280FF]" />
          </Box>
        </Flex>
        {/* <Flex align="center" justify="center" gap="3">
          <IoMdTrendingDown className="text-[#F93C65]" size={24} />
          <Text as="p" className="font-semibold">
            <Text className="text-[#F93C65]">4.3%</Text> Down from yesterday
          </Text>
        </Flex> */}
      </Box>
      <Box className="bg-theme rounded-[14px]" p="4">
        <Flex justify="between" align="center" className="mb-[27px]">
          <Box>
            <Text as="p" className="font-semibold" mb="2">
              {convertToTitleCase(Object.keys(details)[2])}
            </Text>
            <Heading size="7" weight="bold">
              {details.creditCardSale}{" "}
              <Text size="1" weight="bold">
                RS/-
              </Text>
            </Heading>
          </Box>
          <Box className="bg-[#8280FF42] rounded-3xl flex items-center justify-center p-4">
            <HiUsers size={28} className="text-[#8280FF]" />
          </Box>
        </Flex>
        {/* <Flex align="center" justify="center" gap="3">
          <IoMdTrendingUp className="text-[var(--accent-9)]" size={24} />
          <Text as="p" className="font-semibold">
            <Text color="green">8.5%</Text> Down from yesterday
          </Text>
        </Flex> */}
      </Box>
      <Box className="bg-theme rounded-[14px]" p="4">
        <Flex justify="between" align="center" className="mb-[27px]">
          <Box>
            <Text as="p" className="font-semibold" mb="2">
              {convertToTitleCase(Object.keys(details)[3])}
            </Text>
            <Heading size="7" weight="bold">
              {details.creditSale}{" "}
              <Text size="1" weight="bold">
                RS/-
              </Text>
            </Heading>
          </Box>
          <Box className="bg-[#8280FF42] rounded-3xl flex items-center justify-center p-4">
            <HiUsers size={28} className="text-[#8280FF]" />
          </Box>
        </Flex>
        {/* <Flex align="center" justify="center" gap="3">
          <IoMdTrendingUp className="text-[var(--accent-9)]" size={24} />
          <Text as="p" className="font-semibold">
            <Text color="green">8.5%</Text> Down from yesterday
          </Text>
        </Flex> */}
      </Box>
      <Box className="bg-theme rounded-[14px]" p="4">
        <Flex justify="between" align="center" className="mb-[27px]">
          <Box>
            <Text as="p" className="font-semibold" mb="2">
              {convertToTitleCase(Object.keys(details)[4])}
            </Text>
            <Heading size="7" weight="bold">
              {details.noOfPersons}
            </Heading>
          </Box>
          <Box className="bg-[#8280FF42] rounded-3xl flex items-center justify-center p-4">
            <HiUsers size={28} className="text-[#8280FF]" />
          </Box>
        </Flex>
        {/* <Flex align="center" justify="center" gap="3">
          <IoMdTrendingUp className="text-[var(--accent-9)]" size={24} />
          <Text as="p" className="font-semibold">
            <Text color="green">8.5%</Text> Down from yesterday
          </Text>
        </Flex> */}
      </Box>
    </div>
  );
};

export default StatSummary;
