import TableHeader from "@/app/components/TableHeader";
import TableRoot from "@/app/components/TableRoot";
import { convertToTitleCase } from "@/app/utils/utils";
import { ScrollArea, Table } from "@radix-ui/themes";
import { MemberTypeCount } from "../../page";

const MemberTypeCountList = ({ data }: { data: MemberTypeCount[] }) => {
  return (
    <ScrollArea type="auto" scrollbars="vertical" style={{ height: 500 }}>
      <TableRoot>
        <TableHeader>
          <Table.Row className="!text-white">
            {Object.keys(data[0]).map((d, i) => (
              <Table.ColumnHeaderCell key={i} className="!rounded-tl-lg">
                {convertToTitleCase(d)}
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </TableHeader>

        <Table.Body className="bg-theme text-sm">
          {data.map((d: MemberTypeCount, i) => (
            <Table.Row
              key={i}
              className="hover:bg-[#C6C6C61A] transition-colors"
            >
              {Object.keys(d).map((key, j) => {
                const field = key as keyof typeof d;
                if (j === 0) {
                  return (
                    <Table.RowHeaderCell key={j}>
                      {d[field]}
                    </Table.RowHeaderCell>
                  );
                } else {
                  return <Table.Cell key={j}>{d[field]}</Table.Cell>;
                }
              })}
            </Table.Row>
          ))}
        </Table.Body>
      </TableRoot>
    </ScrollArea>
  );
};

export default MemberTypeCountList;
