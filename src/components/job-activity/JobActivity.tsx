"use client";

import { useJobActivity } from "utils/api";
import { DataItem } from "../../../utils/types";
import DonutChart from "../job-activity-graph/JobActivityGraph";
import { useState } from "react";
import { Loader } from "../loader/Loader";

const COLORS: string[] = ["#FFC107", "#007BFF80", "#28A74580", "#6C757D80"];

export const JobActivity = (): JSX.Element | null => {
  const [date, setDate] = useState<Date>(new Date());

  // Format the date to get YYYY-MM-DD (without time)
  const formattedDate: string = date.toISOString().slice(0, 10);

  // Fetch data using the hook
  const { data, isLoading } = useJobActivity(
    "/api/v1/admin/get-jobs-activity",
    {
      year: formattedDate,
    },
    [formattedDate]
  );

  if (!data) {
    return (
      <div className="w-[53%] h-[90%] items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="job-activity w-[53%] h-[90%] bg-white rounded-lg flex items-center flex-col gap-4 shadow-lg">
      {/* Header Section */}
      <div className="filter w-full flex items-center justify-between px-4 pt-4">
        <div className="flex flex-col">
          <p className="text-lg font-roboto font-normal text-JobActivity">
            Statistics
          </p>
          <h1 className="text-xl font-semibold font-roboto">Job Activity</h1>
        </div>
        <select
          className="w-[85px] h-[36px] outline-none text-sm text-jobFilterText border-[1px] rounded-lg border-jobFilter"
          onChange={(e) => {
            const selectedYear = e.target.value;

            setDate(new Date(`${selectedYear}-01-01`));
          }}
          value={date.getFullYear()}
        >
          <option value="2025">2025</option>
          <option value="2024">2024</option>
        </select>
      </div>

      {/* Divider */}
      <div className="w-[95%] h-[1px] bg-customGray" />

      {/* Graph and Statistics */}
      <div className="graph-container w-full h-full flex">
        <div className="graph w-[40%] h-full">
          {/* Donut Chart */}
          <DonutChart data={data} />
        </div>

        {/* Legend */}
        <div className="graph w-[60%] h-full flex items-center justify-center">
          <div className="flex flex-col gap-8">
            {data?.map((entry: DataItem, index: number) => (
              <div key={index} className="flex gap-14">
                <div className="container flex items-center gap-2">
                  <div
                    className="w-[15px] h-[15px] rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <p className="font-roboto text-lg font-semibold capitalize">
                    {entry.status}
                  </p>
                </div>
                <p className="text-filterText font-roboto font-normal text-lg">
                  {entry.count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
