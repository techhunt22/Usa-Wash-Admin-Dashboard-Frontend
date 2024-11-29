import Image from "next/image";
import { Button } from "../view-details-btn/Button";
import { GraphStats } from "../../../utils/types";

export const Stats = ({
  name,
  number,
  src,
}: GraphStats): JSX.Element | null => {
  return (
    <div className="total-customers w-[22%] h-[225px] bg-white shadow-lg rounded-lg flex items-center justify-center">
      <div className="content w-[50%] flex flex-col items-center gap-4">
        <div className="flex flex-col ">
          <p className="text-sm font-roboto font-normal text-[#333333]">
            Statistics
          </p>
          <h1 className="font-roboto font-semibold text-lg">{name}</h1>
        </div>
        <div>
          <h1 className="text-[#1E1B39] font-bold font-roboto text-4xl">
            {number}
          </h1>
          <Button path={""} color={"text-[#2F74FA]"} />
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
