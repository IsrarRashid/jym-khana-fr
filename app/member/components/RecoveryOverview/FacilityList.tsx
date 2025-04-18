import TableHeader from "@/app/components/TableHeader";
import TableRoot from "@/app/components/TableRoot";
import { Box, Flex, Heading, Table, Text } from "@radix-ui/themes";

const FacilityList = () => {
  return (
    <Box>
      <Heading size="5" className="font-semibold" mb="4">
        Head wise Recovery
      </Heading>
      <TableRoot>
        <TableHeader>
          <Table.Row className="!text-white">
            <Table.ColumnHeaderCell className="rounded-tl-lg">
              Facility
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="rounded-tr-lg">
              Amount
            </Table.ColumnHeaderCell>
          </Table.Row>
        </TableHeader>

        <Table.Body className="bg-theme text-sm">
          <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
            <Table.RowHeaderCell>Dine in</Table.RowHeaderCell>
            <Table.Cell>6500</Table.Cell>
          </Table.Row>
          <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
            <Table.RowHeaderCell>Monthly</Table.RowHeaderCell>
            <Table.Cell>3900</Table.Cell>
          </Table.Row>
          <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
            <Table.RowHeaderCell>Monthly</Table.RowHeaderCell>
            <Table.Cell>3900</Table.Cell>
          </Table.Row>
          <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
            <Table.RowHeaderCell>Monthly</Table.RowHeaderCell>
            <Table.Cell>3900</Table.Cell>
          </Table.Row>
          <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
            <Table.RowHeaderCell>Monthly</Table.RowHeaderCell>
            <Table.Cell>3900</Table.Cell>
          </Table.Row>
          <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
            <Table.RowHeaderCell>Staff Fund</Table.RowHeaderCell>
            <Table.Cell>100</Table.Cell>
          </Table.Row>
          <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
            <Table.RowHeaderCell>Grand Total</Table.RowHeaderCell>
            <Table.Cell>10500</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Page 1 | 1 of 1</Table.RowHeaderCell>
            <Table.Cell colSpan={2} className="text-center">
              <Flex justify="between">
                <Text className="text-secondary">Reports: 3 Records</Text>
                <Flex>
                  <Text className=" px-4 py-2">1</Text>
                  <Text className="bg-[#000D2A1A] rounded-full px-4 py-2">
                    2
                  </Text>
                </Flex>
              </Flex>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </TableRoot>
    </Box>
  );
};

export default FacilityList;
