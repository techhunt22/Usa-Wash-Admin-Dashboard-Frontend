import Image from "next/image";
import { Button } from "../view-details-btn/Button";
import { GraphStats } from "../../../utils/types";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export const Stats = ({ name, src, width }: GraphStats): JSX.Element | null => {
  const customers = useSelector(
    (state: RootState) => state.analytics.totalCustomers
  );
  const vendors = useSelector(
    (state: RootState) => state.analytics.totalVendors
  );
  const jobs = useSelector((state: RootState) => state.analytics.totalJobs);
  const inactiveVendors = useSelector(
    (state: RootState) => state.analytics.totalInactiveVendors
  );

  const verifiedVendors =
    vendors !== null && inactiveVendors !== null
      ? vendors - inactiveVendors
      : 0;

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
            {name == "Total Customers"
              ? `${customers}`
              : name == "Jobs Posted"
              ? `${jobs}`
              : name == "Verified Vendors"
              ? `${verifiedVendors}`
              : `${vendors}`}
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
