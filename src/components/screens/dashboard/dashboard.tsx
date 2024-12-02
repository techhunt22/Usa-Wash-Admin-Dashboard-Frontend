import { JobActivity } from "@/components/job-activity/JobActivity";
import { JobPosted } from "@/components/job-posted/JobPosted";
import { JobTable } from "@/components/job-table/JobTable";
import { PendingApprovals } from "@/components/pending-approvals/PendingApprovals";
import { Stats } from "@/components/stats/stats";
import { TotalUsers } from "@/components/total-users/TotalUser";

export const Dashboard = (): JSX.Element | null => {
  return (
    <main className="w-full h-full ">
      <div className="stats-graphs w-full h-[250px] flex items-center justify-evenly flex-wrap ">
        <Stats
          name={"Total Customers"}
          width={"w-[22%]"}
          number={1635}
          src={"/images/total-customer.svg"}
        />
        <Stats
          name={"Total Vendors"}
          width={"w-[22%]"}
          number={668}
          src={"/images/total-vendors.svg"}
        />

        <TotalUsers />
        <PendingApprovals width={`w-[30%]`} />
      </div>
      <div className="graphs w-full h-[430px] px-4 flex items-center justify-between flex-wrap ">
        <JobPosted />
        <JobActivity />
      </div>
      <div className="job-table px-4 flex flex-col gap-2">
        <h1 className="font-montserrat font-semibold text-xl">All Jobs</h1>
        <JobTable />
      </div>
    </main>
  );
};
