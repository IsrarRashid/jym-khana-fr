import { BillingDetail } from "@/app/member/page";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import { FaFileInvoiceDollar, FaPiggyBank } from "react-icons/fa";
import { FaHandHoldingDollar, FaSackDollar } from "react-icons/fa6";
import AddBankButton from "./AddBankButton";
import ComplainButton from "./ComplainButton";
import { RESERVATION_API } from "@/app/APIs";
import { ComplainType, ComplainStatus } from "./types/status";

export interface ComplainResult {
  id: number;
  memberid: string;
  cdate: string;
  ctime: {
    hasValue: boolean;
    value: {
      ticks: number;
      days: number;
      hours: number;
      milliseconds: number;
      minutes: number;
      seconds: number;
      totalDays: number;
      totalHours: number;
      totalMilliseconds: number;
      totalMinutes: number;
      totalSeconds: number;
    };
  };
  complaintType: string;
  remarks: string;
  status: boolean;
  reply: string;
}

export interface ComplainResopnse {
  isSuccess: boolean;
  message: string;
  result: ComplainResult[];
}

interface Props {
  data: BillingDetail;
  searchParams: {
    complainType?: ComplainType;
    complainStatus?: ComplainStatus;
  };
}

const InsightsPanel = async ({ data, searchParams }: Props) => {
  const { complainType, complainStatus } = searchParams;
  console.log("in InsightsPanel component CS", complainStatus);
  console.log("in InsightsPanel component CT", complainType);

  console.log("complainType", complainType);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}${RESERVATION_API}/GeAlltHelpDesk`,
    { cache: "no-store" }
  );
  const response: ComplainResopnse = await res.json();
  console.log("response", response);

  const filteredData: ComplainResult[] = response.result.filter(
    (item: ComplainResult) => {
      let matchesType = true;
      let matchesStatus = true;

      // complain type filter
      if (complainType) {
        matchesType =
          item.complaintType.toLowerCase() === complainType.toLowerCase();
      }

      // complain status filter
      if (complainStatus) {
        if (complainStatus.toLowerCase() === "resolved") {
          matchesStatus = item.status === true;
        } else if (complainStatus.toLowerCase() === "pending") {
          matchesStatus = item.status === false;
        }
      }

      // Both conditions must be true
      return matchesStatus && matchesType;
    }
  );

  // const filteredData: ComplainResult[] = response.result.filter(
  //   (item: ComplainResult) =>
  //     item.complaintType.toLowerCase() === complainType?.toLowerCase()
  // ).filter((item)=>item.);

  const complainData: ComplainResult[] = filteredData.reverse();

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
      <Box className="bg-theme rounded-[25px]" py="1" px="2">
        {response && (
          <ComplainButton
            filteredData={complainData}
            originalData={response.result}
          />
        )}
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
