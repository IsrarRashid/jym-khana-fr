"use client";
import { Table, useThemeContext } from "@radix-ui/themes";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  classStyles?: string;
}
const TableHeader = ({ children, classStyles }: Props) => {
  const theme = useThemeContext();
  return (
    <Table.Header
      className={`${
        theme.appearance === "light" ? "bg-[var(--accent-9)]" : "bg-[#141518]"
      } ${classStyles}`}
    >
      {children}
    </Table.Header>
  );
};

export default TableHeader;
