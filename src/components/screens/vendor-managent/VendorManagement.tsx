"use client";
import { PendingApprovals } from "@/components/pending-approvals/PendingApprovals";
import { SearchInput } from "@/components/search-input/SearchInput";
import { Stats } from "@/components/stats/stats";
import { VendorManagementTable } from "@/components/vendor-management-table/VendorManagementTable";
import Image from "next/image";
import { useState } from "react";

export const VendorManagement = (): JSX.Element | null => {
  const [search, setSearch] = useState<string>("");
  console.log(setSearch);
  console.log(search);
  return (
    <main className="w-full h-full pb-10 ">
      <div className="stats flex flex-wrap gap-4 mt-10">
        <Stats
          number={668}
          name="Total Vendors"
          src={"/images/total-vendor.svg"}
          width={`w-[30%]`}
        />
        <Stats
          number={598}
          name="Verified Vendors"
          src={"/images/verified-vendors.svg"}
          width={`w-[30%]`}
        />
        <PendingApprovals width={`w-[35%]`} />
      </div>
      <div className="header w-full h-20 flex items-center justify-between px-6 mt-8">
        <h1 className="font-roboto font-semibold text-2xl">
          Vendor Management
        </h1>
        <div className="options w-[40%] h-full  flex  items-center justify-end gap-2">
          <SearchInput />
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
      <VendorManagementTable />
    </main>
  );
};
