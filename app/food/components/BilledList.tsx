import TableHeader from "@/app/components/TableHeader";
import TableRoot from "@/app/components/TableRoot";
import { ScrollArea, Table } from "@radix-ui/themes";
import { BillSummay } from "../page";
import { convertToTitleCase } from "@/app/utils/utils";

const BilledList = ({ billSummary }: { billSummary: BillSummay[] }) => {
  return (
    <ScrollArea type="auto" scrollbars="vertical" style={{ height: 300 }}>
      <TableRoot>
        <TableHeader>
          <Table.Row className="!text-white">
            {Object?.keys(billSummary[0])?.map((bill, i) => {
              if (i === 0) {
                return (
                  <Table.ColumnHeaderCell key={i} className="!rounded-tl-lg">
                    {convertToTitleCase(bill)}
                  </Table.ColumnHeaderCell>
                );
              } else if (i === billSummary.length) {
                return (
                  <Table.ColumnHeaderCell key={i}>
                    {convertToTitleCase(bill)}
                  </Table.ColumnHeaderCell>
                );
              } else if (i === Object?.keys(billSummary[0]).length - 1) {
                return (
                  <Table.ColumnHeaderCell key={i} className="!rounded-tr-lg">
                    {convertToTitleCase(bill)}
                  </Table.ColumnHeaderCell>
                );
              } else {
                return (
                  <Table.ColumnHeaderCell key={i}>
                    {convertToTitleCase(bill)}
                  </Table.ColumnHeaderCell>
                );
              }
            })}
          </Table.Row>
        </TableHeader>

        <Table.Body className="bg-theme text-sm">
          {billSummary.map((bill: BillSummay) => (
            <Table.Row
              key={bill.billId}
              className="hover:bg-[#C6C6C61A] transition-colors"
            >
              {Object.keys(bill).map((key, i) => {
                const field = key as keyof typeof bill;
                if (i === 0) {
                  return (
                    <Table.RowHeaderCell key={i}>
                      {bill[field]}
                    </Table.RowHeaderCell>
                  );
                } else if (field === "billDate") {
                  return (
                    <Table.Cell key={i}>
                      {new Date(bill[field]).toLocaleDateString()}
                    </Table.Cell>
                  );
                } else {
                  return <Table.Cell key={i}>{bill[field]}</Table.Cell>;
                }
              })}
            </Table.Row>
          ))}
        </Table.Body>
      </TableRoot>
    </ScrollArea>
  );
};

export default BilledList;
