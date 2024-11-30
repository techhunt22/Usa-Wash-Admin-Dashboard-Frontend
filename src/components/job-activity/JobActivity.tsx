"use client";
import { DataItem } from "../../../utils/types";
import DonutChart from "../job-activity-graph/JobActivityGraph";

const data: DataItem[] = [
  { name: "In Progress", value: 1391 },
  { name: "Bidding", value: 927 },
  { name: "Completed", value: 856 },
  { name: "Not Bid", value: 392 },
];

const COLORS: [string, string, string, string] = [
  "#FFC107",
  "#007BFF80",
  "#28A74580",
  "#6C757D80",
];

export const JobActivity = (): JSX.Element | null => {
  return (
    <div className="job-activity w-[53%] h-[90%] bg-white rounded-lg flex items-center flex-col gap-4 shadow-lg">
      <div className="filter w-full flex items-center justify-between px-4 pt-4">
        <div className="flex flex-col">
          <p className="text-lg font-roboto font-normal text-JobActivity">
            Statistics
          </p>
          <h1 className="text-xl font-semibold font-roboto">Job Activity</h1>
        </div>
        <select className="w-[85px] h-[36px] outline-none text-sm text-jobFilterText border-[1px] rounded-lg border-jobFilter">
          <option>Year</option>
        </select>
      </div>
      <div className="w-[95%] h-[1px] bg-customGray" />
      <div className="graph-container w-full h-full flex">
        <div className="graph w-[40%] h-full">
          <DonutChart data={data} />
        </div>
        <div className="graph w-[60%] h-full flex items-center justify-center">
          <div className="flex flex-col gap-8">
            {data.map((entry, index) => (
              <div key={index} className="flex gap-14">
                <div className="container flex items-center gap-2">
                  <div
                    className="w-[15px] h-[15px] rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <p className="font-roboto text-lg font-semibold">
                    {entry.name}
                  </p>
                </div>
                <p className="text-filterText font-roboto font-normal text-lg">
                  {entry.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
