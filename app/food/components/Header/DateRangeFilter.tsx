import { Button } from "@radix-ui/themes";
import { format } from "date-fns";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { DateRangePicker, Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // Main style file
import "react-date-range/dist/theme/default.css"; // Theme CSS

// Define the type of the range state
// interface RangeType {
//   startDate: Date | undefined;
//   endDate: Date | undefined;
//   key: string;
// }

// interface DateRangeFilterProps {
//   initialStartDate?: Date;
//   initialEndDate?: Date;
//   onDateChange: (fromDate: string, toDate: string) => void;
// }

// const DateRangeFilter = ({
//   initialStartDate,
//   initialEndDate,
//   onDateChange,
// }: DateRangeFilterProps) => {
const DateRangeFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [state, setState] = useState<Range[]>([
    {
      startDate: undefined, // Initially no start date selected
      endDate: undefined, // Initially no end date selected
      key: "selection",
    },
  ]);

  // const handleSelect = (ranges: RangeKeyDict) => {
  //   const { selection } = ranges;
  //   console.log(selection.startDate);
  //   console.log(selection.endDate);
  //   setState([
  //     {
  //       startDate: selection.startDate, // Assign directly; already Date | undefined
  //       endDate: selection.endDate, // Assign directly; already Date | undefined
  //       key: selection.key || "selection",
  //     },
  //   ]);
  // };

  const handleSelect = (ranges: RangeKeyDict) => {
    const { selection } = ranges;
    const start = selection.startDate
      ? format(selection.startDate, "yyyy-MM-dd")
      : "";
    const end = selection.endDate
      ? format(selection.endDate, "yyyy-MM-dd")
      : "";

    const restaurantId = searchParams.get("restaurantId") || "1"; // Default to 1

    // Build the new URL with query params
    router.push(
      `?restaurantId=${parseInt(restaurantId)}&fromDate=${start}&toDate=${end}`
    );

    setState([selection]);
  };

  // const handleSelect = (ranges: RangeKeyDict) => {
  //   const { selection } = ranges;
  //   setState([selection]);

  //   if (selection.startDate && selection.endDate) {
  //     const from = format(selection.startDate, "yyyy-MM-dd");
  //     const to = format(selection.endDate, "yyyy-MM-dd");
  //     onDateChange(from, to); // 🔁 Callback to parent
  //   }
  // };

  const clearDateSelection = () => {
    setState([
      {
        startDate: undefined,
        endDate: undefined,
        key: "selection",
      },
    ]);
  };

  return (
    <div className="w-full h-full text-center">
      <DateRangePicker
        className="text-secondary shadow-lg rounded-lg mb-3 bg-theme"
        rangeColors={["var(--accent-9)"]}
        ranges={state}
        onChange={handleSelect}
        moveRangeOnFirstSelection={false}
        maxDate={new Date()} // Optional: Restrict future dates
        dateDisplayFormat="dd/MM/yyyy"
        direction="horizontal"
        months={2}
      />
      <p className="mb-3">
        Selected Range:{" "}
        {state[0].startDate
          ? format(state[0].startDate, "EEE-d-MMM-yyyy")
          : "No start date"}{" "}
        to{" "}
        {state[0].endDate
          ? format(state[0].endDate, "EEE-d-MMM-yyyy")
          : "No end date"}
      </p>
      <Button color="red" size="3" variant="soft" onClick={clearDateSelection}>
        Clear Dates
      </Button>
    </div>
  );
};

export default DateRangeFilter;
