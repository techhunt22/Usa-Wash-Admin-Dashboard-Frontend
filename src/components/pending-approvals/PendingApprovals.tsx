import Image from "next/image";
import { Button } from "../view-details-btn/Button";
import { PendingApprovalsStats } from "utils/types";

export const PendingApprovals = ({
  width,
}: PendingApprovalsStats): JSX.Element | null => {
  return (
    <div
      className={`pending-approvals rounded-xl ${width} h-[225px] bg-white shadow-lg flex items-center justify-center`}
    >
      <div className="content flex flex-col gap-2 mt-8 h-full ">
        <h1 className="font-roboto text-lg font-semibold">
          Pending Vendor Approvals
        </h1>
        <p className="capitalize font-roboto font-normal text-lg">
          Vendors awaiting approval to <br /> access the platform
        </p>
        <Button path={"/dashboard/Vendor-Approvals"} color={"text-delete"} />
      </div>
      <div className="image">
        <Image
          src={"/images/pending-approvals.svg"}
          width={170}
          height={170}
          alt="pending-approvals.svg"
        />
      </div>
    </div>
  );
};
