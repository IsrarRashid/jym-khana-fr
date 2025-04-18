import Carousel from "@/app/components/Carousel/Carousel";
import { Avatar, Box, Flex, Heading, Progress, Text } from "@radix-ui/themes";
import { FaUser } from "react-icons/fa";
import { RestaurantDetail } from "../../page";

const InsightsPanel = ({ details }: { details: RestaurantDetail }) => {
  const slides = details.orderTakers.map((orderTaker, i) => (
    <Flex key={i} justify="center" align="center" direction="column">
      <Avatar
        className="w-[58px] h-[58px]"
        src={`${process.env.NEXT_PUBLIC_BACKEND_API}/${orderTaker.orderTakerPicture}`}
        fallback={<FaUser />}
        radius="full"
        mb="1"
      />
      <Text as="p" weight="regular" size="1" align="center">
        {orderTaker.orderTakerName}
      </Text>
    </Flex>
  ));

  // const slides = [
  //   {
  //     slideData: (
  //       <Flex justify="center" align="center" direction="column">
  //         <Avatar
  //           className="w-[58px] h-[58px]"
  //           src="/images/user-image.png"
  //           fallback="?"
  //           radius="full"
  //         />
  //         <Text as="p" weight="regular" size="1">
  //           Aqsa
  //         </Text>
  //       </Flex>
  //     ),
  //   },
  //   {
  //     slideData: (
  //       <Flex justify="center" align="center" direction="column">
  //         <Avatar
  //           className="w-[58px] h-[58px]"
  //           src="/images/user-image.png"
  //           fallback="?"
  //           radius="full"
  //         />
  //         <Text as="p" weight="regular" size="1">
  //           Aqsa
  //         </Text>
  //       </Flex>
  //     ),
  //   },
  //   {
  //     slideData: (
  //       <Flex justify="center" align="center" direction="column">
  //         <Avatar
  //           className="w-[58px] h-[58px]"
  //           src="/images/user-image.png"
  //           fallback="?"
  //           radius="full"
  //         />
  //         <Text as="p" weight="regular" size="1">
  //           Aqsa
  //         </Text>
  //       </Flex>
  //     ),
  //   },
  //   {
  //     slideData: (
  //       <Flex justify="center" align="center" direction="column">
  //         <Avatar
  //           className="w-[58px] h-[58px]"
  //           src="/images/user-image.png"
  //           fallback="?"
  //           radius="full"
  //         />
  //         <Text as="p" weight="regular" size="1">
  //           Aqsa
  //         </Text>
  //       </Flex>
  //     ),
  //   },
  //   {
  //     slideData: (
  //       <Flex justify="center" align="center" direction="column">
  //         <Avatar
  //           className="w-[58px] h-[58px]"
  //           src="/images/user-image.png"
  //           fallback="?"
  //           radius="full"
  //         />
  //         <Text as="p" weight="regular" size="1">
  //           Aqsa
  //         </Text>
  //       </Flex>
  //     ),
  //   },
  //   {
  //     slideData: (
  //       <Flex justify="center" align="center" direction="column">
  //         <Avatar
  //           className="w-[58px] h-[58px]"
  //           src="/images/user-image.png"
  //           fallback="?"
  //           radius="full"
  //         />
  //         <Text as="p" weight="regular" size="1">
  //           Aqsa
  //         </Text>
  //       </Flex>
  //     ),
  //   },
  // ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-10 gap-3 mb-4">
      <Box
        className="bg-theme rounded-[25px] xl:col-span-5 lg:col-span-2"
        p="4"
      >
        <Text weight="regular" size="5" as="p">
          Achievement <Text size="1">(Compare to previous Day)</Text>
        </Text>
        <Flex justify="between">
          <Heading size="4">{details?.achievementPercentage}%</Heading>
          <Text as="p" size="3">
            <Text>1,649K /</Text>
            <Text>2,713K</Text>
          </Text>
        </Flex>
        <Box width="full">
          <Progress
            size="3"
            radius="full"
            value={details?.achievementPercentage}
            className="h-[14px] text-[var(--accent-9)]"
          />
        </Box>
      </Box>
      <Box
        className="bg-theme rounded-[25px] xl:col-span-5 lg:col-span-2"
        p="4"
      >
        <Flex justify="between" width="full">
          <Box>
            <Text as="p" className="font-normal whitespace-nowrap" size="5">
              Order Takers
            </Text>
            <Heading className="text-[32px]" weight="bold">
              {details.orderTakers.length}
            </Heading>
          </Box>
          <Box className="w-[70%] overflow-hidden">
            <Carousel
              slides={slides.map((slide) => slide)}
              slidesPerView={1}
              slidesOnSm={1}
              slidesOn2Xl={5}
              slidesOnLg={3}
              slidesOnMd={3}
              slidesOnXl={4}
              spaceBetween={0}
            />
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default InsightsPanel;
