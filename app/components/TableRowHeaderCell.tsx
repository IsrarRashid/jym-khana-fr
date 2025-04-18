"use client";
import { Table, useThemeContext } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

const TableRowHeaderCell = ({ children }: PropsWithChildren) => {
  const theme = useThemeContext();
  return (
    <Table.RowHeaderCell
      className={` font-semibold ${
        theme.appearance === "light" ? "bg-[#fff]" : "bg-[#191B20]"
      }`}
    >
      {children}
    </Table.RowHeaderCell>
  );
};

export default TableRowHeaderCell;
