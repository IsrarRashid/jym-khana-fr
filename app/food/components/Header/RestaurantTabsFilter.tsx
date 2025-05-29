"use client";

import classnames from "classnames";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { RestaurantsList } from "./Header";

const RestaurantTabsFilter = ({
  restaurants,
}: {
  restaurants: RestaurantsList;
}) => {
  const [selectedButton, setSelectedButton] = useState<number>(
    restaurants.restaurant[0].resId
  );
  const router = useRouter();

  const handleClick = useCallback(
    (restaurantId: number) => {
      setSelectedButton(restaurantId);
      const query = restaurantId ? `?restaurantId=${restaurantId}` : "";
      router.push("/food" + query);
    },
    [router]
  );

  useEffect(() => {
    handleClick(1);
  }, [router, handleClick]);

  return (
    <ul className={`flex flex-wrap space-x-6 items-center mb-4`}>
      {restaurants?.restaurant?.map((restaurant) => (
        <li
          key={restaurant.resId}
          className={classnames({
            "border-b-4 border-transparent pb-2 h-10 transition-all": true,
            "border-b-[var(--accent-9)]": selectedButton === restaurant.resId,
          })}
        >
          <button
            className={classnames({
              "text-secondary font-normal text-xl bg-transparent transition-all cursor-pointer text-nowrap":
                true,
              "!text-2xl !font-bold !text-[var(--accent-9)]":
                selectedButton === restaurant.resId,
            })}
            onClick={() => handleClick(restaurant.resId)}
          >
            {restaurant.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default RestaurantTabsFilter;
