"use client";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { RootState } from "redux/store";
import { useDeleteRequest } from "utils/api";
import { ApiError, DeleteProps } from "utils/types";
import { useQueryClient } from "@tanstack/react-query";

export const Delete = ({
  onToggle,
  content,
  heading,
}: DeleteProps): JSX.Element | null => {
  const handleToggle = useCallback(() => onToggle(false), [onToggle]);
  const router = useRouter();
  const pathname = usePathname();
  const user = useSelector((state: RootState) => state.userDetails.user);
  const vendor = useSelector((state: RootState) => state.vendorDetails.user);
  const job = useSelector((state: RootState) => state.jobDetails.job);
  const jobId = typeof job?.id == "number" ? job?.id : undefined;
  const userId = typeof user?.id === "number" ? user?.id : undefined;
  const vendorId = typeof vendor?.id === "number" ? vendor?.id : undefined;
  const queryClient = useQueryClient();

  let id: number | undefined;
  let redirectPath: string;
  let url: string;
  if (pathname.includes("customer-details")) {
    id = userId;
    redirectPath = "/dashboard/user-selection/Customer-Management";
    url = `/api/v1/admin/users`;
  }
  if (pathname.includes("vendor-details")) {
    id = vendorId;
    redirectPath = "/dashboard/user-selection/Vendor-Management";
    url = `/api/v1/admin/users`;
  } else {
    id = jobId;
    redirectPath = "/dashboard/Job-Management";
    url = `/api/v1/admin/jobs`;
  }

  const { mutate: userMutate } = useDeleteRequest(url, id ?? 0);

  //Handle Delete Function
  const handleDelete = (e: React.FormEvent) => {
    e.preventDefault();
    if (id !== undefined) {
      userMutate(undefined, {
        onSuccess: (data) => {
          queryClient.invalidateQueries({
            queryKey: ["jobs", "/api/v1/admin/jobs"],
          });

          queryClient.invalidateQueries({
            queryKey: ["users", "/api/v1/admin/users"],
          });

          toast.success(data?.messages[0]);
          onToggle(false);
          router.replace(redirectPath);
        },
        onError: (error: ApiError) => {
          const messages = error.response?.data?.errors?.messages;
          if (messages && messages.length > 0) {
            toast.error(messages[0]);
          } else {
            console.error("An unknown error occurred.");
          }
        },
      });
    } else {
      console.error("User ID is undefined");
    }
  };

  return (
    <main className="fixed inset-0 bg-black/10 flex items-center justify-center">
      <div
        className="container w-[535px] h-[414px] bg-white   rounded-xl flex flex-col items-center justify-center gap-4 "
        style={{ backgroundImage: `url(/images/delete.svg)` }}
      >
        <h1 className="font-poppins text-4xl text-center text-delete font-medium">
          {heading}
        </h1>
        <p className="font-poppins text-xl font-normal text-center capitalize">
          {content}
        </p>
        <div className="btns flex gap-2">
          <button
            onClick={handleToggle}
            className="w-[155px] h-[58px] border-[1px] font-roboto text-lg font-medium border-filterText text-filterText rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="w-[188px] h-[58px]  text-white bg-delete   font-roboto text-lg font-medium rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </main>
  );
};
