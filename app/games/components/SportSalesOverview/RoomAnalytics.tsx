import CustomLineChart from "@/app/components/CustomLineChart";
import { Box } from "@radix-ui/themes";
import { RoomSalesList } from "../../page";
import RoomSales from "./RoomSales";

const RoomAnalytics = ({ data }: { data: RoomSalesList[] }) => {
  const chartData = data?.map((d) => ({
    label: d.name,
    value: d.count,
  }));
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
      <Box className="lg:col-span-2">
        <RoomSales data={data} />
      </Box>

      <CustomLineChart data={chartData} heading="Sports" height={340} />
    </div>
  );
};

export default RoomAnalytics;
