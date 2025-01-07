"use client";

import Chart from "@/components/job-posted-graph/JobPostedGraph";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useJobTimeline } from "utils/api";
import { Loader } from "../loader/Loader";

interface JobData {
  job_posts: number;
}

export const JobPosted = (): JSX.Element | null => {
  const [date, setDate] = useState<Date>(new Date());

  const formattedDate: string = date.toISOString().slice(0, 10);

  // Fetch data using the hook
  const { data, isLoading } = useJobTimeline(
    "/api/v1/admin/get-total-jobs-timeline",
    {
      year: formattedDate,
    },
    [formattedDate]
  );

  const totalJobs = data?.current_year?.reduce(
    (sum: number, entry: JobData) => sum + entry.job_posts,
    0
  );

  const percentage =
    ((totalJobs - data?.previous_year) / data?.previous_year) * 100;

  const percentageValue = !isFinite(percentage) ? 0 : percentage;

  if (!data) {
    return (
      <div className="w-[53%] h-[90%] items-center justify-center">
        {" "}
        <Loader />
      </div>
    );
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="job-posted w-[44%] h-[90%] bg-white shadow-lg rounded-lg">
      <div className="filter flex items-center justify-between px-4 pt-4">
        <h1 className="text-xl font-roboto font-semibold">Total Jobs Posted</h1>
        <select
          onChange={(e) => {
            const selectedYear = e.target.value;
            setDate(new Date(`${selectedYear}-01-01`));
          }}
          value={date.getFullYear()}
          className="w-[85px] h-[36px] outline-none text-sm text-jobFilterText border-[1px] rounded-lg border-jobFilter"
        >
          <option>2025</option>
          <option>2024</option>
        </select>
      </div>
      <div className="data flex flex-col  px-4">
        <h1 className="font-roboto text-[42px] font-semibold">{totalJobs}</h1>
        <div className="analytics flex items-center gap-2">
          <div
            className={`percent w-max p-2 h-[24px]  flex  items-center justify-center rounded-lg border-[1px]  ${
              percentageValue > 0
                ? `text-completed border-completed bg-completed/10`
                : `text-customRed border-customRed bg-redBg `
            }`}
          >
            {percentageValue > 0 ? (
              <ArrowUpIcon className="size-3" />
            ) : (
              <ArrowDownIcon className="size-3" />
            )}
            {percentageValue}%
          </div>
          <p className="font-roboto font-medium text-lg">vs last Year</p>
        </div>
      </div>
      <div className="graph w-full h-max flex mt-12  ">
        <Chart data={data?.current_year} />
      </div>
    </div>
  );
};
