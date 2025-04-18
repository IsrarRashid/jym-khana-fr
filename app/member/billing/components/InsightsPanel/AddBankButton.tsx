"use client";

import { Button, useThemeContext } from "@radix-ui/themes";

const AddBankButton = () => {
  const theme = useThemeContext();
  return (
    <Button
      className={`${
        theme.appearance === "light"
          ? "!text-[var(--accent-9)] !outline-[var(--accent-9)]"
          : "!text-secondary !outline-secondary"
      } !h-full !bg-transparent !outline-2 !outline-dashed !p-5 !rounded-[25px] !flex !items-center !justify-center`}
    >
      Add New Bank
    </Button>
  );
};

export default AddBankButton;
