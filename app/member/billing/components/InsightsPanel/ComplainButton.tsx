"use client";

import {
  Box,
  Button,
  Dialog,
  Flex,
  Heading,
  ScrollArea,
  Table,
  Text,
  useThemeContext,
} from "@radix-ui/themes";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFileInvoiceDollar } from "react-icons/fa";
import ComplainComment from "./ComplainComment";
import ComplainFilter from "./ComplainFilter";
import { ComplainResult } from "./InsightsPanel";

const ComplainButton = ({
  filteredData,
  originalData,
}: {
  filteredData: ComplainResult[];
  originalData: ComplainResult[];
}) => {
  const theme = useThemeContext();
  const searchParams = useSearchParams();
  const [complainType, setComplainType] = useState<string>("");
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    const complainType = searchParams.get("complainType");
    if (complainType) setComplainType(complainType);
  }, [searchParams]);

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button
          variant="ghost"
          color="gray"
          className="!w-full !h-full !rounded-[25px] !flex !justify-between"
        >
          <Flex gap="3" justify="between" align="center" p="2">
            <Box className="bg-[#FFE0EB] rounded-full flex items-center justify-center p-5">
              <FaFileInvoiceDollar size={30} className="text-[#FF82AC]" />
            </Box>
            <Box>
              <Text as="p" className="font-semibold text-[#718EBF]" mb="2">
                Complains
              </Text>
              <Heading size="7" weight="bold" className="text-start">
                {originalData.filter((data) => data.status === false).length}
              </Heading>
            </Box>
          </Flex>
        </Button>
      </Dialog.Trigger>

      <Dialog.Content
        size="4"
        maxWidth="1200px"
        className={`!p-0 app-container ${
          theme.appearance === "light" ? " light" : "dark"
        }`}
      >
        <Dialog.Title className="!hidden">&nbsp;</Dialog.Title>
        <Dialog.Description className="!hidden" size="2" mb="4">
          &nbsp;
        </Dialog.Description>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <ComplainFilter refresh={refresh} />

          <Box className={`lg:col-span-2`} px="5" py="7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Heading className="!text-[2.5rem]">Complains Box</Heading>
              <Flex gap="5" justify="end" wrap="wrap">
                <Box>
                  <Text as="p" size="7" weight="bold" align="center">
                    {
                      originalData.filter(
                        (complain) =>
                          complain.complaintType.toLowerCase() ===
                          complainType.toLowerCase()
                      ).length
                    }
                  </Text>
                  <Text as="p">Complains</Text>
                </Box>
                <Box>
                  <Text as="p" size="7" weight="bold" align="center">
                    {
                      originalData
                        .filter(
                          (complain) =>
                            complain.complaintType.toLowerCase() ===
                            complainType.toLowerCase()
                        )
                        .filter((complain) => complain.status === false).length
                    }
                  </Text>
                  <Text as="p">Pending</Text>
                </Box>
              </Flex>
            </div>
            <Heading className="!text-[1.563rem]" mb="3">
              Found {filteredData.length}
            </Heading>
            <ScrollArea
              type="auto"
              scrollbars="vertical"
              style={{ height: 516 }}
            >
              <Table.Root>
                <Table.Body>
                  {filteredData.map((complain) => (
                    <Table.Row key={complain.id}>
                      <Table.RowHeaderCell className="!shadow-none !pb-0 !ps-0">
                        <ComplainComment
                          complain={complain}
                          setRefresh={setRefresh}
                        />
                      </Table.RowHeaderCell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
            </ScrollArea>
          </Box>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default ComplainButton;

// <Box className="lg:col-span-2" px="5" py="7">
// <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//   <Heading className="!text-[2.5rem]">Complains Box</Heading>
//   <Flex gap="5" justify="end" wrap="wrap">
//     <Box>
//       <Text as="p" size="7" weight="bold" align="center">
//         100
//       </Text>
//       <Text as="p">Complains</Text>
//     </Box>
//     <Box>
//       <Text as="p" size="7" weight="bold" align="center">
//         3
//       </Text>
//       <Text as="p">Pending</Text>
//     </Box>
//   </Flex>
// </div>
// <Heading className="!text-[1.563rem]" mb="3">
//   Found 1020
// </Heading>
// <Box p="5" className="rounded-lg bg-theme" mb="3">
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
//     <Heading size="5">Booking Date: 24-04-2025</Heading>
//     <Flex justify="end" gap="4">
//       <Text>Status:</Text>
//       <Flex gap="1" align="center">
//         <RxCounterClockwiseClock color="yellow" />
//         <Text color="yellow">Pending</Text>
//       </Flex>
//     </Flex>
//   </div>
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
//     <Box className="lg:col-span-2">
//       <Flex gap="5" mb="2">
//         <Flex gap="2">
//           <Text weight="medium">Member ID:</Text>
//           <Flex gap="1" align="center">
//             <RiPassportLine />
//             12-890379-01
//           </Flex>
//         </Flex>

//         <Flex gap="2" align="center">
//           <Text weight="medium">Complain Type:</Text>
//           <Text className="text-[var(--accent-9)]">
//             <FaBowlFood />
//           </Text>
//           <Text className="text-[var(--accent-9)]">Food</Text>
//         </Flex>
//       </Flex>
//       <Flex gap="2" align="center">
//         <Text weight="medium">Name:</Text>
//         <Flex gap="1" align="center">
//           <RiUser6Fill />
//           Muhammad Ahmed
//         </Flex>
//       </Flex>
//     </Box>
//     <Box
//       onClick={() => setSelectedCommentBox(!openCommentBox)}
//       className="!flex !justify-end !items-end"
//     >
//       <Button size="4">Resolve</Button>
//     </Box>
//   </div>
//   <Box
//     as="div"
//     className={`overflow-hidden transition-all ${
//       openCommentBox ? "h-full opacity-100" : "h-0  opacity-0"
//     }`}
//   >
//     <Heading size="5" mb="3">
//       Comment
//     </Heading>
//     <TextArea size="3" placeholder="Write any comment here..." />
//   </Box>
// </Box>
// </Box>
