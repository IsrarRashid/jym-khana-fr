"use client";

import useHelpDesk from "@/app/hooks/useHelpDesk";
import {
  Box,
  Button,
  Flex,
  Heading,
  Radio,
  Table,
  Text,
} from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { ComplainStatus, ComplainType } from "./types/status";

const complainTypes: { label: string; value: ComplainType }[] = [
  { label: "FOOD", value: "FOOD" },
  { label: "ROOM", value: "ROOM" },
  { label: "GAME", value: "GAME" },
  { label: "OTHERS", value: "OTHERS" },
];

const complainStatuses: { label: string; value: ComplainStatus }[] = [
  { label: "PENDING", value: "PENDING" },
  { label: "RESOLVED", value: "RESOLVED" },
];

interface Props {
  refresh: boolean;
}

const ComplainFilter = ({ refresh }: Props) => {
  const [selectedType, setSelectedType] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState(1);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data } = useHelpDesk({ refresh });

  const setDefaultFilter = useCallback(() => {
    setSelectedType(1);
    setSelectedStatus(1);
    const params = new URLSearchParams(searchParams.toString());
    params.set("complainType", complainTypes[0].value);
    params.set("complainStatus", complainStatuses[0].value);

    const query = params.size ? "?" + params.toString() : "";
    router.push("/member" + query);
    console.log("Navigating to:", "/member" + query);
  }, [router, searchParams]);

  useEffect(() => {
    setDefaultFilter();

    return () => {
      const latestSearchParams = new URLSearchParams(window.location.search);
      latestSearchParams.delete("complainType");
      latestSearchParams.delete("complainStatus");

      const cleanedQuery = latestSearchParams.size
        ? "?" + latestSearchParams.toString()
        : "";
      router.push("/member" + cleanedQuery);
      console.log("Reset search params on unmount:", "/member" + cleanedQuery);
    };
  }, []);

  return (
    <Box className="bg-theme" px="5" py="7">
      <Flex justify="between" align="center" mb="2">
        <Heading>Filters</Heading>
        <Button
          variant="ghost"
          className="!text-white"
          onClick={setDefaultFilter}
        >
          Reset filters
        </Button>
      </Flex>
      <Table.Root mb="2">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell className="whitespace-nowrap !shadow-none ">
              Complains Type
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="!shadow-none !text-center">
              Complains
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="!shadow-none !text-center">
              Pending
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {complainTypes.map((complainType, i) => (
            <Table.Row key={i + 1} className="!h-full">
              <Table.RowHeaderCell className="!shadow-none !h-full" pt="0">
                <Flex
                  onClick={() => {
                    setSelectedType(i + 1);
                    const params = new URLSearchParams(searchParams.toString());
                    if (complainType)
                      params.set("complainType", complainType.value);
                    if (searchParams.get("complainStatus")) {
                      params.set(
                        "complainStatus",
                        searchParams.get("complainStatus")!
                      );
                    }

                    const query = params.size ? "?" + params.toString() : "";
                    router.push("/member" + query);
                    console.log("Navigating to:", "/member" + query);
                  }}
                  asChild
                  gap="2"
                >
                  <Text as="label" size="2">
                    <Radio
                      name={complainType.label}
                      value={(i + 1).toString()}
                      checked={selectedType === i + 1}
                    />
                    <Box ml="2">{complainType.label}</Box>
                  </Text>
                </Flex>
              </Table.RowHeaderCell>
              <Table.Cell
                className="!shadow-none !h-full text-[var(--accent-9)] !text-center"
                pt="0"
              >
                {
                  data?.result.filter(
                    (d) =>
                      d.complaintType.toLowerCase() ===
                      complainType.value.toLowerCase()
                  ).length
                }
              </Table.Cell>
              <Table.Cell
                className="!shadow-none !h-full text-[var(--accent-9)] !text-center"
                pt="0"
              >
                {
                  data?.result
                    .filter(
                      (d) =>
                        d.complaintType.toLowerCase() ===
                        complainType.value.toLowerCase()
                    )
                    .filter((d) => d.status === false).length
                }
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <Text as="p" weight="bold" mb="2">
        Time Period
      </Text>
      {complainStatuses.map((complainStatus, i) => (
        <Flex
          key={i}
          gap="2"
          mb="1"
          justify="between"
          align="center"
          onClick={() => {
            setSelectedStatus(i + 1);
            const params = new URLSearchParams(searchParams.toString());
            if (complainStatus)
              params.set("complainStatus", complainStatus.value);
            if (searchParams.get("complainType")) {
              params.set("complainType", searchParams.get("complainType")!);
            }

            const query = params.size ? "?" + params.toString() : "";
            router.push("/member" + query);
            console.log("Navigating to:", "/member" + query);
          }}
        >
          <Text as="label" size="2">
            <Radio
              name={complainStatus.label}
              value={(i + 1).toString()}
              checked={selectedStatus === i + 1}
            />
            <Text className="ps-2">{complainStatus.label}</Text>
          </Text>
          <Text as="p">
            {complainStatus.value === "PENDING"
              ? data?.result.filter((d) => d.status === false).length
              : data?.result.filter((d) => d.status === true).length}
          </Text>
        </Flex>
      ))}
    </Box>
  );
};

export default ComplainFilter;
