import React, { useCallback, useMemo, useState } from "react";
import { JobFilterProp } from "../../../utils/types";
import { Slider } from "@mui/material";

export const JobFilter = ({ onToggle }: JobFilterProp): JSX.Element | null => {
  const [range, setRange] = useState<number[]>([700, 3000]);

  const rangeMin = 700;
  const rangeMax = 3000;

  const handleRangeChange = useCallback(
    (event: Event, newValue: number | number[]) => {
      setRange(newValue as number[]);
    },
    []
  );

  const minValue = useMemo(() => range[0], [range]);
  const maxValue = useMemo(() => range[1], [range]);

  return (
    <main className="fixed inset-0 bg-black/10 flex items-center justify-center">
      <div
        style={{
          backgroundImage: "url(/images/side-nav.svg)",
        }}
        className="filter bg-white rounded-xl w-[430px] h-[667px] flex flex-col"
      >
        <div className="header w-full h-[70px] border-b-[2px] border-gray-300 flex items-center justify-between px-10">
          <h1 className="font-montserrat font-semibold text-xl">Filter</h1>
          <button
            onClick={() => {
              onToggle(false);
            }}
            className="w-[84px] h-[31px] font-roboto text-xs font-medium border-[2px] rounded-lg border-customGray text-customGray"
          >
            Reset
          </button>
        </div>

        <div className="filter-options flex flex-col px-10 items-center gap-8 mt-4">
          <div className="job-type flex flex-col gap-2">
            <h1 className="font-roboto text-sm font-normal">Job Type:</h1>
            <select className="w-[370px] h-[58px] text-filterText text-xs outline-none font-roboto bg-customSilver rounded-lg">
              <option value="">Job Type</option>
            </select>
          </div>

          <div className="range w-[370px] h-[200px] mt-4 bg-customSilver rounded-lg flex flex-col gap-8  items-start pl-6 justify-center">
            <p className="font-roboto text-sm font-normal">Budget Range</p>
            <div className="range-values flex items-center gap-4">
              <p className="font-roboto text-sm font-semibold">Min</p>
              <div className="min-value w-[87px] h-[49px] bg-white text-primary rounded-lg flex items-center justify-center font-semibold text-lg">
                {minValue}
              </div>
              <div className="w-[7px] h-[4px] bg-black" />
              <p className="font-roboto text-sm font-semibold">Max</p>
              <div className="max-value w-[87px] h-[49px] bg-white text-primary rounded-lg flex items-center justify-center font-semibold text-lg">
                {maxValue}
              </div>
            </div>

            <div className="flex  w-[320px]">
              <Slider
                value={range}
                onChange={handleRangeChange}
                min={rangeMin}
                max={rangeMax}
                disableSwap
                sx={{
                  "& .MuiSlider-track": { backgroundColor: "#3b82f6" },
                  "& .MuiSlider-thumb": {
                    backgroundColor: "#3b82f6",
                    "&:hover": { boxShadow: "0px 0px 5px 2px #2563eb" },
                  },
                  "& .MuiSlider-rail": { backgroundColor: "#ffffff" },
                }}
              />
            </div>
          </div>

          <div className="Status flex flex-col gap-2">
            <h1 className="font-roboto text-sm font-normal">Status</h1>
            <select className="w-[370px] h-[58px] text-filterText text-xs outline-none font-roboto bg-customSilver rounded-lg">
              <option value="">Status</option>
            </select>
          </div>
          <button className="w-[147px] h-[57px] bg-primary text-white font-roboto text-lg font-medium rounded-xl">
            Apply Filter
          </button>
        </div>
      </div>
    </main>
  );
};
