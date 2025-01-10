import { useQueryClient } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { RootState } from "redux/store";
import { useUserRequest } from "utils/api";
import { ApiError, ApproveProps } from "utils/types";

export const Approve = ({
  onToggle,
  heading,
  content,
}: ApproveProps): JSX.Element | null => {
  const handleToggle = useCallback(() => onToggle(false), [onToggle]);
  const pathname = usePathname();
  const user = useSelector((state: RootState) => state.userDetails.user);
  const vendor = useSelector((state: RootState) => state.vendorDetails.user);

  const userId = typeof user?.id === "number" ? user?.id : undefined;
  const vendorId = typeof vendor?.id === "number" ? vendor?.id : undefined;
  const queryClient = useQueryClient();
  const router = useRouter();

  let id: number | undefined;
  let redirectPath: string;
  if (pathname.includes("customer-details")) {
    id = userId;
    redirectPath = "/dashboard/user-selection/Customer-Management";
  } else if (pathname.includes("vendor-details")) {
    id = vendorId;
    redirectPath = "/dashboard/user-selection/Vendor-Management";
  }

  const { mutate: userMutate } = useUserRequest(
    "/api/v1/admin/users",
    id ?? 0,
    "active"
  );

  // Handle Approve Function
  const handleApprove = (e: React.FormEvent) => {
    e.preventDefault();
    if (id !== undefined) {
      userMutate(undefined, {
        onSuccess: async (data) => {
          queryClient.refetchQueries({
            queryKey: ["users", "/api/v1/admin/users"],
          });

          queryClient.resetQueries({
            queryKey: ["analytics", "/api/v1/admin/dashboard"],
          });

          onToggle(false);
          toast.success(data?.messages[0]);
          router.replace(redirectPath);
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
        className="container w-[518px] h-[368px] bg-white   rounded-xl flex flex-col items-center justify-center gap-4 "
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
            className="w-[155px] h-[58px] border-[1px] font-roboto text-lg font-medium border-filterText text-filterText rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleApprove}
            className="w-[188px] h-[58px]  text-white bg-primary   font-roboto text-lg font-medium rounded-lg"
          >
            Approve Vendor
          </button>
        </div>
      </div>
    </main>
  );
};
