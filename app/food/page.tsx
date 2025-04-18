import Header from "./components/Header/Header";
import InsightsPanel from "./components/InsightsPanel/InsightsPanel";
import OrderAnalytics from "./components/OrderAnalytics/OrderAnalytics";
import HeadwisePerformance from "./components/HeadwisePerformance";
import BilledList from "./components/BilledList";
import StatSummary from "./components/StatSummary";
import { FOOD_DASHBOARD_API } from "../APIs";
import InsightsPanelDetails from "./components/InsightsPanel/InsightsPanelDetails";

interface Props {
  searchParams: Promise<{
    restaurantId: string;
    fromDate: string;
    toDate: string;
  }>;
}

export interface BillSummay {
  billId: string;
  billDate: string;
  memberId: string;
  memberName: string;
  amount: number;
  service: number;
  gst: number;
  net: number;
  type: string;
  packingCharges: number;
  gustCharges: number;
}

export interface TopSellingHeadWiseProduct {
  itemHeadName: string;
  quantity: number;
  salesOrder: number;
}

export interface TopSellingProducts {
  itemFullName: string;
  quantity: number;
  salesOrder: number;
}

export interface OrderTakerPerformance {
  salesmanName: string;
  salesmanPicture: string;
  salesOrders: number;
  sales: number;
  achievementPercentage: number;
}

interface OrderTaker {
  orderTakerName: string;
  orderTakerPicture: string;
}

export interface RestaurantDetail {
  totalSales: number;
  cashSale: number;
  creditCardSale: number;
  creditSale: number;
  noOfPersons: number;
  totalCustomers: null;
  newCustomers: number;
  tableReservations: number;
  orderCancels: number;
  achievementPercentage: number;
  orderTakers: OrderTaker[];
  orderTakerPerformance: OrderTakerPerformance[];
  topSellingProducts: TopSellingProducts[];
  topSellingHeadWiseProduct: TopSellingHeadWiseProduct[];
  billSummay: BillSummay[];
}

interface Response {
  isSuccess: boolean;
  message: string;
  details: RestaurantDetail;
}

const FoodPage = async ({ searchParams }: Props) => {
  const { restaurantId, fromDate, toDate } = await searchParams;
  console.log("restaurantId", restaurantId);
  // const today = new Date();
  // const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

  const data = {
    resturantId: restaurantId ? parseInt(restaurantId) : 1,
    fromDate: fromDate ? fromDate : new Date().toISOString().split("T")[0],
    toDate: toDate ? toDate : new Date().toISOString().split("T")[0],
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}${FOOD_DASHBOARD_API}/GetFoodResturantDetail`,
    {
      method: "POST",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );

  const response: Response = await res.json();

  console.log("response restaurant details", response);

  return (
    <>
      <Header />
      <>
        {response.details && (
          <>
            <StatSummary details={response.details} />
            <InsightsPanelDetails details={response.details} />
            <InsightsPanel details={response.details} />
            <OrderAnalytics details={response.details} />
            <HeadwisePerformance details={response.details} />
            {response.details.billSummay.length > 0 && (
              <BilledList billSummary={response.details.billSummay} />
            )}
          </>
        )}
      </>
    </>
  );
};

export default FoodPage;
