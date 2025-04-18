import { convertToTitleCase } from "@/app/utils/utils";
import {
  Badge,
  Box,
  Flex,
  Heading,
  Progress,
  ScrollArea,
  Table,
} from "@radix-ui/themes";
import { RoomSalesList } from "../../page";

const RoomSales = ({ data }: { data: RoomSalesList[] }) => {
  return (
    <Box className="bg-theme rounded-[14px]" p="4">
      <Flex justify="between" align="center">
        <Heading className="font-semibold" size="6">
          Room Sales
        </Heading>
        {/* <Flex>
          In this Week <GoTriangleDown size={21} />
        </Flex> */}
      </Flex>
      <ScrollArea type="auto" scrollbars="vertical" style={{ height: 360 }}>
        <Table.Root size="3">
          <Table.Header>
            <Table.Row className="!text-secondary !font-medium ">
              {Object.keys(data[0]).map((d, i) => {
                if (i === 0) {
                  return (
                    <Table.ColumnHeaderCell key={i} className="!rounded-tl-lg">
                      #
                    </Table.ColumnHeaderCell>
                  );
                } else if (i === data.length) {
                  return (
                    <Table.ColumnHeaderCell key={i}>
                      {convertToTitleCase(d)}
                    </Table.ColumnHeaderCell>
                  );
                } else {
                  return (
                    <Table.ColumnHeaderCell key={i}>
                      {convertToTitleCase(d)}
                    </Table.ColumnHeaderCell>
                  );
                }
              })}
            </Table.Row>
          </Table.Header>

          <Table.Body className="!bg-theme !text-sm !font-medium">
            {data?.map((d: RoomSalesList, i) => (
              <Table.Row
                key={i}
                className="hover:bg-[#C6C6C61A] transition-colors"
              >
                {Object.keys(d).map((key, j) => {
                  const field = key as keyof typeof d;
                  if (j === 0) {
                    return (
                      <Table.RowHeaderCell key={j}>{i + 1}</Table.RowHeaderCell>
                    );
                  } else if (field === "capacity") {
                    return (
                      <Table.Cell
                        key={j}
                        className="!flex !items-center !h-full"
                      >
                        <Progress
                          size="3"
                          radius="full"
                          value={parseFloat(d[field])}
                          color={
                            parseFloat(d[field]) < 10
                              ? "orange"
                              : parseFloat(d[field]) < 50
                              ? "blue"
                              : "green"
                          }
                          className="h-[5px]"
                        />
                      </Table.Cell>
                    );
                  } else if (field === "percentageUsed") {
                    return (
                      <Table.Cell key={j} className="text-center">
                        <Badge
                          color={
                            parseFloat(d[field]) < 10
                              ? "orange"
                              : parseFloat(d[field]) < 50
                              ? "blue"
                              : "green"
                          }
                          size="3"
                          variant="outline"
                        >
                          {d[field]}%
                        </Badge>
                      </Table.Cell>
                    );
                  } else if (field === "sales") {
                    return <Table.Cell key={j}>{d[field]} Rs/-</Table.Cell>;
                  } else {
                    return <Table.Cell key={j}>{d[field]}</Table.Cell>;
                  }
                })}
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </ScrollArea>
    </Box>
  );
};

export default RoomSales;
