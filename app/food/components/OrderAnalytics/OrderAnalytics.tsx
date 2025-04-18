import { Box } from "@radix-ui/themes";
import OrderPerformance from "./OrderPerformance";
import SalesChart from "./SalesChart";
import TopProducts from "./TopProducts";
import { RestaurantDetail } from "../../page";

const OrderAnalytics = ({ details }: { details: RestaurantDetail }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
      <OrderPerformance data={details.orderTakerPerformance} />
      <SalesChart
        heading="SALES CHART"
        mon={10}
        tue={20}
        wed={30}
        thu={40}
        fri={50}
        sat={60}
        height={450}
      />
      <Box className="md:col-span-2 lg:col-span-1">
        {details.topSellingProducts.length > 0 && (
          <TopProducts data={details.topSellingProducts} />
        )}
      </Box>
    </div>
  );
};

export default OrderAnalytics;
