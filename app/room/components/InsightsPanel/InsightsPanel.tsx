import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { FaFileInvoiceDollar, FaPiggyBank } from "react-icons/fa";
import { FaHandHoldingDollar, FaSackDollar } from "react-icons/fa6";

const InsightsPanel = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  gap-3 mb-4">
      <Box className="bg-theme rounded-[25px]" p="4">
        <Flex gap="3" align="center">
          <Box className="bg-[#FFF5D9] rounded-full flex items-center justify-center p-5">
            <FaSackDollar size={30} className="text-[#FFBB38]" />
          </Box>
          <Box>
            <Text as="p" className="font-semibold text-[#718EBF]" mb="2">
              No of Rooms
            </Text>
            <Heading size="7" weight="bold">
              189
            </Heading>
          </Box>
        </Flex>
      </Box>
      <Box className="bg-theme rounded-[25px]" p="4">
        <Flex gap="3" align="center">
          <Box className="bg-[#E7EDFF] rounded-full flex items-center justify-center p-5">
            <FaHandHoldingDollar size={30} className="text-[#396AFF]" />
          </Box>
          <Box>
            <Text as="p" className="font-semibold text-[#718EBF]" mb="2">
              Available Rooms
            </Text>
            <Heading size="7" weight="bold">
              34
            </Heading>
          </Box>
        </Flex>
      </Box>
      <Box className="bg-theme rounded-[25px]" p="4">
        <Flex gap="3" align="center">
          <Box className="bg-[#FFE0EB] rounded-full flex items-center justify-center p-5">
            <FaFileInvoiceDollar size={30} className="text-[#FF82AC]" />
          </Box>
          <Box>
            <Text as="p" className="font-semibold text-[#718EBF]" mb="2">
              Occupied Room
            </Text>
            <Heading size="7" weight="bold">
              05
            </Heading>
          </Box>
        </Flex>
      </Box>
      <Box className="bg-theme rounded-[25px]" p="4">
        <Flex gap="3" align="center">
          <Box className="bg-[#DCFAF8] rounded-full flex items-center justify-center p-5">
            <FaPiggyBank size={30} className="text-[#16DBCC]" />
          </Box>
          <Box>
            <Text as="p" className="font-semibold text-[#718EBF]" mb="2">
              Check In
            </Text>
            <Heading size="7" weight="bold">
              323
            </Heading>
          </Box>
        </Flex>
      </Box>
      <Box className="bg-theme rounded-[25px]" p="4">
        <Flex gap="3" align="center">
          <Box className="bg-[#DCFAF8] rounded-full flex items-center justify-center p-5">
            <FaPiggyBank size={30} className="text-[#16DBCC]" />
          </Box>
          <Box>
            <Text as="p" className="font-semibold text-[#718EBF]" mb="2">
              Check out
            </Text>
            <Heading size="7" weight="bold">
              05
            </Heading>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default InsightsPanel;
