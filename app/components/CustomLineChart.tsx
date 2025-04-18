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

type Props<T extends { label: string; value: number }> = {
  data: T[];
  heading: string;
  height: number;
};

const CustomLineChart = <T extends { label: string; value: number }>({
  data,
  heading,
  height,
}: Props<T>) => {
  const theme = useThemeContext();

  return (
    <Box className="bg-theme rounded-[17px]" p="4">
      <Flex justify="center" align="center">
        <Heading className="font-bold" size="8" mb="3">
          {heading}
        </Heading>
        {/* <Flex>
          In this Week <GoTriangleDown size={21} />
        </Flex> */}
      </Flex>
      <ResponsiveContainer width="100%" height={height}>
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
            dy={10}
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
            horizontal={false}
            stroke="#44444F"
            strokeWidth={1}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default CustomLineChart;
