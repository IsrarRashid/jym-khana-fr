import BookingStatsTable from "./components/BookingStatsTable/BookingStatsTable";
import FinancialOverview from "./components/FinancialOverview/FinancialOverview";
import Header from "./components/Header/Header";
import InsightsPanel from "./components/InsightsPanel/InsightsPanel";
import ReservationStatusPanel from "./components/ReservationStatusPanel/ReservationStatusPanel";
import RoomAnalytics from "./components/RoomSalesOverview/RoomAnalytics";
import StatSummary from "./components/StatSummary";

const RoomPage = () => {
  return (
    <>
      <Header />
      <StatSummary />
      <InsightsPanel />
      <FinancialOverview />
      <RoomAnalytics />
      <BookingStatsTable />
      <ReservationStatusPanel />
    </>
  );
};

export default RoomPage;
