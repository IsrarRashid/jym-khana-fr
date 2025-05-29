import { RESERVATION_API } from "../APIs";
import { ComplainResopnse } from "../member/billing/components/InsightsPanel/InsightsPanel";
import useData from "./useData";

interface Props {
  refresh?: boolean;
}

const useHelpDesk = ({ refresh = false }: Props) =>
  useData<ComplainResopnse>({
    refresh,
    endpoint: `${RESERVATION_API}/GeAlltHelpDesk`,
  });

export default useHelpDesk;
