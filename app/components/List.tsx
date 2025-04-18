// import ProgressBar from "@/app/components/ProgressBar";
// import { Box, Heading, ScrollArea, Table } from "@radix-ui/themes";
// import { convertToTitleCase } from "@/app/utils/utils";

// type Props<T extends Record<string, any>> = {
//   data: T[];
// };

// const List = <T extends Record<string, any>>({ data }: Props<T>) => {
//   return (
//     <Box className="bg-theme rounded-[17px]" p="4">
//       <Heading weight="bold" size="6">
//         Top Selling Products
//       </Heading>
//       <ScrollArea type="auto" scrollbars="vertical" style={{ height: 470 }}>
//         <Table.Root size="3">
//           <Table.Header>
//             <Table.Row className="text-secondary font-normal">
//               {Object.keys(data[0]).map((d, i) => (
//                 <Table.ColumnHeaderCell key={i} className="shadow-none pb-0">
//                   {convertToTitleCase(d)}
//                 </Table.ColumnHeaderCell>
//               ))}
//             </Table.Row>
//           </Table.Header>

//           <Table.Body>
//             {data?.map((d: T, i) => (
//               <Table.Row
//                 key={i}
//                 className="hover:bg-[#C6C6C61A] transition-colors"
//               >
//                 {Object.keys(d).map((key, i) => {
//                   const field = key as keyof typeof d;
//                   if (i === 0) {
//                     return (
//                       <Table.RowHeaderCell
//                         key={i}
//                         style={{
//                           borderBottom: "2.6px solid rgba(135,137,141,0.3)",
//                         }}
//                         className="shadow-none border-b-[2.6px] py-0 h-5"
//                       >
//                         {d[field]}
//                       </Table.RowHeaderCell>
//                     );
//                   } else if (field === "salesOrder") {
//                     return (
//                       <Table.Cell
//                         key={i}
//                         style={{
//                           borderBottom: "2.6px solid rgba(135,137,141,0.3)",
//                         }}
//                         className="shadow-none border-b-[2.6px] py-0 h-5 text-end"
//                       >
//                         <Box width="full" className="flex">
//                           <ProgressBar
//                             value={d[field]}
//                             direction="rtl"
//                             className="bg-transparent rounded-none"
//                             label={`${d[field]}K`}
//                             labelAlignment="end"
//                           />
//                         </Box>
//                       </Table.Cell>
//                     );
//                   } else {
//                     return (
//                       <Table.Cell
//                         key={i}
//                         style={{
//                           borderBottom: "2.6px solid rgba(135,137,141,0.3)",
//                         }}
//                         className="shadow-none border-b-[2.6px] py-0 h-5 text-center"
//                       >
//                         {d[field]}
//                       </Table.Cell>
//                     );
//                   }
//                 })}
//               </Table.Row>
//             ))}
//           </Table.Body>
//         </Table.Root>
//       </ScrollArea>
//     </Box>
//   );
// };

// export default List;
