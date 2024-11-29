import { PendingApprovals } from "@/components/pending-approvals/PendingApprovals";
import { Stats } from "@/components/stats/stats";
import { TotalUsers } from "@/components/total-users/TotalUser";

export const Dashboard = (): JSX.Element | null => {
  return (
    <main className="w-full h-full ">
      <div className="stats-graphs w-full h-[250px] flex items-center justify-evenly flex-wrap ">
        <Stats
          name={"Total Customers"}
          number={1635}
          src={"/images/total-customer.svg"}
        />
        <Stats
          name={"Total Vendors"}
          number={668}
          src={"/images/total-vendors.svg"}
        />

        <TotalUsers />
        <PendingApprovals />
      </div>
    </main>
  );
};
