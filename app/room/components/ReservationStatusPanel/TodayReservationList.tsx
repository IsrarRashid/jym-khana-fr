import TableHeader from "@/app/components/TableHeader";
import TableRoot from "@/app/components/TableRoot";
import { Box, Heading, Table, Text } from "@radix-ui/themes";

const TodayReservationList = () => {
  return (
    <Box>
      <Heading size="4" mb="3">
        Today Reservation
      </Heading>
      <TableRoot>
        <TableHeader classStyles="text-center">
          <Table.Row className="!text-white">
            <Table.ColumnHeaderCell className="rounded-tl-lg">
              Guest Name
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Member ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="rounded-tr-lg">
              Room Type
            </Table.ColumnHeaderCell>
          </Table.Row>
        </TableHeader>

        <Table.Body className="bg-theme text-sm text-center">
          <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
            <Table.RowHeaderCell>Khalid Ali</Table.RowHeaderCell>
            <Table.Cell>01-00000-01</Table.Cell>
            <Table.Cell>AC</Table.Cell>
          </Table.Row>
          <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
            <Table.RowHeaderCell>Khalid Ali</Table.RowHeaderCell>
            <Table.Cell>01-00000-01</Table.Cell>
            <Table.Cell>AC</Table.Cell>
          </Table.Row>
          <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
            <Table.RowHeaderCell>Khalid Ali</Table.RowHeaderCell>
            <Table.Cell>01-00000-01</Table.Cell>
            <Table.Cell>AC</Table.Cell>
          </Table.Row>
          <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
            <Table.RowHeaderCell>Khalid Ali</Table.RowHeaderCell>
            <Table.Cell>01-00000-01</Table.Cell>
            <Table.Cell>AC</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell className="text-start">
              Page 1 | 1 of 1
            </Table.RowHeaderCell>
            <Table.Cell className="text-center">Reports: 3 Records</Table.Cell>
            <Table.Cell className="text-end">
              <Text className=" px-4 py-2">1</Text>
              <Text className="bg-[#000D2A1A] rounded-full px-4 py-2">2</Text>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </TableRoot>
    </Box>
  );
};

export default TodayReservationList;
