import { MEMBER_DASHBOARD_API } from "../APIs";
import Billing from "./billing/components/Billing";
import Header from "./components/Header/Header";
import MemberDetails from "./member-details/components/MemberDetails";

interface Props {
  searchParams: Promise<{
    memberType: string;
    fromDate: string;
    toDate: string;
  }>;
}
export interface BillingDetail {
  recovery: number;
  cash: number;
  bankAlfalah: number;
  faysalBank: number;
  ubl: number;
  membershipFee: number;
  receivable: number;
  complainCount: number;
  appDownloadCount: number;
  iosDownloadCount: number;
  androidDownloadCount: number;
  installStats: string;
  receivableTrends: string;
  headWiseRecoveries: string;
  dailyRecoveries: string;
}

export interface MemberTypeCount {
  typeName: string;
  count: number;
}

export interface MemberDetail {
  activeMember: number;
  suspended: number;
  closeBlock: number;
  freeze: number;
  terminate: number;
  totalMember: number;
  waitingInterview: number;
  defer: number;
  absent: number;
  reject: number;
  memberTypeCount: MemberTypeCount[];
}

interface MemberInfo {
  isSuccess: boolean;
  message: string;
  memberDetail: MemberDetail;
  billingDetail: BillingDetail;
}

const MemberPage = async ({ searchParams }: Props) => {
  const { memberType, fromDate, toDate } = await searchParams;
  console.log("memberType", memberType);
  // const today = new Date();
  // const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

  const data = {
    selectType: memberType ? parseInt(memberType) : 0,
    fromDate: fromDate ? fromDate : new Date().toISOString().split("T")[0],
    toDate: toDate ? toDate : new Date().toISOString().split("T")[0],
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}${MEMBER_DASHBOARD_API}/getMemberInfo`,
    {
      method: "POST",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );

  const response: MemberInfo = await res.json();

  console.log("response restaurant details", response);

  return (
    <>
      <Header />
      {response && (
        <>
          {memberType && parseInt(memberType) === 1 ? (
            <Billing data={response.billingDetail} />
          ) : (
            <MemberDetails data={response.memberDetail} />
          )}
        </>
      )}
    </>
  );
};

export default MemberPage;
