"use client";
import React, { useEffect, useState } from "react";
import cancelTable from "@/public/images/kitchen/cancelTable.png";
import dishPic from "@/public/images/kitchen/dishPic.png";
import tablePic from "@/public/images/kitchen/tablePic.png";
import useKitchenOrders from "../hooks/useKitchenOrders";
import HeaderCard from "./components/HeaderCard";
import Orders from "./components/Orders";
import MenuDetails from "./components/MenuDetails";
import Header from "./components/Header/Header";

const KitchenPage = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [tableName, setTableName] = useState("");
  const menuHandler = (status: boolean, tableName: string) => {
    setShowMenu(status);
    setTableName(tableName);
  };
  const [refresh, setRefresh] = useState(false);
  const { data } = useKitchenOrders({ refresh });

  useEffect(() => {
    const interval = setInterval(() => {
      setRefresh((prev) => !prev);
      console.log("variable updated");
    }, 10000); // Call every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col sm:flex-row gap-2">
        <div
          className={`transition-all ${
            showMenu ? "w-full sm:w-[50%] md:w-[60%] lg:w-[70%]" : "w-full"
          }`}
        >
          <HeaderCard data={data?.kitchenList ?? []} />

          <>
            <Orders
              data={(data?.kitchenList ?? []).filter(
                (order) => order.orderCount === -1
              )}
              menuHandler={menuHandler}
              heading="Cancel Orders"
              icon={cancelTable}
              borderStyle={"1px solid rgba(210, 65, 65, 0.82)"}
            />

            <Orders
              data={(data?.kitchenList ?? []).filter(
                (order) => order.orderCount > 1
              )}
              menuHandler={menuHandler}
              heading="Running Orders"
              icon={tablePic}
              borderStyle={"1px solid rgba(67, 24, 255, 0.24)"}
            />
            <Orders
              data={(data?.kitchenList ?? []).filter(
                (order) => order.orderCount === 1
              )}
              menuHandler={menuHandler}
              heading="New Orders"
              icon={dishPic}
              borderStyle={"1px solid #fff"}
            />
          </>
        </div>
        {showMenu ? (
          <div className=" w-full sm:w-[50%] md:w-[40%] lg:w-[30%]  ">
            <MenuDetails tableName={tableName} menuHandler={menuHandler} />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default KitchenPage;
