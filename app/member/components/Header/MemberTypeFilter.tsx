"use client";

import classnames from "classnames";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const MemberType = {
  MEMBER_DETAIL: "MEMBER_DETAIL",
  BILLING: "BILLING",
} as const;

export type MemberType = (typeof MemberType)[keyof typeof MemberType];

const memberTypes: { label: string; value?: MemberType }[] = [
  { label: "Member Detail", value: "MEMBER_DETAIL" },
  { label: "Billing", value: "BILLING" },
];

const MemberTypeFilter = () => {
  const [selectedButton, setSelectedButton] = useState<number>(0);
  const router = useRouter();

  const handleClick = (memberType: number) => {
    setSelectedButton(memberType);
    const query = memberType ? `?memberType=${memberType}` : "";
    router.push("/member" + query);
  };

  return (
    <ul className={`flex space-x-6 items-center mb-4`}>
      <li
        className={classnames({
          "border-b-4 border-transparent pb-2 h-10 transition-all": true,
          "border-b-[var(--accent-9)]": selectedButton === 0,
        })}
      >
        <button
          className={classnames({
            "text-secondary font-normal text-xl bg-transparent transition-all cursor-pointer":
              true,
            "!text-2xl !font-bold !text-[var(--accent-9)]":
              selectedButton === 0,
          })}
          onClick={() => handleClick(0)}
        >
          {memberTypes[0].label}
        </button>
      </li>
      <li
        className={classnames({
          "border-b-4 border-transparent pb-2 h-10 transition-all": true,
          "border-b-[var(--accent-9)]": selectedButton === 1,
        })}
      >
        <button
          className={classnames({
            "text-secondary font-normal text-xl bg-transparent transition-all cursor-pointer":
              true,
            "!text-2xl !font-bold !text-[var(--accent-9)]":
              selectedButton === 1,
          })}
          onClick={() => handleClick(1)}
        >
          {memberTypes[1].label}
        </button>
      </li>
    </ul>
  );
};

export default MemberTypeFilter;
