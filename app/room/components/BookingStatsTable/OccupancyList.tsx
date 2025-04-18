import TableHeader from "@/app/components/TableHeader";
import TableRoot from "@/app/components/TableRoot";
import TableRowHeaderCell from "@/app/components/TableRowHeaderCell";
import { Table } from "@radix-ui/themes";

const OccupancyList = () => {
  return (
    <TableRoot>
      <TableHeader>
        <Table.Row className="!text-white">
          <Table.ColumnHeaderCell className="rounded-tl-lg">
            OCCUPANCY
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Rooms</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="rounded-tr-lg">
            %age
          </Table.ColumnHeaderCell>
        </Table.Row>
      </TableHeader>

      <Table.Body className="bg-theme text-sm">
        <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
          <TableRowHeaderCell>Total Tonight</TableRowHeaderCell>
          <Table.Cell>3</Table.Cell>
          <Table.Cell>15.79%</Table.Cell>
        </Table.Row>
        <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
          <TableRowHeaderCell>Total Today</TableRowHeaderCell>
          <Table.Cell>140</Table.Cell>
          <Table.Cell>169%</Table.Cell>
        </Table.Row>
        <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
          <TableRowHeaderCell>Total Average</TableRowHeaderCell>
          <Table.Cell>35.00</Table.Cell>
          <Table.Cell>31.75%</Table.Cell>
        </Table.Row>
      </Table.Body>
    </TableRoot>
  );
};

export default OccupancyList;
