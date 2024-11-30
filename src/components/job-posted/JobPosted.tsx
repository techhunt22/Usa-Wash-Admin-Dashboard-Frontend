"use client";

import Chart from "@/components/job-posted-graph/JobPostedGraph";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

export const JobPosted = (): JSX.Element | null => {
  return (
    <div className="job-posted w-[44%] h-[90%] bg-white shadow-lg rounded-lg">
      <div className="filter flex items-center justify-between px-4 pt-4">
        <h1 className="text-xl font-roboto font-semibold">Total Jobs Posted</h1>
        <select className="w-[85px] h-[36px] outline-none text-sm text-jobFilterText border-[1px] rounded-lg border-jobFilter">
          <option>Year</option>
        </select>
      </div>
      <div className="data flex flex-col  px-4">
        <h1 className="font-roboto text-[42px] font-semibold">3568</h1>
        <div className="analytics flex items-center gap-2">
          <div className="percent w-[41px] h-[24px]  flex  items-center justify-center rounded-lg bg-redBg text-customRed border-[1px] border-customRed">
            <ArrowDownIcon className="size-3" />
            8%
          </div>
          <p className="font-roboto font-medium text-lg">vs last Year</p>
        </div>
      </div>
      <div className="graph w-full h-max flex mt-12  ">
        <Chart />
      </div>
    </div>
  );
};
