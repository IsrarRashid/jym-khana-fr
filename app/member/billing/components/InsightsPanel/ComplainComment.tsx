import { Box, Button, Flex, Heading, Text, TextArea } from "@radix-ui/themes";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import apiClient, { AxiosError } from "@/app/services/api-client";
import { RESERVATION_API } from "@/app/APIs";
import { toast } from "react-toastify";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { RiPassportLine, RiUser6Fill } from "react-icons/ri";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { ComplainResult } from "./InsightsPanel";
import dynamic from "next/dynamic";
import markCompleteAnim from "./files/markComplete.json";
import Spinner from "@/app/components/Spinner";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const schema = z.object({
  id: z.number().optional(),
  reply: z.string().min(1, { message: "Please add Reply!" }),
});

type HelpDesk = z.infer<typeof schema>;

interface Props {
  complain: ComplainResult;
  setRefresh: Dispatch<SetStateAction<boolean>>;
}

const ComplainComment = ({ complain, setRefresh }: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<HelpDesk>({ resolver: zodResolver(schema) });
  console.log(errors);
  const [isSubmitting, setSubmitting] = useState(false);
  const createdMessage = "Record Updated Successfully";
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCommentBox, setSelectedCommentBox] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);

  useEffect(() => {
    setValue("id", complain.id);
  }, [complain.id, setValue]);

  useEffect(() => {
    if (isSubmitted) {
      const params = new URLSearchParams(searchParams.toString());
      const timeout = setTimeout(() => {
        router.push("/member?" + params.toString());
        router.refresh();
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isSubmitted, searchParams, router]);

  const onSubmit = async (formData: HelpDesk) => {
    console.log("Form Data:", formData);
    console.log(errors);

    try {
      setSubmitting(true);
      const response = await apiClient.post(
        `${RESERVATION_API}/UpdateHelpDesk?id=${formData.id}&Reply=${formData.reply}`
      );
      console.log("Response:", response);
      toast.success(createdMessage);
      setSubmitted(true);
      setRefresh((prev) => !prev);
    } catch (err) {
      setSubmitting(false);
      setSelectedCommentBox(false);
      console.error("Submission error:", err);
      toast.error((err as AxiosError).message);
    } finally {
      setSubmitting(false); // Always run after try/catch
    }
  };

  return (
    <>
      <Box p="5" className="rounded-lg bg-theme" mb="3">
        <Box
          className={`!transition-all !duration-300 overflow-hidden ${
            isSubmitted ? " !opacity-100 !h-20" : "opacity-0 !h-0"
          }`}
        >
          <Flex justify="center">
            <Box as="div" className="h-20 w-20">
              {isSubmitted && (
                <Lottie animationData={markCompleteAnim} loop={false} />
              )}
            </Box>
          </Flex>
        </Box>
        <Box
          className={`!transition-all !duration-300 overflow-hidden ${
            isSubmitted ? "!opacity-0 !h-0" : "!opacity-100 !h-full"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <Heading size="5">
              Booking Date: {new Date(complain.cdate).toLocaleDateString()}
            </Heading>
            <Flex justify="end" align="center" gap="4">
              <Text>Status:</Text>
              {complain.status === false ? (
                <Flex gap="1" align="center">
                  <RxCounterClockwiseClock className="text-[var(--yellow-9)]" />
                  <Text color="yellow">Pending</Text>
                </Flex>
              ) : (
                <Flex gap="1" align="center">
                  <FaRegCheckCircle className="text-[var(--green-9)]" />
                  <Text color="green">Resolved</Text>
                </Flex>
              )}
            </Flex>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
            <Box className="lg:col-span-2">
              <Flex gap="5" mb="2">
                <Flex gap="2">
                  <Text weight="medium">Member ID:</Text>
                  <Flex gap="1" align="center">
                    <RiPassportLine />
                    {complain.memberid}
                  </Flex>
                </Flex>

                <Flex gap="2" align="center">
                  <Text weight="medium">Complain Type:</Text>
                  <Text className="text-[var(--accent-9)]">
                    <FaBowlFood />
                  </Text>
                  <Text className="text-[var(--accent-9)]">
                    {complain.complaintType}
                  </Text>
                </Flex>
              </Flex>
              <Flex gap="2" align="center">
                <Text weight="medium">Name:</Text>
                <Flex gap="1" align="center">
                  <RiUser6Fill />
                  member name
                </Flex>
              </Flex>
            </Box>
            {complain.status === false && (
              <Box
                onClick={() => setSelectedCommentBox(true)}
                className="!flex !justify-end !items-end"
              >
                <Button
                  size="4"
                  className={`transition-all ${
                    selectedCommentBox ? "!hidden" : "!block"
                  }`}
                >
                  Resolve
                </Button>
              </Box>
            )}
          </div>
          {complain.status && (
            <Box
              as="div"
              className={`overflow-hidden transition-all h-full opacity-100`}
            >
              <Text size="5" mb="3" as="label" weight="bold" htmlFor="remarks">
                Comment
              </Text>
              <TextArea
                mb="3"
                {...register("reply")}
                size="3"
                id="remarks"
                disabled
                value={complain.reply}
              />
            </Box>
          )}
          <Box
            as="div"
            className={`overflow-hidden transition-all ${
              selectedCommentBox ? "h-full opacity-100" : "h-0  opacity-0"
            }`}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Text size="5" mb="3" as="label" weight="bold" htmlFor="remarks">
                Comment
              </Text>
              <TextArea
                mb="3"
                {...register("reply")}
                size="3"
                id="remarks"
                placeholder="Write any comment here..."
              />
              {errors.reply && (
                <p className="text-red-500 mt-1 mb-1">{errors.reply.message}</p>
              )}
              <Box as="div" className="text-end">
                <Button size="3" disabled={isSubmitting} type="submit">
                  Reply {isSubmitting && <Spinner />}
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ComplainComment;
