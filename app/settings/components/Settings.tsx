"use client";
import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  IconButton,
  Popover,
  RadioGroup,
  Text,
  TextField,
  useThemeContext,
} from "@radix-ui/themes";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import { IoCloseOutline, IoSearch } from "react-icons/io5";
import { PiWarningCircleBold } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { ColorType, setColor } from "../../features/color/colorSlice";
import NavTabs from "./NavTabs";
import { ModeType, setMode } from "../../features/mode/modeSlice";

const Settings = () => {
  const theme = useThemeContext();
  const dispatch = useDispatch();

  const handleColorChange = (color: ColorType) => {
    dispatch(setColor(color));
  };
  const handleModeChange = (mode: ModeType) => {
    dispatch(setMode(mode));
  };

  return (
    <Box className="p-6">
      <Flex justify="between" align="center" mb="4" wrap="wrap">
        <Heading className="text-[1.875rem]" mb="3">
          Settings
        </Heading>
        <TextField.Root size="3" radius="full" placeholder="Search settings...">
          <TextField.Slot></TextField.Slot>
          <TextField.Slot>
            <IoSearch size={19} />
          </TextField.Slot>
        </TextField.Root>
      </Flex>
      <NavTabs />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4 border-b border-b-[#E2E8F0] pb-4">
        <Box>
          <Heading size="5">Appearance</Heading>
          <Text as="p">Please update your dashboard settings here</Text>
        </Box>
        <Box className="lg:col-span-2">
          <Flex justify="end" align="center">
            <Popover.Root>
              <Popover.Trigger>
                <IconButton
                  color="gray"
                  radius="full"
                  variant="outline"
                  size="4"
                >
                  <PiWarningCircleBold size={20} />
                </IconButton>
              </Popover.Trigger>
              <Popover.Content
                size="1"
                width="312px"
                className="p-0 rounded-2xl"
              >
                <Box className="bg-[#1E293B] p-4">
                  <Heading size="2" className="text-white" mb="2">
                    Appearance
                  </Heading>
                  <Text as="p" size="1" className="text-white">
                    If you would change the theme of dashboard you can change
                    here.
                  </Text>
                </Box>
              </Popover.Content>
            </Popover.Root>
          </Flex>
        </Box>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4 border-b border-b-[#E2E8F0] pb-4">
        <Box>
          <Heading size="5">Company Logo</Heading>
          <Text as="p">Update your company logo</Text>
        </Box>
        <Flex
          justify="between"
          align="center"
          wrap="wrap"
          className="lg:col-span-2"
        >
          <Flex justify="between" align="center" wrap="wrap" gap="4" mb="3">
            <Box className="p-3 border border-[#C2C2C2] bg-[#F2F2F2] rounded-[5px]">
              <Image
                src="/images/gymkhana-gujrat-logo.png"
                alt="gymkhana-gujrat-logo"
                width={42}
                height={42}
              />
            </Box>
            <Button
              color="gray"
              variant="outline"
              className="rounded-[5px]"
              size="3"
            >
              Replace Logo
            </Button>
          </Flex>
          <Button
            variant="outline"
            color="red"
            size="3"
            className="font-semibold"
          >
            Remove
          </Button>
        </Flex>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4 border-b border-b-[#E2E8F0] pb-4">
        <Box>
          <Heading size="5">Interface Theme</Heading>
          <Text as="p">Select or Customize your UI Theme</Text>
        </Box>
        <Flex
          justify="start"
          align="center"
          wrap="wrap"
          gap="7"
          className="lg:col-span-2"
        >
          {/* <Button
            onClick={() => handleModeChange("inherit")}
            className="!inline-block !bg-transparent !h-full"
          >
            <Image
              src="/images/system-mode.png"
              alt="system"
              width={260}
              height={167}
            />
          </Button> */}
          <Button
            onClick={() => handleModeChange("light")}
            className="!inline-block !bg-transparent !h-[167px] !w-[260px] !relative"
          >
            <Image
              src="/images/light-mode.png"
              alt="system"
              className="w-full h-full"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Button>
          <Button
            onClick={() => handleModeChange("dark")}
            className="!inline-block !bg-transparent !h-[167px] !w-[260px] !relative"
          >
            <Image
              src="/images/dark-mode.png"
              alt="system"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Button>
        </Flex>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4 border-b border-b-[#E2E8F0] pb-4">
        <Box>
          <Heading size="5">Brand Color</Heading>
          <Text as="p">Select or Customize your UI Theme</Text>
        </Box>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 mb-4 border-b border-b-[#E2E8F0] pb-4 lg:col-span-2">
          <Button
            onClick={() => handleColorChange("green")}
            className="!bg-transparent w-full !h-full !p-0 !inline-block"
          >
            <Card className="bg-[#00B57540]">
              <Flex gap="3" align="center">
                <Avatar
                  size="1"
                  radius="medium"
                  fallback=""
                  className="bg-[#00B575] border-[1.3px] border-[#00B575]"
                />
                <Box>
                  <Text
                    as="div"
                    size="2"
                    className={`${
                      theme.appearance === "light"
                        ? "text-[#424242]"
                        : "text-white"
                    }`}
                    weight="bold"
                  >
                    Avocado Alien
                  </Text>
                  <Text
                    as="div"
                    size="1"
                    className={`${
                      theme.appearance === "light"
                        ? "text-[#424242]"
                        : "text-white"
                    }`}
                  >
                    Green
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Button>
          <Button
            onClick={() => handleColorChange("blue")}
            className="!bg-transparent w-full !h-full !p-0 !inline-block"
          >
            <Card className="bg-[#1B3A5D40]">
              <Flex gap="3" align="center">
                <Avatar
                  size="1"
                  radius="medium"
                  fallback=""
                  className="bg-[#1B3A5D] border-[1.3px] border-[#1B3A5D]"
                />
                <Box>
                  <Text
                    as="div"
                    size="2"
                    className={`${
                      theme.appearance === "light"
                        ? "text-[#424242]"
                        : "text-white"
                    }`}
                    weight="bold"
                  >
                    Storm Blue
                  </Text>
                  <Text
                    as="div"
                    size="1"
                    className={`${
                      theme.appearance === "light"
                        ? "text-[#424242]"
                        : "text-white"
                    }`}
                  >
                    Muted Dark Blue
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Button>
          <Button
            onClick={() => handleColorChange("purple")}
            className="!bg-transparent w-full !h-full !p-0 !inline-block"
          >
            <Card className="bg-[#4B2C4640]">
              <Flex gap="3" align="center">
                <Avatar
                  size="1"
                  radius="medium"
                  fallback=""
                  className="bg-[#4B2C46] border-[1.3px] border-[#4B2C46]"
                />
                <Box>
                  <Text
                    as="div"
                    size="2"
                    className={`${
                      theme.appearance === "light"
                        ? "text-[#424242]"
                        : "text-white"
                    }`}
                    weight="bold"
                  >
                    Burnt Grape
                  </Text>
                  <Text
                    as="div"
                    size="1"
                    className={`${
                      theme.appearance === "light"
                        ? "text-[#424242]"
                        : "text-white"
                    }`}
                  >
                    Deep Purple
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Button>
          <Button
            onClick={() => handleColorChange("gray")}
            className="!bg-transparent w-full !h-full !p-0 !inline-block"
          >
            <Card className="bg-[#ADADAD40]">
              <Flex gap="3" align="center">
                <Avatar
                  size="1"
                  radius="medium"
                  fallback=""
                  className="bg-[#ADADAD] border-[1.3px] border-[#ADADAD]"
                />
                <Box>
                  <Text
                    as="div"
                    size="2"
                    className={`${
                      theme.appearance === "light"
                        ? "text-[#424242]"
                        : "text-white"
                    }`}
                    weight="bold"
                  >
                    Shadow Clay
                  </Text>
                  <Text
                    as="div"
                    size="1"
                    className={`${
                      theme.appearance === "light"
                        ? "text-[#424242]"
                        : "text-white"
                    }`}
                  >
                    Dark Earthy Brown
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Button>
          <Button
            onClick={() => handleColorChange("bronze")}
            className="!bg-transparent w-full !h-full !p-0 !inline-block"
          >
            <Card className="bg-[#40444B40]">
              <Flex gap="3" align="center">
                <Avatar
                  size="1"
                  radius="medium"
                  fallback=""
                  className="bg-[#40444B] border-[1.3px] border-[#40444B]"
                />
                <Box>
                  <Text
                    as="div"
                    size="2"
                    className={`${
                      theme.appearance === "light"
                        ? "text-[#424242]"
                        : "text-white"
                    }`}
                    weight="bold"
                  >
                    Steel Fog
                  </Text>
                  <Text
                    as="div"
                    size="1"
                    className={`${
                      theme.appearance === "light"
                        ? "text-[#424242]"
                        : "text-white"
                    }`}
                  >
                    Deep Gray
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Button>
          <Button
            onClick={() => handleColorChange("orange")}
            className="!bg-transparent w-full !h-full !p-0 !inline-block"
          >
            <Card className="bg-[#5A2D1F40]">
              <Flex gap="3" align="center">
                <Avatar
                  size="1"
                  radius="medium"
                  fallback=""
                  className="bg-[#5A2D1F] border-[1.3px] border-[#5A2D1F]"
                />
                <Box>
                  <Text
                    as="div"
                    size="2"
                    className={`${
                      theme.appearance === "light"
                        ? "text-[#424242]"
                        : "text-white"
                    }`}
                    weight="bold"
                  >
                    Rust Ember
                  </Text>
                  <Text
                    as="div"
                    size="1"
                    className={`${
                      theme.appearance === "light"
                        ? "text-[#424242]"
                        : "text-white"
                    }`}
                  >
                    Burnt Orange
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Button>
          <Button
            onClick={() => handleColorChange("iris")}
            className="!bg-transparent w-full !h-full !p-0 !inline-block"
          >
            <Card className="bg-[#1E2A4540]">
              <Flex gap="3" align="center">
                <Avatar
                  size="1"
                  radius="medium"
                  fallback=""
                  className="bg-[#1E2A45] border-[1.3px] border-[#1E2A45]"
                />
                <Box>
                  <Text
                    as="div"
                    size="2"
                    className={`${
                      theme.appearance === "light"
                        ? "text-[#424242]"
                        : "text-white"
                    }`}
                    weight="bold"
                  >
                    Blue Dusk
                  </Text>
                  <Text
                    as="div"
                    size="1"
                    className={`${
                      theme.appearance === "light"
                        ? "text-[#424242]"
                        : "text-white"
                    }`}
                  >
                    Muted Navy
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Button>
          <Button
            onClick={() => handleColorChange("red")}
            className="!bg-transparent w-full !h-full !p-0 !inline-block"
          >
            <Card className="bg-[#A1111074]">
              <Flex gap="3" align="center">
                <Avatar
                  size="1"
                  radius="medium"
                  fallback=""
                  className="bg-[#A11110] border-[1.3px] border-[#A11110]"
                />
                <Box>
                  <Text
                    as="div"
                    size="2"
                    className={`${
                      theme.appearance === "light"
                        ? "text-[#424242]"
                        : "text-white"
                    }`}
                    weight="bold"
                  >
                    Electric Cherry
                  </Text>
                  <Text
                    as="div"
                    size="1"
                    className={`${
                      theme.appearance === "light"
                        ? "text-[#424242]"
                        : "text-white"
                    }`}
                  >
                    Hot Red
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Button>
          <Button
            onClick={() => handleColorChange("yellow")}
            className="!bg-transparent w-full !h-full !p-0 !inline-block"
          >
            <Card className="bg-[#FFE10040]">
              <Flex gap="3" align="center">
                <Avatar
                  size="1"
                  radius="medium"
                  fallback=""
                  className="bg-[#FFE100] border-[1.3px] border-[#FFE100]"
                />
                <Box>
                  <Text
                    as="div"
                    size="2"
                    className={`${
                      theme.appearance === "light"
                        ? "text-[#424242]"
                        : "text-white"
                    }`}
                    weight="bold"
                  >
                    Lemon Burst
                  </Text>
                  <Text
                    as="div"
                    size="1"
                    className={`${
                      theme.appearance === "light"
                        ? "text-[#424242]"
                        : "text-white"
                    }`}
                  >
                    Bright Yellow
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Button>
          <Button
            onClick={() => handleColorChange("violet")}
            className="!bg-transparent w-full !h-full !p-0 !inline-block"
          >
            <Card className="bg-[#8B00FF40]">
              <Flex gap="3" align="center">
                <Avatar
                  size="1"
                  radius="medium"
                  fallback=""
                  className="bg-[#8B00FF] border-[1.3px] border-[#8B00FF]"
                />
                <Box>
                  <Text
                    as="div"
                    size="2"
                    className={`${
                      theme.appearance === "light"
                        ? "text-[#424242]"
                        : "text-white"
                    }`}
                    weight="bold"
                  >
                    Violet Spark
                  </Text>
                  <Text
                    as="div"
                    size="1"
                    className={`${
                      theme.appearance === "light"
                        ? "text-[#424242]"
                        : "text-white"
                    }`}
                  >
                    Radiant Violet
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Button>
          <Button
            onClick={() => handleColorChange("gold")}
            className="!bg-transparent w-full !h-full !p-0 !inline-block"
          >
            <Card className="bg-[#FFB40040]">
              <Flex gap="3" align="center">
                <Avatar
                  size="1"
                  radius="medium"
                  fallback=""
                  className="bg-[#FFB400] border-[1.3px] border-[#FFB400]"
                />
                <Box>
                  <Text
                    as="div"
                    size="2"
                    className={`${
                      theme.appearance === "light"
                        ? "text-[#424242]"
                        : "text-white"
                    }`}
                    weight="bold"
                  >
                    Golden Pop
                  </Text>
                  <Text
                    as="div"
                    size="1"
                    className={`${
                      theme.appearance === "light"
                        ? "text-[#424242]"
                        : "text-white"
                    }`}
                  >
                    Vivid Gold
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Button>
          <Button
            onClick={() => handleColorChange("teal")}
            className="!bg-transparent w-full !h-full !p-0 !inline-block"
          >
            <Card className="bg-[#00FFD140]">
              <Flex gap="3" align="center">
                <Avatar
                  size="1"
                  radius="medium"
                  fallback=""
                  className="bg-[#00FFD1] border-[1.3px] border-[#00FFD1]"
                />
                <Box>
                  <Text
                    as="div"
                    size="2"
                    className={`${
                      theme.appearance === "light"
                        ? "text-[#424242]"
                        : "text-white"
                    }`}
                    weight="bold"
                  >
                    Teal Flash
                  </Text>
                  <Text
                    as="div"
                    size="1"
                    className={`${
                      theme.appearance === "light"
                        ? "text-[#424242]"
                        : "text-white"
                    }`}
                  >
                    Bright Teal
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4 border-b border-b-[#E2E8F0] pb-4">
        <Box>
          <Heading size="5">Dashboard Fonts</Heading>
          <Text as="p">Select or Customize your UI Fonts</Text>
        </Box>
        <Flex
          justify="start"
          wrap="wrap"
          align="center"
          gap="5"
          className="lg:col-span-2"
        >
          <Box className="text-start bg-[#82828240] px-2 py-3 w-[168px] rounded border-[1.3px] border-[#C5C5C5]">
            <Heading size="2" weight="bold">
              Quick Sand
            </Heading>
            <Text as="p" size="1" className="text-white">
              Default
            </Text>
          </Box>
          <Box className="text-start bg-[#82828240] px-2 py-3 w-[168px] rounded border-[1.3px] border-[#C5C5C5]">
            <Heading size="2" weight="bold">
              System Font
            </Heading>
            <Text as="p" size="1" className="text-white">
              This is test font
            </Text>
          </Box>
          <Box className="text-start bg-[#82828240] px-2 py-3 w-[168px] rounded border-[1.3px] border-[#C5C5C5]">
            <Heading size="2" weight="bold">
              Sans-Serif
            </Heading>
            <Text as="p" size="1" className="text-white">
              Default
            </Text>
          </Box>
        </Flex>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4 border-b border-b-[#E2E8F0] pb-4">
        <Box>
          <Heading size="5">Notification Color</Heading>
          <Text as="p">Select or Customize your Notifications</Text>
        </Box>
        <Box>
          <RadioGroup.Root color="gray" defaultValue="1" name="example">
            <RadioGroup.Item value="1">
              <Heading size="3" className="font-semibold">
                Email Notification
              </Heading>
              <Text as="p" size="3">
                System Default
              </Text>
            </RadioGroup.Item>
            <RadioGroup.Item value="2">
              <Heading size="3" className="font-semibold">
                Popup Notification
              </Heading>
              <Text as="p" size="3">
                Light
              </Text>
            </RadioGroup.Item>
            <RadioGroup.Item value="3">
              <Heading size="3" className="font-semibold">
                Popup Notification
              </Heading>
              <Text as="p" size="3">
                Dark
              </Text>
            </RadioGroup.Item>
          </RadioGroup.Root>
        </Box>
      </div>
      <Flex justify="end" align="center" mb="4" wrap="wrap">
        <Flex gap="3" wrap="wrap">
          <Button variant="outline" radius="full" color="gray">
            Cancel <IoCloseOutline size={20} />
          </Button>
          <Button
            variant="solid"
            radius="full"
            className="bg-[var(--accent-9)]"
          >
            Save <IoMdCheckmark size={20} />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Settings;
