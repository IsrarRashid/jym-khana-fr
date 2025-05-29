import { Box } from "@radix-ui/themes";
import DatePicker from "./DatePicker";
import GalleryView from "./GalleryView";
import { FOOD_DASHBOARD_API } from "@/app/APIs";
import RestaurantTabsFilter from "./RestaurantTabsFilter";

export interface Restaurant {
  resId: number;
  name: string;
  kotp: number | null;
  billP: number | null;
  takeaway: boolean;
  icon: string;
}

export interface RestaurantsList {
  isSuccess: boolean;
  message: string;
  restaurant: Restaurant[];
}

const Header = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}${FOOD_DASHBOARD_API}/RestaurantList`,
    { cache: "no-store" }
  );

  const response: RestaurantsList = await res.json();
  console.log("response", response);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
      <Box className="lg:!col-span-2">
        <RestaurantTabsFilter restaurants={response} />
      </Box>
      <Box>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <GalleryView />
          <DatePicker />
        </div>
      </Box>
    </div>
  );
};

export default Header;
