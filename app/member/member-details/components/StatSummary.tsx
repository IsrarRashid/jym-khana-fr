import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { HiUsers } from "react-icons/hi2";
import { ImStatsDots } from "react-icons/im";
import { MemberDetail } from "../../page";

const StatSummary = ({ data }: { data: MemberDetail }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  gap-3 mb-4">
      <Box className="bg-theme rounded-[14px]" p="4">
        <Flex justify="between" align="start">
          <Box>
            <Text as="p" className="font-semibold" mb="2">
              Active Members
            </Text>
            <Heading size="7" weight="bold">
              {data.activeMember}
            </Heading>
          </Box>
          <Box className="bg-[#4AD99142] rounded-3xl flex items-center justify-center p-4">
            <ImStatsDots size={28} className="text-[#4AD991]" />
          </Box>
        </Flex>
      </Box>
      <Box className="bg-theme rounded-[14px]" p="4">
        <Flex justify="between" align="start">
          <Box>
            <Text as="p" className="font-semibold" mb="2">
              Suspended
            </Text>
            <Heading size="7" weight="bold">
              {data.suspended}
            </Heading>
          </Box>
          <Box className="bg-[#8280FF42] rounded-3xl flex items-center justify-center p-4">
            <HiUsers size={28} className="text-[#8280FF]" />
          </Box>
        </Flex>
      </Box>
      <Box className="bg-theme rounded-[14px]" p="4">
        <Flex justify="between" align="start">
          <Box>
            <Text as="p" className="font-semibold" mb="2">
              Close/Block
            </Text>
            <Heading size="7" weight="bold">
              {data.closeBlock}
            </Heading>
          </Box>
          <Box className="bg-[#8280FF42] rounded-3xl flex items-center justify-center p-4">
            <HiUsers size={28} className="text-[#8280FF]" />
          </Box>
        </Flex>
      </Box>
      <Box className="bg-theme rounded-[14px]" p="4">
        <Flex justify="between" align="start">
          <Box>
            <Text as="p" className="font-semibold" mb="2">
              Freeze
            </Text>
            <Heading size="7" weight="bold">
              {data.freeze}
            </Heading>
          </Box>
          <Box className="bg-[#8280FF42] rounded-3xl flex items-center justify-center p-4">
            <HiUsers size={28} className="text-[#8280FF]" />
          </Box>
        </Flex>
      </Box>
      <Box className="bg-theme rounded-[14px]" p="4">
        <Flex justify="between" align="start">
          <Box>
            <Text as="p" className="font-semibold" mb="2">
              Terminate
            </Text>
            <Heading size="7" weight="bold">
              {data.terminate}
            </Heading>
          </Box>
          <Box className="bg-[#8280FF42] rounded-3xl flex items-center justify-center p-4">
            <HiUsers size={28} className="text-[#8280FF]" />
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default StatSummary;
