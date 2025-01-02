"use client";
import Image from "next/image";
import { Button } from "../view-details-btn/Button";
import { GraphStats } from "../../../utils/types";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const Stats = ({ name, src, width }: GraphStats): JSX.Element | null => {
  const pathname = usePathname();

  const path =
    name == "Total Customers"
      ? "/dashboard/user-selection/Customer-Management"
      : "/dashboard/user-selection/Vendor-Management";

  // Local state to handle fallback data
  const [localData, setLocalData] = useState({
    customers: null,
    vendors: null,
    jobs: null,
    inactiveVendors: null,
  });

  // Extract data from Redux store
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

  // Fallback to localStorage if Redux store data is unavailable
  useEffect(() => {
    const fallbackData = {
      customers:
        customers !== null
          ? customers
          : JSON.parse(localStorage.getItem("totalCustomers") || "0"),
      vendors:
        vendors !== null
          ? vendors
          : JSON.parse(localStorage.getItem("totalVendors") || "0"),
      jobs:
        jobs !== null
          ? jobs
          : JSON.parse(localStorage.getItem("totalJobs") || "0"),
      inactiveVendors:
        inactiveVendors !== null
          ? inactiveVendors
          : JSON.parse(localStorage.getItem("totalInactiveVendors") || "0"),
    };
    setLocalData(fallbackData);
  }, [customers, vendors, jobs, inactiveVendors]);

  const verifiedVendors =
    localData.vendors !== null && localData.inactiveVendors !== null
      ? localData.vendors - localData.inactiveVendors
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
        <div className="flex flex-col w-[130px]">
          <h1 className="text-[#1E1B39] font-bold font-roboto text-4xl">
            {name == "Total Customers"
              ? `${localData.customers}`
              : name == "Jobs Posted"
              ? `${localData.jobs}`
              : name == "Verified Vendors"
              ? `${verifiedVendors}`
              : `${localData.vendors}`}
          </h1>
          {pathname === "/dashboard" && (
            <Button path={path} color={"text-primary"} />
          )}
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
