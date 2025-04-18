"use client";

import { Box, Heading, useThemeContext } from "@radix-ui/themes";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Props {
  mon: number;
  tue: number;
  wed: number;
  thu: number;
  fri: number;
  heading: string;
}

const MyLineChart = ({ mon, tue, wed, thu, fri, heading }: Props) => {
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
    <Box className="bg-theme rounded-[17px] " p="4">
      <Heading className="text-center text-[2.063rem]" weight="bold">
        {heading}
      </Heading>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="#1E75FF"
            strokeWidth={6}
          />
          <CartesianGrid
            strokeDasharray="300"
            vertical={true}
            horizontal={false}
            stroke="#44444F"
            strokeWidth={2}
          />

          <XAxis
            dataKey="label"
            scale="point"
            padding={{ left: 30, right: 30 }}
          />
          <YAxis
            label={{
              value: "Number",
              angle: -90,
              position: "insideLeft",
              dy: 20,
              fontWeight: "bold",
            }}
            fontWeight="700"
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
    </Box>
  );
};

export default MyLineChart;
