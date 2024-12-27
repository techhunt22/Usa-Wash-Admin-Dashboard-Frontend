"use client";
import { JobActivity } from "@/components/job-activity/JobActivity";
import { JobPosted } from "@/components/job-posted/JobPosted";
import { JobTable } from "@/components/job-table/JobTable";
import { PendingApprovals } from "@/components/pending-approvals/PendingApprovals";
import { Stats } from "@/components/stats/stats";
import { TotalUsers } from "@/components/total-users/TotalUser";
import { useEffect } from "react";
import {
  setTotalCustomers,
  setTotalInactiveVendors,
  setTotalJobs,
  setTotalUsers,
  setTotalVendors,
} from "../../../../redux/features/analyticsSlice";
import { useFetchApplicationData } from "../../../../utils/api";
import { useDispatch } from "react-redux";

export const Dashboard = (): JSX.Element | null => {
  const dispatch = useDispatch();
  const { data } = useFetchApplicationData(`/api/v1/admin/dashboard`);
  useEffect(() => {
    if (data) {
      const totalJobs = data?.data?.jobActivity?.reduce(
        (sum: number, job: { count?: number }) => sum + (job?.count || 0),
        0
      );
      dispatch(setTotalInactiveVendors(data?.data?.totalInactiveVendors));
      dispatch(setTotalCustomers(data?.data?.totalCustomers));
      dispatch(setTotalUsers(data?.data?.totalUsers));
      dispatch(setTotalVendors(data?.data?.totalVendors));
      dispatch(setTotalJobs(totalJobs));
    }
  }, [data, dispatch]);

  return (
    <main className="w-full h-full pb-10 ">
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
        <JobTable
          search=""
          max_budget={0}
          min_budget={0}
          service_id={0}
          status=""
        />
      </div>
    </main>
  );
};
