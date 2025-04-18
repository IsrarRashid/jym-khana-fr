import React from "react";
import FacilityList from "./FacilityList";
import { Box } from "@radix-ui/themes";
import SalesChart from "./SalesChart";

const RecoveryOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
      <FacilityList />
      <Box className="lg:col-span-2">
        <SalesChart
          mon={50}
          tue={100}
          wed={60}
          thu={70}
          fri={90}
          sat={30}
          heading="Recovery"
        />
      </Box>
    </div>
  );
};

export default RecoveryOverview;
