import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { RootState } from "redux/store";
import { useJobCompleted } from "utils/api";
import { ApiError, MarkAsCompletedModal } from "utils/types";

export const MarkAsCompleted = ({
  onToggle,
  heading,
  content,
}: MarkAsCompletedModal): JSX.Element | null => {
  const handleToggle = useCallback(() => onToggle(false), [onToggle]);
  const router = useRouter();
  const queryClient = useQueryClient();

  const job = useSelector((state: RootState) => state.jobDetails.job);
  const id = typeof job?.id == "number" ? job?.id : undefined;

  const { mutate: JobMutate } = useJobCompleted(
    `/api/v1/admin/jobs/${id}/complete`
  );

  // Handle Job Completed

  const handleJobCompleted = (e: React.FormEvent) => {
    e.preventDefault();
    if (id != undefined) {
      JobMutate(undefined, {
        onSuccess: (data) => {
          queryClient.invalidateQueries({
            queryKey: ["jobs", "/api/v1/admin/jobs"],
          });

          toast.success(data?.messages[0] || "Job Status Updated");
          onToggle(false);
          router.push("/dashboard/Job-Management");
        },
        onError: (error: ApiError) => {
          const messages = error.response?.data?.errors?.messages;
          if (messages && messages.length > 0) {
            onToggle(false);

            toast.error(messages[0]);
          } else {
            console.error("An unknown error occurred.");
          }
        },
      });
    }
  };

  return (
    <main className="fixed inset-0 bg-black/10 flex items-center justify-center">
      <div
        className="container w-[535px] h-[414px] bg-white   rounded-xl flex flex-col items-center justify-center gap-4 "
        style={{ backgroundImage: `url(/images/active.svg)` }}
      >
        <h1 className="font-poppins text-4xl text-primary font-medium">
          {heading}
        </h1>
        <p className="font-poppins text-xl font-normal text-center capitalize">
          {content}
        </p>
        <div className="btns flex gap-2">
          <button
            onClick={handleToggle}
            className="w-[118px] h-[58px] border-[1px] font-roboto text-lg font-medium border-filterText text-filterText rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleJobCompleted}
            className="w-[220px] h-[58px]  text-white bg-primary   font-roboto text-lg font-medium rounded-lg"
          >
            Mark As Completed
          </button>
        </div>
      </div>
    </main>
  );
};
