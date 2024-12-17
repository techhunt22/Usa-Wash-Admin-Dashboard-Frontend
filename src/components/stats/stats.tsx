import Image from "next/image";
import { Button } from "../view-details-btn/Button";
import { GraphStats } from "../../../utils/types";

export const Stats = ({
  name,
  number,
  src,
  width,
}: GraphStats): JSX.Element | null => {
  return (
    <div
      className={`total-customers ${width} h-[225px] bg-white shadow-lg rounded-lg flex items-center justify-center`}
    >
      <div className="content w-[50%] flex flex-col items-center gap-4">
        <div className="flex flex-col ">
          <p className="text-sm font-roboto font-normal text-darkGray">
            Statistics
          </p>
          <h1 className="font-roboto font-semibold text-lg">{name}</h1>
        </div>
        <div>
          <h1 className="text-[#1E1B39] font-bold font-roboto text-4xl">
            {number}
          </h1>
          <Button path={""} color={"text-primary"} />
        </div>
      </div>
      <div className="Image w-[50%] flex">
        <Image
          src={src}
          width={140}
          height={100}
          alt="line-chart.svg"
          className="mt-6"
        />
      </div>
    </div>
  );
};
