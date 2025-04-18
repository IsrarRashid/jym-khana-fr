import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { FaFileInvoiceDollar, FaPiggyBank } from "react-icons/fa";
import { FaHandHoldingDollar, FaSackDollar } from "react-icons/fa6";
import { RoomInfos } from "../../page";
import { MdOutlineQuestionMark } from "react-icons/md";

const InsightsPanel = ({ data }: { data: RoomInfos[] }) => {
  const icons = [
    { icon: <FaSackDollar size={30} className="text-[#FFBB38]" /> },
    { icon: <FaHandHoldingDollar size={30} className="text-[#396AFF]" /> },
    { icon: <FaFileInvoiceDollar size={30} className="text-[#FF82AC]" /> },
    { icon: <FaPiggyBank size={30} className="text-[#16DBCC]" /> },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  gap-3 mb-4">
        {data.map((d, i) => (
          <Box key={i} className="bg-theme rounded-[25px]" p="4">
            <Flex gap="3" align="center">
              <Box className="bg-[#FFF5D9] rounded-full flex items-center justify-center p-5">
                {icons[i] ? (
                  icons[i].icon
                ) : (
                  <MdOutlineQuestionMark size={30} className="text-[#FFBB38]" />
                )}
              </Box>
              <Box>
                <Text as="p" className="font-semibold text-[#718EBF]" mb="2">
                  {d.name}
                </Text>
                <Heading size="7" weight="bold">
                  {d.count}
                </Heading>
              </Box>
            </Flex>
          </Box>
        ))}
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  gap-3 mb-4">
        <Box className="bg-theme rounded-[25px]" p="4">
          <Flex gap="3" align="center">
            <Box className="bg-[#FFF5D9] rounded-full flex items-center justify-center p-5">
              <FaSackDollar size={30} className="text-[#FFBB38]" />
            </Box>
            <Box>
              <Text as="p" className="font-semibold text-[#718EBF]" mb="2">
                Long Tennis
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
                Table Tennis
              </Text>
              <Heading size="7" weight="bold">
                189
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
                Carrom
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
                Chess
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
                Cricket Arena
              </Text>
              <Heading size="7" weight="bold">
                05
              </Heading>
            </Box>
          </Flex>
        </Box>
      </div> */}
    </>
  );
};

export default InsightsPanel;
