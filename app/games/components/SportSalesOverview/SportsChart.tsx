"use client";

import { Box, Flex, Heading, useThemeContext } from "@radix-ui/themes";
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
  sat: number;
  heading: string;
}

const RoomOccupancyChart = ({
  mon,
  tue,
  wed,
  thu,
  fri,
  sat,
  heading,
}: Props) => {
  const data = [
    {
      label: "Mon",
      value: mon,
      color: "#1E75FF",
    },
    {
      label: "Tue",
      value: tue,
      color: "#FF955A",
    },
    {
      label: "Wed",
      value: wed,
      color: "#00B578",
    },
    {
      label: "Thu",
      value: thu,
      color: "#16DBCC",
    },
    {
      label: "Fri",
      value: fri,
      color: "#FFBB38",
    },
    {
      label: "Sat",
      value: sat,
      color: "#1E75FF",
    },
  ];

  const theme = useThemeContext();

  return (
    <Box className="bg-theme rounded-[17px]" p="4">
      <Flex justify="between" align="center" className="mb-[30px]">
        <Box className="hidden xl:block">&nbsp;</Box>
        <Box className="hidden xl:block">&nbsp;</Box>
        <Heading weight="bold" size="5">
          {heading}
        </Heading>
        {/* <Button variant="outline" className="rounded-lg" color="gray">
          Pick a date
        </Button> */}
      </Flex>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="#48CAE4"
            strokeWidth={6}
          />
          <XAxis
            dataKey="label"
            scale="point"
            padding={{ left: 30, right: 30 }}
          />
          <YAxis
            label={{
              value: "Count",
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
                theme.appearance === "light" ? "#48CAE4" : "#292932", // Background color of the tooltip
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
          <CartesianGrid
            strokeDasharray="500 500"
            vertical={false}
            stroke="#44444F"
            strokeWidth={1}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default RoomOccupancyChart;
