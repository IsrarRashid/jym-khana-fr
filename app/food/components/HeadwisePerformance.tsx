import { RestaurantDetail } from "../page";
import SalesChart from "./OrderAnalytics/SalesChart";
import TopHeadWiseProducts from "./TopHeadWiseProducts";

const HeadwisePerformance = ({ details }: { details: RestaurantDetail }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
      <SalesChart
        height={300}
        heading="HEAD WISE SALE"
        mon={10}
        tue={20}
        wed={30}
        thu={40}
        fri={50}
        sat={60}
      />
      <TopHeadWiseProducts data={details.topSellingHeadWiseProduct} />
    </div>
  );
};

export default HeadwisePerformance;
