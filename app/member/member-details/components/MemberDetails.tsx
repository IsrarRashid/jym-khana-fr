import { Box } from "@radix-ui/themes";
import { MemberDetail } from "../../page";
import InsightsPanel from "./InsightsPanel/InsightsPanel";
import MemberTypeCountList from "./MemberTypeCountList";
import StatSummary from "./StatSummary";
import CustomBarChart from "@/app/components/CustomBarChart";

const MemberDetails = ({ data }: { data: MemberDetail }) => {
  const chartData = data?.memberTypeCount.map((d) => ({
    label: d.typeName,
    value: d.count,
  }));
  return (
    <>
      {/* <Header /> */}
      {data && (
        <>
          <StatSummary data={data} />
          <InsightsPanel data={data} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-4">
            <MemberTypeCountList data={data.memberTypeCount} />
            <Box className="lg:col-span-2 xl:col-span-3">
              <CustomBarChart data={chartData} heading="Members" height={420} />
            </Box>
          </div>
        </>
      )}
    </>
  );
};

export default MemberDetails;
