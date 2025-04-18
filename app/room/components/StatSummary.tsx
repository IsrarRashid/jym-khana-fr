import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { HiUsers } from "react-icons/hi2";
import { ImStatsDots } from "react-icons/im";
import { IoMdTrendingDown, IoMdTrendingUp } from "react-icons/io";

const StatSummary = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  gap-3 mb-4">
      <Box className="bg-theme rounded-[14px]" p="4">
        <Flex justify="between" align="center" className="mb-[27px]">
          <Box>
            <Text as="p" className="font-semibold" mb="2">
              Total Reservation
            </Text>
            <Heading size="7" weight="bold">
              180
            </Heading>
          </Box>
          <Box className="bg-[#4AD99142] rounded-3xl flex items-center justify-center p-4">
            <ImStatsDots size={28} className="text-[#4AD991]" />
          </Box>
        </Flex>
        <Flex align="center" justify="center" gap="3">
          <IoMdTrendingUp className="text-[var(--accent-9)]" size={24} />
          <Text as="p" className="font-semibold">
            <Text color="green">8.5%</Text> Up from yesterday
          </Text>
        </Flex>
      </Box>
      <Box className="bg-theme rounded-[14px]" p="4">
        <Flex justify="between" align="center" className="mb-[27px]">
          <Box>
            <Text as="p" className="font-semibold" mb="2">
              Total Reservation
            </Text>
            <Heading size="7" weight="bold">
              80
            </Heading>
          </Box>
          <Box className="bg-[#8280FF42] rounded-3xl flex items-center justify-center p-4">
            <HiUsers size={28} className="text-[#8280FF]" />
          </Box>
        </Flex>
        <Flex align="center" justify="center" gap="3">
          <IoMdTrendingDown className="text-[#F93C65]" size={24} />
          <Text as="p" className="font-semibold">
            <Text className="text-[#F93C65]">4.3%</Text> Down from yesterday
          </Text>
        </Flex>
      </Box>
      <Box className="bg-theme rounded-[14px]" p="4">
        <Flex justify="between" align="center" className="mb-[27px]">
          <Box>
            <Text as="p" className="font-semibold" mb="2">
              Upcoming Reward
            </Text>
            <Heading size="7" weight="bold">
              40
            </Heading>
          </Box>
          <Box className="bg-[#8280FF42] rounded-3xl flex items-center justify-center p-4">
            <HiUsers size={28} className="text-[#8280FF]" />
          </Box>
        </Flex>
        <Flex align="center" justify="center" gap="3">
          <IoMdTrendingUp className="text-[var(--accent-9)]" size={24} />
          <Text as="p" className="font-semibold">
            <Text color="green">8.5%</Text> Down from yesterday
          </Text>
        </Flex>
      </Box>
      <Box className="bg-theme rounded-[14px]" p="4">
        <Flex justify="between" align="center" className="mb-[27px]">
          <Box>
            <Text as="p" className="font-semibold" mb="2">
              App Reservation
            </Text>
            <Heading size="7" weight="bold">
              40
            </Heading>
          </Box>
          <Box className="bg-[#8280FF42] rounded-3xl flex items-center justify-center p-4">
            <HiUsers size={28} className="text-[#8280FF]" />
          </Box>
        </Flex>
        <Flex align="center" justify="center" gap="3">
          <IoMdTrendingUp className="text-[var(--accent-9)]" size={24} />
          <Text as="p" className="font-semibold">
            <Text color="green">8.5%</Text> Down from yesterday
          </Text>
        </Flex>
      </Box>
      <Box className="bg-theme rounded-[14px]" p="4">
        <Flex justify="between" align="center" className="mb-[27px]">
          <Box>
            <Text as="p" className="font-semibold" mb="2">
              App Upcoming Resered
            </Text>
            <Heading size="7" weight="bold">
              20
            </Heading>
          </Box>
          <Box className="bg-[#8280FF42] rounded-3xl flex items-center justify-center p-4">
            <HiUsers size={28} className="text-[#8280FF]" />
          </Box>
        </Flex>
        <Flex align="center" justify="center" gap="3">
          <IoMdTrendingUp className="text-[var(--accent-9)]" size={24} />
          <Text as="p" className="font-semibold">
            <Text color="green">8.5%</Text> Down from yesterday
          </Text>
        </Flex>
      </Box>
    </div>
  );
};

export default StatSummary;
