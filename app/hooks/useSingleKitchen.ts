// import { SINGLE_KITCHEN } from "../APIs";
// import useData from "./useData";

// interface KotDetails {
//   kotId: number;
//   code: number;
//   qty: number;
//   isize: string;
//   price: number;
//   amount: number;
//   type: boolean;
//   served: boolean;
//   menuId: number;
//   id: number;
//   createdAt: string;
//   updatedAt: string;
//   remarks: string;
// }

// interface KotMain {
//   kotId: number;
//   cdate: string;
//   kot: number;
//   tableNo: string;
//   otaker: string;
//   userName: string;
//   status: boolean;
//   otime: string;
//   diff: boolean;
//   resId: number;
//   phone: string;
//   name: string;
//   address: string;
//   customerType: string;
//   customerId: string;
//   pstatus: boolean;
//   createdAt: string;
//   updatedAt: string;
//   billId: number;
//   id: number;
//   requestType: number;
// }

// interface OrderDetail {
//   kotMain: KotMain;
//   kotDetails: KotDetails[];
// }

// export interface SingleKitchen {
//   orderDetail: OrderDetail[];
// }

// interface Props {
//   refresh?: boolean;
// }

// const useSingleKitchen = ({ refresh = false }: Props = {}) =>
//   useData<SingleKitchen>({ refresh, endpoint: SINGLE_KITCHEN });

// export default useSingleKitchen;
