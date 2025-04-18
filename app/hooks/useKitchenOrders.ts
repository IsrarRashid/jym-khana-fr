import { KITCHEN_API } from "../APIs";
import useData from "./useData";

export interface KitchenList {
  tableName: string;
  orderCount: number;
  orderTime: string;
}

export interface KitchenOrder {
  kitchenList: KitchenList[];
}

interface Props {
  refresh?: boolean;
}

const useKitchenOrders = ({ refresh = false }: Props = {}) =>
  useData<KitchenOrder>({
    refresh,
    endpoint: `${KITCHEN_API}/GetkitchenOrders`,
  });

export default useKitchenOrders;
