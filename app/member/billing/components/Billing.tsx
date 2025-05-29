import InstallReceivableCharts from "../../components/InstallReceivableCharts/InstallReceivableCharts";
import RecoveryOverview from "../../components/RecoveryOverview/RecoveryOverview";
import { BillingDetail } from "../../page";
import InsightsPanel from "./InsightsPanel/InsightsPanel";
import { ComplainType, ComplainStatus } from "./InsightsPanel/types/status";

interface Props {
  data: BillingDetail;
  complainType?: ComplainType;
  complainStatus?: ComplainStatus;
}

const Billing = ({ data, complainType, complainStatus }: Props) => {
  console.log("in billing component CS", complainStatus);
  console.log("in billing component CT", complainType);
  return (
    <>
      {/* <Header /> */}
      <InsightsPanel
        data={data}
        searchParams={{
          ...(complainType && { complainType }),
          ...(complainStatus && { complainStatus }),
        }}
      />
      <InstallReceivableCharts />
      <RecoveryOverview />
    </>
  );
};

export default Billing;
