import { Box } from "@radix-ui/themes";
import InstallChart from "./InstallChart";
import MyLineChart from "./MyLineChart";

const InstallReceivableCharts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
      <InstallChart
        heading="Install"
        mon1={50}
        tue1={10}
        wed1={100}
        thu1={30}
        fri1={50}
        sat1={70}
        mon2={10}
        tue2={30}
        wed2={45}
        thu2={95}
        fri2={60}
        sat2={10}
      />
      <Box className="lg:col-span-2">
        <MyLineChart
          heading="Receivable"
          mon={10}
          tue={50}
          wed={70}
          thu={90}
          fri={50}
        />
      </Box>
    </div>
  );
};

export default InstallReceivableCharts;
