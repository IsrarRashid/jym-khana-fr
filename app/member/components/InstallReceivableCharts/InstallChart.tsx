"use client";

import { Box, Flex, Heading, Text, useThemeContext } from "@radix-ui/themes";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import {
  Bar,
  BarChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { TooltipProps } from "recharts";

interface Props {
  mon1: number;
  tue1: number;
  wed1: number;
  thu1: number;
  fri1: number;
  sat1: number;
  mon2: number;
  tue2: number;
  wed2: number;
  thu2: number;
  fri2: number;
  sat2: number;
  heading: string;
}

const InstallChart = ({
  mon1,
  tue1,
  wed1,
  thu1,
  fri1,
  sat1,
  mon2,
  tue2,
  wed2,
  thu2,
  fri2,
  sat2,
  heading,
}: Props) => {
  const data = [
    {
      label: "Mon",
      value1: mon1,
      value2: mon2,
    },
    {
      label: "Tue",
      value1: tue1,
      value2: tue2,
    },
    {
      label: "Wed",
      value1: wed1,
      value2: wed2,
    },
    {
      label: "Thu",
      value1: thu1,
      value2: thu2,
    },
    {
      label: "Fri",
      value1: fri1,
      value2: fri2,
    },
    {
      label: "Sat",
      value1: sat1,
      value2: sat2,
    },
  ];

  const theme = useThemeContext();

  // Custom Tooltip Component
  const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
    active,
    payload,
  }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            position: "relative", // Required for absolute positioning of the triangle
            background: "#333",
            padding: "10px",
            borderRadius: "20px",
            color: "#fff",
            textAlign: "center",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            width: "70px",
          }}
        >
          <div className="flex justify-between items-center">
            <FaApple size={16} className="text-[#8191C1]" />
            <p style={{ fontWeight: "bold" }}>{payload[0].value}</p>
          </div>
          <div className="flex justify-between items-center">
            <IoLogoGooglePlaystore size={16} className="text-[#FDC55B]" />
            <p style={{ fontWeight: "bold" }}>{payload[1].value}</p>
          </div>
          {/* Triangle at the Bottom Center */}
          <div
            style={{
              position: "absolute",
              bottom: "-10px", // Move it below the tooltip
              left: "50%", // Center it horizontally
              transform: "translateX(-50%)", // Adjust for exact center
              width: "0",
              height: "0",
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderTop: "10px solid #333", // Matches the tooltip background
            }}
          />
        </div>
      );
    }
    return null;
  };

  return (
    <Box className="bg-theme rounded-[17px]" p="4">
      <Flex justify="between" align="center" className="mb-[30px]">
        <Heading className="font-semibold text-[1.563rem]">{heading}</Heading>
        <Flex justify="center" align="center" gap="5">
          <Flex justify="center" align="center" gap="3">
            <FaApple
              size={16}
              className="text-[#8191C1]"
              style={{
                filter: "drop-shadow(0px 0px 10px #687088)", // Alternative shadow method
              }}
            />
            <Text as="p">2765</Text>
          </Flex>
          <Flex justify="center" align="center" gap="3">
            <IoLogoGooglePlaystore
              size={16}
              className="text-[#FDC55B]"
              style={{
                filter: "drop-shadow(0px 0px 10px #fdc55b)", // Alternative shadow method
              }}
            />
            <Text as="p">2868</Text>
          </Flex>
        </Flex>
      </Flex>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            left: -20,
            right: 10,
            bottom: -10,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="label"
            scale="point"
            padding={{ left: 30, right: 30 }}
            axisLine={false}
          />
          <Tooltip
            content={<CustomTooltip />}
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
          <Bar
            dataKey="value1"
            stackId="a"
            fill="#A4834554"
            radius={5}
            activeBar={<Rectangle fill="#FDC55B9C" />}
          />
          <Bar
            dataKey="value2"
            stackId="a"
            fill="#8191C17A"
            radius={5}
            activeBar={<Rectangle fill="#8191C1" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default InstallChart;
