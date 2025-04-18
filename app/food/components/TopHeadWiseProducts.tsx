import ProgressBar from "@/app/components/ProgressBar";
import { Box, Heading, ScrollArea, Table } from "@radix-ui/themes";
import { TopSellingHeadWiseProduct } from "../page";

const TopHeadWiseProducts = ({
  data,
}: {
  data: TopSellingHeadWiseProduct[];
}) => {
  return (
    <Box className="bg-theme rounded-[17px]" p="4">
      <Heading weight="bold" size="6">
        Top Selling Head wise Sale
      </Heading>
      <ScrollArea type="auto" scrollbars="vertical" style={{ height: 300 }}>
        <Table.Root size="3">
          <Table.Header>
            <Table.Row className="text-secondary font-normal">
              <Table.ColumnHeaderCell className="shadow-none pb-0">
                Item Head Name
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="shadow-none pb-0 text-center">
                Quantity
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="shadow-none pb-0 text-end">
                Sales Order
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {data?.map((d, i) => (
              <Table.Row
                key={i}
                className="hover:bg-[#C6C6C61A] transition-colors"
              >
                <Table.Cell
                  style={{ borderBottom: "2.6px solid rgba(135,137,141,0.3)" }}
                  className="shadow-none border-b-[2.6px] py-0 h-5"
                >
                  {d.itemHeadName}
                </Table.Cell>
                <Table.Cell
                  style={{ borderBottom: "2.6px solid rgba(135,137,141,0.3)" }}
                  className="shadow-none border-b-[2.6px] py-0 h-5 text-center"
                >
                  {d.quantity}
                </Table.Cell>
                <Table.Cell
                  style={{ borderBottom: "2.6px solid rgba(135,137,141,0.3)" }}
                  className="shadow-none border-b-[2.6px] py-0 h-5 text-end"
                >
                  <Box width="full" className="flex">
                    <ProgressBar
                      value={d.salesOrder}
                      direction="rtl"
                      className="bg-transparent rounded-none"
                      label={`${d.salesOrder}K`}
                      labelAlignment="end"
                    />
                  </Box>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </ScrollArea>
    </Box>
  );
};

export default TopHeadWiseProducts;
