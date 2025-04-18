"use client";

import { useThemeContext } from "@radix-ui/themes";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

interface Props {
  mon: number;
  tue: number;
  wed: number;
  thu: number;
  fri: number;
}

const MyLineChart = ({ mon, tue, wed, thu, fri }: Props) => {
  const data = [
    {
      label: "Mon",
      value: mon,
    },
    {
      label: "Tue",
      value: tue,
    },
    {
      label: "Wed",
      value: wed,
    },
    {
      label: "Thu",
      value: thu,
    },
    {
      label: "Fri",
      value: fri,
    },
  ];
  const theme = useThemeContext();

  return (
    <ResponsiveContainer width="100%" height={100}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="value"
          stroke="#1E75FF"
          strokeWidth={2}
        />
        <Tooltip
          contentStyle={{
            backgroundColor:
              theme.appearance === "light" ? "#1E75FF" : "#292932", // Background color of the tooltip
            border: "0px", // Border styling
            borderRadius: "20px", // Rounded corners
            padding: "10px",
            boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
          }}
          labelStyle={{
            fontSize: "16px", // Label font size
            fontWeight: "bold", // Label font weight
            color: "#fff",
          }}
          itemStyle={{
            fontSize: "14px", // Item font size
            fontWeight: "normal", // Item font weight
            color: theme.appearance === "light" ? "#fff" : "#B5B5BE",
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MyLineChart;
