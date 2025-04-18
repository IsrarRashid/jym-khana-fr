import totalOrder from "@/public/images/kitchen/totalOder.png";
import runningOrder from "@/public/images/kitchen/running.png";
import newOrder from "@/public/images/kitchen/newOder.png";
import cancelOrder from "@/public/images/kitchen/cancel.png";
import CardMenu from "./CardMenu";
import { KitchenList } from "@/app/hooks/useKitchenOrders";

interface Props {
  data: KitchenList[];
}

const HeaderCard = ({ data }: Props) => {
  return (
    <div className="flex flex-wrap justify-between gap-3 mb-4">
      <CardMenu
        icon={totalOrder}
        title={"Total Order"}
        value={data.length}
        cardBackgroundColor={"bg-theme"}
        titleTextColor={"text-[#C5CEE9]"}
        valueTextColor={"text-[#FFFFFF]"}
      />
      <CardMenu
        icon={runningOrder}
        title={"Running"}
        value={data.filter((order) => order.orderCount > 1).length}
        cardBackgroundColor={"bg-theme"}
        titleTextColor={"text-[#718EBF]"}
        valueTextColor={"text-[#FFFFFF]"}
      />
      <CardMenu
        icon={newOrder}
        title={"New Order"}
        value={data.filter((order) => order.orderCount === 1).length}
        cardBackgroundColor={"bg-theme"}
        titleTextColor={"text-[#718EBF]"}
        valueTextColor={"text-[#FFFFFF]"}
      />
      <CardMenu
        icon={cancelOrder}
        title={"Cancel"}
        value={0}
        cardBackgroundColor={"bg-theme"}
        titleTextColor={"text-[#718EBF]"}
        valueTextColor={"text-[#FFFFFF]"}
      />
    </div>
  );
};

export default HeaderCard;
