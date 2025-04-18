"use client";
import { KITCHEN_API } from "@/app/APIs";
import apiClient from "@/app/services/api-client";
import { calculateElapsedMinutes, formatTime } from "@/app/utils/utils";
import { useThemeContext } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoHourglassOutline } from "react-icons/io5";

interface KotDetails {
  kotId: number;
  code: number;
  itemName: string;
  qty: number;
  isize: string;
  price: number;
  amount: number;
  type: boolean;
  served: boolean;
  menuId: number;
  id: number;
  createdAt: string;
  updatedAt: string;
  remarks: string;
}

interface KotMain {
  kotId: number;
  cdate: string;
  kot: number;
  tableNo: string;
  otaker: string;
  userName: string;
  status: boolean;
  otime: string;
  diff: boolean;
  resId: number;
  phone: string;
  name: string;
  address: string;
  customerType: string;
  customerId: string;
  pstatus: boolean;
  createdAt: string;
  updatedAt: string;
  billId: number;
  id: number;
  requestType: number;
}

interface OrderDetail {
  kotMain: KotMain;
  kotDetails: KotDetails[];
}

interface SingleKitchen {
  orderDetail: OrderDetail[];
}

interface MenuDetailsProps {
  tableName: string;
  menuHandler: (status: boolean, tableName: string) => void;
}

