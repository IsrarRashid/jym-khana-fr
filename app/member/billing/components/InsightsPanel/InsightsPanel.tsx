import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import { FaFileInvoiceDollar, FaPiggyBank } from "react-icons/fa";
import { FaHandHoldingDollar, FaSackDollar } from "react-icons/fa6";
import AddBankButton from "./AddBankButton";
import { BillingDetail } from "@/app/member/page";

const InsightsPanel = ({ data }: { data: BillingDetail }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6  gap-3 mb-4">
      <Box className="bg-theme rounded-[25px]" p="4">
        <Flex gap="3" align="center">
          <Box className="bg-[#FFF5D9] rounded-full flex items-center justify-center p-5">
            <FaSackDollar size={30} className="text-[#FFBB38]" />
          </Box>
          <Box>
            <Text as="p" className="font-semibold text-[#718EBF]" mb="2">
              Recovery
            </Text>
            <Heading size="7" weight="bold">
              {data.recovery}{" "}
              <Text size="1" weight="bold">
                RS/-
              </Text>
            </Heading>
          </Box>
        </Flex>
      </Box>
      <Box className="bg-theme rounded-[25px]" p="4">
        <Text
          as="p"
          className="text-center font-semibold text-[#718EBF]"
          mb="2"
        >
          Cash
        </Text>
        <Heading size="7" weight="bold" className="text-center">
          {data.cash}{" "}
          <Text size="1" weight="bold">
            RS/-
          </Text>
        </Heading>
      </Box>
      <Box className="bg-theme rounded-[25px]" p="4">
        <Flex gap="3" align="center">
          <Box className="bg-[#FFF5D9] rounded-full flex items-center justify-center p-5">
            <Image
              width={30}
              height={30}
              src="/images/bank-alfalah.png"
              alt="bank-alfalah"
            />
          </Box>
          <Box>
            <Text as="p" className="font-semibold text-[#718EBF]" mb="2">
              Bank Alfalah
            </Text>
            <Heading size="7" weight="bold">
              {data.bankAlfalah}{" "}
              <Text size="1" weight="bold">
                RS/-
              </Text>
            </Heading>
          </Box>
        </Flex>
      </Box>
      <Box className="bg-theme rounded-[25px]" p="4">
        <Flex gap="3" align="center">
          <Box className="bg-[#FFF5D9] rounded-full flex items-center justify-center p-5">
            <Image
              width={30}
              height={30}
              src="/images/bank-faysal.png"
              alt="bank-faysal"
            />
          </Box>
          <Box>
            <Text as="p" className="font-semibold text-[#718EBF]" mb="2">
              Faysal Bank
            </Text>
            <Heading size="7" weight="bold">
              {data.faysalBank}{" "}
              <Text size="1" weight="bold">
                RS/-
              </Text>
            </Heading>
          </Box>
        </Flex>
      </Box>
      <Box className="bg-theme rounded-[25px]" p="4">
        <Flex gap="3" align="center">
          <Box className="bg-[#FFF5D9] rounded-full flex items-center justify-center p-5">
            <Image
              width={30}
              height={30}
              src="/images/bank-ubl.png"
              alt="bank-faysal"
            />
          </Box>
          <Box>
            <Text as="p" className="font-semibold text-[#718EBF]" mb="2">
              UBL
            </Text>
            <Heading size="7" weight="bold">
              {data.ubl}{" "}
              <Text size="1" weight="bold">
                RS/-
              </Text>
            </Heading>
          </Box>
        </Flex>
      </Box>
      <AddBankButton />
      <Box className="bg-theme rounded-[25px]" p="4">
        <Flex gap="3" align="center">
          <Box className="bg-[#FFE0EB] rounded-full flex items-center justify-center p-5">
            <FaFileInvoiceDollar size={30} className="text-[#FF82AC]" />
          </Box>
          <Box>
            <Text as="p" className="font-semibold text-[#718EBF]" mb="2">
              Membership Fee
            </Text>
            <Heading size="7" weight="bold">
              {data.membershipFee}{" "}
              <Text size="1" weight="bold">
                RS/-
              </Text>
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
              Receivable
            </Text>
            <Heading size="7" weight="bold">
              {data.receivable}{" "}
              <Text size="1" weight="bold">
                RS/-
              </Text>
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
              Complain
            </Text>
            <Heading size="7" weight="bold">
              {data.complainCount}
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
              App Download
            </Text>
            <Heading size="7" weight="bold">
              {data.appDownloadCount}
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
              IOS
            </Text>
            <Heading size="7" weight="bold">
              {data.iosDownloadCount}
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
              Android
            </Text>
            <Heading size="7" weight="bold">
              {data.androidDownloadCount}
            </Heading>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default InsightsPanel;
