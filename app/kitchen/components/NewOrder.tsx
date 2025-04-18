// "use client";
// import React, { useState, useRef } from "react";
// // import { MdOutlineTableBar } from "react-icons/md";
// import { PiDotsThreeOutlineFill } from "react-icons/pi";
// import "./ScrollbarCustom.css";
// import Image from "next/image";
// import { KitchenList } from "../hooks/useKitchenOrders";
// import dishPic from "../../public/images/dishPic.png";
// import useElapsedTime from "../Components/useElapsedTime";

// interface Props {
//   data: KitchenList[];
//   menuHandler: (status: boolean) => void;
// }
// const NewOrder = ({ data, menuHandler }: Props) => {
//   const sectionRef = useRef<HTMLDivElement>(null); // Reference to measure the full height

//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleExpand = () => {
//     setIsExpanded((prev) => !prev);
//   };

//   // // Sample data for tables
//   // const tables = [
//   //   { id: 1, name: "Table 21" },
//   //   { id: 2, name: "Table 22" },
//   //   { id: 3, name: "Table 23" },
//   //   { id: 4, name: "Table 24" },
//   //   { id: 5, name: "Table 25" },
//   //   { id: 6, name: "Table 26" },
//   //   { id: 7, name: "Table 27" },
//   //   { id: 8, name: "Table 28" },
//   //   { id: 9, name: "Table 29" },
//   //   { id: 10, name: "Table 30" },
//   //   { id: 11, name: "Table 31" },
//   //   { id: 12, name: "Table 32" },
//   //   { id: 13, name: "Table 33" },
//   //   { id: 14, name: "Table 34" },
//   //   { id: 15, name: "Table 35" },
//   // ];

//   // Timer logic for each table
//   // const [timers, setTimers] = useState<{ [key: number]: number }>({});
//   // const [selectedTable, setSelectedTable] = useState<number | null>(null); // State for selected table

//   const orderTimer = (orderTime: string) => {
//     return useElapsedTime(orderTime);
//   };

//   return (
//     <div className="bg-white shadow-xl rounded-2xl px-4">
//       <section className="flex justify-between">
//         <h2 className="text-2xl font-bold px-2 text-[#2B3674]">New Order</h2>
//         <div
//           className="bg-[#F4F7FE] px-3 py-2 rounded-xl mt-2 cursor-pointer"
//           onClick={toggleExpand}
//         >
//           {isExpanded ? (
//             <span className="text-xl">✖</span> // Close icon
//           ) : (
//             <PiDotsThreeOutlineFill className="text-xl text-[#2b3674]" />
//           )}
//         </div>
//       </section>
//       <section
//         ref={sectionRef}
//         className="flex flex-wrap justify-normal gap-4 my-2 overflow-hidden transition-all duration-300 ease-in-out overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 custom-scrollbar"
//         style={{
//           height: isExpanded
//             ? sectionRef.current?.scrollHeight + "px"
//             : "10rem", // Collapsed height (10rem = h-40)
//         }}
//       >
//         {data?.map((order, i) => (
//           <div
//             key={i}
//             // onClick={() => handleTableClick(order.id)} // Handle card click
//             className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] xl:w-[12%] flex flex-col items-center bg-white rounded-xl shadow-sm border py-1 px-6 border-[#F1F1F1]"
//           >
//             <h3 className="font-semibold text-lg text-center text-[#3C3C3C]">
//               {order.tableName}
//             </h3>
//             {/* <MdOutlineTableBar className="text-5xl text-center my-1" /> */}
//             <Image src={dishPic} alt="disPic" className="w-10 h-10" />
//             <h3 className="font-semibold text-base text-[#3C3C3C] text-center">
//               {orderTimer(order.orderTime)}
//             </h3>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default NewOrder;