const MenuDetails = ({ tableName, menuHandler }: MenuDetailsProps) => {
  const theme = useThemeContext();
  const [data, setData] = useState<SingleKitchen>();

  useEffect(() => {
    const loadItems = async (tableName: string) => {
      const response = await apiClient.get(
        `${KITCHEN_API}/GetSinglekitchen?tableName=${tableName}`
      );
      setData(response.data);
      console.log(response.data);
    };
    if (tableName && tableName.length > 0) loadItems(tableName);
  }, [tableName]);

  const [serveAllStatus, setServeAllStatus] = useState(false);
  console.log(serveAllStatus);
  // Method to change all order statuses to "ok"
  // const handleServceAll = () => {
  //   if (data) {
  //     for (let i = 0; i < data?.orderDetail[0].kotDetails.length; i++) {
  //       handleSubmit(data?.orderDetail[0].kotDetails[i].id);
  //     }
  //   }
  //   setServeAllStatus(true);
  // };

  // const handleSubmit = async (id: number) => {
  //   const response = await apiClient.post(
  //     `${KITCHEN_API}/UpdateKitchenOrder?kotDetailId=${id}`
  //   );
  //   console.log(response);
  //   setRefresh((prev) => !prev);
  // };

  useEffect(() => {
    if (data && data?.orderDetail[0].kotDetails) {
      // Convert the ternary into a proper assignment
      setServeAllStatus(
        data?.orderDetail[0].kotDetails.filter(
          (order) => order.served === false
        ).length === 0
      );

      const itemPerformance = 100 / data?.orderDetail[0]?.kotDetails.length;
      const itemCount = data?.orderDetail[0]?.kotDetails.filter(
        (order) => order.served === true
      ).length;
      setFinalPerformance(itemCount * itemPerformance);
    }
  }, [data]);

  const [finalPerformance, setFinalPerformance] = useState<number>(0);

  return (
    <>
      <div className="bg-theme shadow-xl rounded-2xl p-4">
        <div className="flex justify-end">
          <button onClick={() => menuHandler(false, "")}>
            <IoMdCloseCircleOutline className="text-2xl" />
          </button>
        </div>
        <div className="flex justify-between">
          <div>
            <div
              className={`${theme.appearance === "light" && "text-[#1B2559]"}`}
            >
              <span className="text-[1.25rem] font-bold"> Member ID: </span>
              <span> {data?.orderDetail[0]?.kotMain?.customerId}</span>
            </div>
            <h4 className="mt-0 pt-0 text-[0.813rem]">
              <span className="font-semibold"> Member Name: </span>{" "}
              <span className="font-normal">
                {data?.orderDetail[0]?.kotMain?.name}
              </span>
            </h4>
          </div>
          <div>
            <div
              className={`text-base ${
                theme.appearance === "light" && "text-[#1B2559]"
              }`}
            >
              <span className="font-bold"> Table: </span>
              <span>{data?.orderDetail[0]?.kotMain?.tableNo}</span>
            </div>
            <h4 className="mt-0 pt-0 text-[12px]">
              <span className="font-medium"> Order Taker: </span>{" "}
              {data?.orderDetail[0]?.kotMain?.otaker}
            </h4>
          </div>
        </div>
        {/* Section 2 */}
        <section
          className={`flex flex-wrap justify-between ${
            theme.appearance === "light"
              ? "bg-[rgba(0,0,0,0.09)]"
              : "bg-[rgba(255,255,255,0.09)]"
          } rounded-lg py-3 px-4 my-2`}
        >
          <div className="">
            <div className="flex gap-2">
              <IoHourglassOutline className="text-lg text-[#4318FF] mt-1" />
              <div>
                <h2
                  className={`text-base font-bold ${
                    theme.appearance === "light" && "text-[#1B2559]"
                  }`}
                >
                  Preparing
                </h2>
                <h3 className="text-xs text-[#2B2B2B] font-medium">
                  {data?.orderDetail[0]?.kotMain?.otime &&
                    formatTime(data?.orderDetail[0]?.kotMain?.otime)}
                </h3>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-textThmClr mt-2 font-semibold">
              Ongoing:{" "}
              {data?.orderDetail[0]?.kotMain?.otime &&
                calculateElapsedMinutes(
                  data?.orderDetail[0]?.kotMain?.otime
                )}{" "}
              <span>min</span>
            </h2>
          </div>
        </section>
        {/* Section 3 */}
        <section className="flex flex-wrap justify-between py-3">
          <div className="w-[70%]">
            <div className="w-full bg-gray-200 rounded-full">
              <div
                style={{ width: `${Math.round(finalPerformance)}%` }}
                className="bg-blue-600 text-xs transition-all font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
              >
                {Math.round(finalPerformance)}%
              </div>
            </div>
          </div>
          <div className="w-[30%]">
            <h2 className="text-base text-textThmClr font-bold text-end me-2">
              {data?.orderDetail[0]?.kotDetails.length} <span>Item</span>
            </h2>
          </div>
        </section>
        {/* Section 4 */}

        {data && (
          <section>
            <div
              className={`${
                data?.orderDetail[0]?.kotDetails.length > 3
                  ? "h-[350px] overflow-y-scroll"
                  : ""
              }`}
            >
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                {data?.orderDetail.map((orderD) => {
                  return orderD.kotDetails.map((order) => (
                    <li key={order.id} className="py-3 sm:py-4">
                      <div className="flex items-center px-3">
                        <div className="flex-1 min-w-0 ms-4">
                          <p className="text-base font-bold text-textThmClr truncate dark:text-white">
                            {order.itemName}{" "}
                            <span className="font-medium text-[#A3AED0]">
                              {" "}
                              ({order.isize}){" "}
                            </span>
                          </p>
                          <p className="text-sm text-[#A3AED0] truncate">
                            Qty : {order.qty}
                          </p>
                        </div>
                        {/* {order.served === false ? (
                          <div
                            onClick={() => handleSubmit(order.id)}
                            className="inline-flex items-center text-base text-[#A3AED0] dark:text-white cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-lg"
                          >
                            Serve
                          </div>
                        ) : (
                          <SiTicktick className="text-xl text-green-400" />
                        )} */}
                      </div>
                    </li>
                  ));
                })}
              </ul>
            </div>
          </section>
        )}

        {/* Section 5 Buttons */}
        <section className="py-5">
          <div className="flex flex-wrap gap-4 justify-center md:justify-center">
            {/* Rush Order Button */}
            {/* <button
              disabled={serveAllStatus}
              onClick={handleServceAll}
              className={`flex items-center justify-between bg-orange-100 text-orange-600 font-semibold px-4 py-2 rounded-full shadow-md ${
                serveAllStatus ? "" : "hover:bg-orange-200"
              } w-full sm:w-auto`}
            >
              <span>{serveAllStatus ? "Served" : "Serve All"}</span>
              <Image
                src={rushIcon}
                alt="Rush Icon"
                width={24}
                height={24}
                className="ml-2"
              />
            </button> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default MenuDetails;
