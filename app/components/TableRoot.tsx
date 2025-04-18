"use client";
import { Table, useThemeContext } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

const TableRoot = ({ children }: PropsWithChildren) => {
  const theme = useThemeContext();
  return (
    <Table.Root
      size="3"
      className={`border-2 ${
        theme.appearance === "light" ? "border-white" : "border-[#1D1F25]"
      } rounded-lg`}
    >
      {children}
    </Table.Root>
  );
};

export default TableRoot;
