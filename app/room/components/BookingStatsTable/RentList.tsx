import TableHeader from "@/app/components/TableHeader";
import TableRoot from "@/app/components/TableRoot";
import TableRowHeaderCell from "@/app/components/TableRowHeaderCell";
import { Table } from "@radix-ui/themes";

const RentList = () => {
  return (
    <TableRoot>
      <TableHeader>
        <Table.Row className="!text-white">
          <Table.ColumnHeaderCell className="rounded-tl-lg">
            RENT
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="rounded-tr-lg"></Table.ColumnHeaderCell>
        </Table.Row>
      </TableHeader>

      <Table.Body className="bg-theme text-sm">
        <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
          <TableRowHeaderCell>Total Tonight</TableRowHeaderCell>
          <Table.Cell>33,000</Table.Cell>
        </Table.Row>
        <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
          <TableRowHeaderCell>Total Today</TableRowHeaderCell>
          <Table.Cell>1,354,010</Table.Cell>
        </Table.Row>
        <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
          <TableRowHeaderCell>Total Average</TableRowHeaderCell>
          <Table.Cell>11,000</Table.Cell>
        </Table.Row>
      </Table.Body>
    </TableRoot>
  );
};

export default RentList;
