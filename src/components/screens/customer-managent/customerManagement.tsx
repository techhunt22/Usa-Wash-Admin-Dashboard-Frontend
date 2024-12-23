"use client";
import { CustomerTable } from "@/components/customer-management-table/CustomerTable";
import { SearchInput } from "@/components/search-input/SearchInput";
import { Stats } from "@/components/stats/stats";
import Image from "next/image";
import { useState } from "react";

export const CustomerManagement = (): JSX.Element | null => {
  const [searchResult, setSearchResult] = useState<string>("");
  console.log(searchResult);
  return (
    <main className="pb-10">
      <div className="stats flex flex-wrap gap-4 mt-10 ">
        <Stats
          number={668}
          name="Total Customers"
          src={"/images/total-vendor.svg"}
          width={`w-[30%]`}
        />
        <Stats
          number={598}
          name="Jobs Posted"
          src={"/images/verified-vendors.svg"}
          width={`w-[30%]`}
        />
      </div>
      <div className="headings w-full h-20  flex items-center justify-between px-4 mt-10">
        <h1 className="font-roboto text-xl font-semibold">
          Customer Management{" "}
        </h1>
        <div className="options w-[40%] h-full  flex  items-center justify-end gap-2">
          <SearchInput setSearchResult={setSearchResult} />
          <button className="w-[110px] h-[60px] flex gap-2 items-center justify-center bg-white rounded-xl">
            <Image
              src={"/icons/filter.svg"}
              width={28}
              height={28}
              alt="filter.svg"
            />
            <p className="font-roboto text-sidenav ">Filter</p>
          </button>
        </div>
      </div>
      <CustomerTable />
    </main>
  );
};
