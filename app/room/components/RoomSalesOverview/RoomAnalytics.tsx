import { Box } from "@radix-ui/themes";
import RoomOccupancyChart from "./RoomOccupancyChart";
import RoomSales from "./RoomSales";

const RoomAnalytics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
      <Box className="lg:col-span-2" p="4">
        <RoomSales />
      </Box>
      <RoomOccupancyChart
        mon={50}
        tue={10}
        wed={30}
        thu={50}
        fri={30}
        sat={90}
        heading="Room Occupancy"
      />
    </div>
  );
};

export default RoomAnalytics;
