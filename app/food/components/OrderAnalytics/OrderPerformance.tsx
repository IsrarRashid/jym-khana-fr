import {
  Avatar,
  Box,
  Flex,
  Heading,
  ScrollArea,
  Table,
  Text,
} from "@radix-ui/themes";
import { BiSolidEraser } from "react-icons/bi";
import { OrderTakerPerformance } from "../../page";
import { FaUser } from "react-icons/fa";

const OrderPerformance = ({ data }: { data: OrderTakerPerformance[] }) => {
  return (
    <Box className="bg-theme rounded-[17px]" p="4">
      <Flex justify="between" align="center" className="mb-[30px]">
        <Heading weight="bold" size="6">
          Order Taker Performance
        </Heading>
        <Box>
          <BiSolidEraser size={21} />
        </Box>
      </Flex>
      <ScrollArea type="auto" scrollbars="horizontal" style={{ height: 130 }}>
        <Flex align="center" justify="center" gap="5">
          {data.map((d, i) => (
            <Flex key={i} justify="center" align="center" direction="column">
              <Avatar
                size="6"
                className="w-full h-full mb-1"
                src={`${process.env.NEXT_PUBLIC_BACKEND_API}/${d.salesmanPicture}`}
                fallback={<FaUser size={30} />}
                radius="full"
              />
              <Text as="p" weight="regular" size="4" wrap="nowrap">
                {d.salesmanName}
              </Text>
            </Flex>
          ))}
        </Flex>
      </ScrollArea>
      <ScrollArea type="auto" scrollbars="vertical" style={{ height: 300 }}>
        <Table.Root size="3">
          <Table.Header className="text-center">
            <Table.Row className="text-secondary font-normal">
              <Table.ColumnHeaderCell className="!shadow-none pb-0">
                Order Taker
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="!shadow-none pb-0">
                Orders
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="!shadow-none pb-0">
                Sales
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="!shadow-none pb-0">
                Achieve(%)
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body className="text-center w-full">
            {data?.map((d, i) => (
              <Table.Row
                key={i}
                className="hover:bg-[#C6C6C61A] transition-colors"
              >
                <Table.Cell
                  style={{
                    borderBottom: "2.6px solid rgba(135,137,141,0.3)",
                  }}
                  className="shadow-none border-b-[2.6px] py-0 h-5"
                >
                  {d.salesmanName}
                </Table.Cell>
                <Table.Cell
                  style={{
                    borderBottom: "2.6px solid rgba(135,137,141,0.3)",
                  }}
                  className="shadow-none border-b-[2.6px] py-0 h-5"
                >
                  {d.salesOrders}
                </Table.Cell>
                <Table.Cell
                  style={{
                    borderBottom: "2.6px solid rgba(135,137,141,0.3)",
                  }}
                  className="shadow-none border-b-[2.6px] py-0 h-5"
                >
                  {d.sales}k
                </Table.Cell>
                <Table.Cell
                  style={{
                    borderBottom: "2.6px solid rgba(135,137,141,0.3)",
                  }}
                  className="shadow-none border-b-[2.6px] py-0 h-5"
                >
                  <Text color="green">{d.achievementPercentage}%</Text>
                </Table.Cell>
              </Table.Row>
            ))}

            {/* <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
            <Table.Cell
              style={{ borderBottom: "2.6px solid rgba(135,137,141,0.3)" }}
              className="shadow-none border-b-[2.6px] py-0 h-5"
            >
              Tehmina
            </Table.Cell>
            <Table.Cell
              style={{ borderBottom: "2.6px solid rgba(135,137,141,0.3)" }}
              className="shadow-none border-b-[2.6px] py-0 h-5"
            >
              120
            </Table.Cell>
            <Table.Cell
              style={{ borderBottom: "2.6px solid rgba(135,137,141,0.3)" }}
              className="shadow-none border-b-[2.6px] py-0 h-5"
            >
              73k
            </Table.Cell>
            <Table.Cell
              style={{ borderBottom: "2.6px solid rgba(135,137,141,0.3)" }}
              className="shadow-none border-b-[2.6px] py-0 h-5"
            >
              <Text className="text-[#FBC398]">60%</Text>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
            <Table.Cell
              style={{ borderBottom: "2.6px solid rgba(135,137,141,0.3)" }}
              className="shadow-none border-b-[2.6px] py-0 h-5"
            >
              Tehmina
            </Table.Cell>
            <Table.Cell
              style={{ borderBottom: "2.6px solid rgba(135,137,141,0.3)" }}
              className="shadow-none border-b-[2.6px] py-0 h-5"
            >
              120
            </Table.Cell>
            <Table.Cell
              style={{ borderBottom: "2.6px solid rgba(135,137,141,0.3)" }}
              className="shadow-none border-b-[2.6px] py-0 h-5"
            >
              73k
            </Table.Cell>
            <Table.Cell
              style={{ borderBottom: "2.6px solid rgba(135,137,141,0.3)" }}
              className="shadow-none border-b-[2.6px] py-0 h-5"
            >
              <Text className="text-[#FBC398]">52%</Text>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
            <Table.Cell
              style={{ borderBottom: "2.6px solid rgba(135,137,141,0.3)" }}
              className="shadow-none border-b-[2.6px] py-0 h-5"
            >
              Tehmina
            </Table.Cell>
            <Table.Cell
              style={{ borderBottom: "2.6px solid rgba(135,137,141,0.3)" }}
              className="shadow-none border-b-[2.6px] py-0 h-5"
            >
              120
            </Table.Cell>
            <Table.Cell
              style={{ borderBottom: "2.6px solid rgba(135,137,141,0.3)" }}
              className="shadow-none border-b-[2.6px] py-0 h-5"
            >
              73k
            </Table.Cell>
            <Table.Cell
              style={{ borderBottom: "2.6px solid rgba(135,137,141,0.3)" }}
              className="shadow-none border-b-[2.6px] py-0 h-5"
            >
              <Text className="text-[#DF5B3C]">33%</Text>
            </Table.Cell>
          </Table.Row> */}
          </Table.Body>
        </Table.Root>
      </ScrollArea>
    </Box>
  );
};

export default OrderPerformance;
