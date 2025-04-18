import OccupancyList from "./OccupancyList";
import PaxList from "./PaxList";
import RentList from "./RentList";

const BookingStatsTable = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-4">
      <div className="md:col-span-2 lg:col-span-2">
        <PaxList />
      </div>
      <OccupancyList />
      <RentList />
    </div>
  );
};

export default BookingStatsTable;
