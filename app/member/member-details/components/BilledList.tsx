import TableHeader from "@/app/components/TableHeader";
import TableRoot from "@/app/components/TableRoot";
import { Table, Text } from "@radix-ui/themes";

const BilledList = () => {
  return (
    <TableRoot>
      <TableHeader>
        <Table.Row className="!text-white">
          <Table.ColumnHeaderCell className="rounded-tl-lg">
            Facility
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Opening Balance</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Total Invoice</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Total</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Payment</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="rounded-tr-lg">
            Balance
          </Table.ColumnHeaderCell>
        </Table.Row>
      </TableHeader>

      <Table.Body className="bg-theme text-sm">
        <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
          <Table.RowHeaderCell>Dine in</Table.RowHeaderCell>
          <Table.Cell>0</Table.Cell>
          <Table.Cell>0</Table.Cell>
          <Table.Cell>0</Table.Cell>
          <Table.Cell>6500</Table.Cell>
          <Table.Cell>-6500</Table.Cell>
        </Table.Row>
        <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
          <Table.RowHeaderCell>Dine in</Table.RowHeaderCell>
          <Table.Cell>0</Table.Cell>
          <Table.Cell>0</Table.Cell>
          <Table.Cell>0</Table.Cell>
          <Table.Cell>6500</Table.Cell>
          <Table.Cell>-6500</Table.Cell>
        </Table.Row>
        <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
          <Table.RowHeaderCell>Dine in</Table.RowHeaderCell>
          <Table.Cell>0</Table.Cell>
          <Table.Cell>0</Table.Cell>
          <Table.Cell>0</Table.Cell>
          <Table.Cell>6500</Table.Cell>
          <Table.Cell>-6500</Table.Cell>
        </Table.Row>
        <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
          <Table.RowHeaderCell>Dine in</Table.RowHeaderCell>
          <Table.Cell>0</Table.Cell>
          <Table.Cell>0</Table.Cell>
          <Table.Cell>0</Table.Cell>
          <Table.Cell>6500</Table.Cell>
          <Table.Cell>-6500</Table.Cell>
        </Table.Row>
        <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
          <Table.RowHeaderCell>Dine in</Table.RowHeaderCell>
          <Table.Cell>0</Table.Cell>
          <Table.Cell>0</Table.Cell>
          <Table.Cell>0</Table.Cell>
          <Table.Cell>6500</Table.Cell>
          <Table.Cell>-6500</Table.Cell>
        </Table.Row>
        <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
          <Table.RowHeaderCell>Dine in</Table.RowHeaderCell>
          <Table.Cell>0</Table.Cell>
          <Table.Cell>0</Table.Cell>
          <Table.Cell>0</Table.Cell>
          <Table.Cell>6500</Table.Cell>
          <Table.Cell>-6500</Table.Cell>
        </Table.Row>
        <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
          <Table.RowHeaderCell>Dine in</Table.RowHeaderCell>
          <Table.Cell>0</Table.Cell>
          <Table.Cell>0</Table.Cell>
          <Table.Cell>0</Table.Cell>
          <Table.Cell>6500</Table.Cell>
          <Table.Cell>-6500</Table.Cell>
        </Table.Row>
        <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
          <Table.RowHeaderCell>Dine in</Table.RowHeaderCell>
          <Table.Cell>0</Table.Cell>
          <Table.Cell>0</Table.Cell>
          <Table.Cell>0</Table.Cell>
          <Table.Cell>6500</Table.Cell>
          <Table.Cell>-6500</Table.Cell>
        </Table.Row>
        <Table.Row className="hover:bg-[#C6C6C61A] transition-colors font-semibold">
          <Table.RowHeaderCell>Grand Total</Table.RowHeaderCell>
          <Table.Cell>0</Table.Cell>
          <Table.Cell>4000</Table.Cell>
          <Table.Cell>4000</Table.Cell>
          <Table.Cell>14500</Table.Cell>
          <Table.Cell>-10500</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeaderCell>Page 1 | 1 of 1</Table.RowHeaderCell>
          <Table.Cell colSpan={4} className="text-center">
            Reports: 3 Records
          </Table.Cell>
          <Table.Cell>
            <Text className=" px-4 py-2">1</Text>
            <Text className="bg-[#000D2A1A] rounded-full px-4 py-2">2</Text>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </TableRoot>
  );
};

export default BilledList;
