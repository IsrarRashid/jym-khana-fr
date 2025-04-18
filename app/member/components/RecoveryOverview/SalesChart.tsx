"use client";

import { Box, Button, Flex, Heading, useThemeContext } from "@radix-ui/themes";
import {
  Bar,
  BarChart,
  CartesianGrid,
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

const SalesChart = ({ mon, tue, wed, thu, fri, sat, heading }: Props) => {
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
    {
      label: "Sat",
      value: sat,
    },
  ];

  const theme = useThemeContext();

  return (
    <>
      <Box mb="4">&nbsp;</Box>
      <Box className="bg-theme rounded-[17px]" p="4">
        <Flex justify="between" align="center" className="mb-[30px]">
          <Heading className="font-semibold" size="3">
            {heading}
          </Heading>
          <Button variant="outline" className="rounded-lg" color="gray">
            Pick a date
          </Button>
        </Flex>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              left: -20,
              right: 10,
              bottom: -10,
            }}
            barSize={10}
          >
            <XAxis
              dataKey="label"
              scale="point"
              padding={{ left: 30, right: 30 }}
            />
            <YAxis />
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
            <CartesianGrid
              strokeDasharray="10 10"
              vertical={false}
              stroke="#44444F"
              strokeWidth={2}
            />
            <Bar dataKey="value" fill="#1E75FF" radius={100} />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </>
  );
};

export default SalesChart;
