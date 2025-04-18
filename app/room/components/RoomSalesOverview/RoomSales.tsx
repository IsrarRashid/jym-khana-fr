import { Badge, Box, Flex, Heading, Progress, Table } from "@radix-ui/themes";
import { GoTriangleDown } from "react-icons/go";

const RoomSales = () => {
  return (
    <Box className="bg-theme rounded-[14px]" p="4">
      <Flex justify="between" align="center">
        <Heading className="font-semibold" size="3">
          Room Sales
        </Heading>
        <Flex>
          In this Week <GoTriangleDown size={21} />
        </Flex>
      </Flex>
      <Table.Root size="3">
        <Table.Header>
          <Table.Row className="text-secondary font-medium">
            <Table.ColumnHeaderCell className="rounded-tl-lg">
              #
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Popularity</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="text-center">
              %
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="rounded-tr-lg">
              Sales
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body className="bg-theme text-sm">
          <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
            <Table.RowHeaderCell>01</Table.RowHeaderCell>
            <Table.Cell>Minibar Sale</Table.Cell>
            <Table.Cell className="flex items-center h-full">
              <Progress
                size="3"
                radius="full"
                value={60}
                color="orange"
                className="h-[5px]"
              />
            </Table.Cell>
            <Table.Cell className="text-center">
              <Badge color="orange" size="3" variant="outline">
                45%
              </Badge>
            </Table.Cell>
            <Table.Cell>2000 Rs/-</Table.Cell>
          </Table.Row>
          <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
            <Table.RowHeaderCell>02</Table.RowHeaderCell>
            <Table.Cell>Miscellaneous Sale</Table.Cell>
            <Table.Cell className="flex items-center h-full">
              <Progress
                size="3"
                radius="full"
                value={70}
                color="mint"
                className="h-[5px]"
              />
            </Table.Cell>
            <Table.Cell className="text-center">
              <Badge color="mint" size="3" variant="outline">
                17%
              </Badge>
            </Table.Cell>
            <Table.Cell>500 Rs/-</Table.Cell>
          </Table.Row>
          <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
            <Table.RowHeaderCell>03</Table.RowHeaderCell>
            <Table.Cell>Food Sale</Table.Cell>
            <Table.Cell className="flex items-center h-full">
              <Progress
                size="3"
                radius="full"
                value={50}
                color="blue"
                className="h-[5px]"
              />
            </Table.Cell>
            <Table.Cell className="text-center">
              <Badge color="mint" size="3" variant="outline">
                19%
              </Badge>
            </Table.Cell>
            <Table.Cell>6000 Rs/-</Table.Cell>
          </Table.Row>
          <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
            <Table.RowHeaderCell>03</Table.RowHeaderCell>
            <Table.Cell>Food Sale</Table.Cell>
            <Table.Cell className="flex items-center h-full">
              <Progress
                size="3"
                radius="full"
                value={50}
                color="blue"
                className="h-[5px]"
              />
            </Table.Cell>
            <Table.Cell className="text-center">
              <Badge color="mint" size="3" variant="outline">
                19%
              </Badge>
            </Table.Cell>
            <Table.Cell>6000 Rs/-</Table.Cell>
          </Table.Row>
          <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
            <Table.RowHeaderCell>03</Table.RowHeaderCell>
            <Table.Cell>Food Sale</Table.Cell>
            <Table.Cell className="flex items-center h-full">
              <Progress
                size="3"
                radius="full"
                value={50}
                color="blue"
                className="h-[5px]"
              />
            </Table.Cell>
            <Table.Cell className="text-center">
              <Badge color="mint" size="3" variant="outline">
                19%
              </Badge>
            </Table.Cell>
            <Table.Cell>6000 Rs/-</Table.Cell>
          </Table.Row>
          <Table.Row className="hover:bg-[#C6C6C61A] transition-colors">
            <Table.RowHeaderCell>03</Table.RowHeaderCell>
            <Table.Cell>Food Sale</Table.Cell>
            <Table.Cell className="flex items-center h-full">
              <Progress
                size="3"
                radius="full"
                value={50}
                color="blue"
                className="h-[5px]"
              />
            </Table.Cell>
            <Table.Cell className="text-center">
              <Badge color="mint" size="3" variant="outline">
                19%
              </Badge>
            </Table.Cell>
            <Table.Cell>6000 Rs/-</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

export default RoomSales;
