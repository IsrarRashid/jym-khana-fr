import InHouseStatusList from "./InHouseStatusList";
import TodayReservationList from "./TodayReservationList";

const ReservationStatusPanel = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
      <InHouseStatusList />
      <TodayReservationList />
    </div>
  );
};

export default ReservationStatusPanel;
