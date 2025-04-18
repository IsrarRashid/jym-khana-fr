import InstallReceivableCharts from "../../components/InstallReceivableCharts/InstallReceivableCharts";
import RecoveryOverview from "../../components/RecoveryOverview/RecoveryOverview";
import { BillingDetail } from "../../page";
import InsightsPanel from "./InsightsPanel/InsightsPanel";

const Billing = ({ data }: { data: BillingDetail }) => {
  return (
    <>
      {/* <Header /> */}
      <InsightsPanel data={data} />
      <InstallReceivableCharts />
      <RecoveryOverview />
    </>
  );
};

export default Billing;
