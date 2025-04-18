import { Flex } from "@radix-ui/themes";
import DatePicker from "./DatePicker";
import GalleryView from "./GalleryView";
import { FOOD_DASHBOARD_API } from "@/app/APIs";
import RestaurantTabsFilter from "./RestaurantTabsFilter";
import { useRouter, useSearchParams } from "next/navigation";

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
    <Flex justify="between" mb="4" wrap="wrap">
      <RestaurantTabsFilter restaurants={response} />
      <Flex justify="between" gap="5" wrap="wrap">
        <GalleryView />
        <DatePicker />
      </Flex>
    </Flex>
  );
};

export default Header;
