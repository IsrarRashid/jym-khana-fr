import { GAME_DASHBOARD_API } from "../APIs";
import Header from "./components/Header/Header";
import InsightsPanel from "./components/InsightsPanel/InsightsPanel";
import RoomAnalytics from "./components/SportSalesOverview/RoomAnalytics";

interface Props {
  searchParams: Promise<{
    fromDate: string;
    toDate: string;
  }>;
}

export interface RoomSalesList {
  id: number;
  name: string;
  capacity: string;
  percentageUsed: string;
  count: number;
  sales: number;
}

export interface RoomInfos {
  name: string;
  count: number;
}

interface GameDetail {
  roomInfos: RoomInfos[];
  roomSalesList: RoomSalesList[];
}

interface Response {
  isSuccess: boolean;
  message: string;
  details: GameDetail;
}

const GamesPage = async ({ searchParams }: Props) => {
  const { fromDate, toDate } = await searchParams;
  const today = new Date();
  // const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const yesterday = new Date(today); // create a copy of today
  yesterday.setDate(today.getDate() - 1); // modify the copy

  const data = {
    fromDate: fromDate ? fromDate : yesterday.toISOString().split("T")[0],
    toDate: toDate ? toDate : new Date().toISOString().split("T")[0],
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}${GAME_DASHBOARD_API}`,
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
  console.log("response", response);
  return (
    <>
      <Header />
      {response.details.roomInfos.length > 0 && (
        <InsightsPanel data={response.details.roomInfos} />
      )}
      {response.details.roomSalesList.length > 0 && (
        <RoomAnalytics data={response.details.roomSalesList} />
      )}
    </>
  );
};

export default GamesPage;
