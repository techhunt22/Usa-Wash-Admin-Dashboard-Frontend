"use client";
import { DateRangePicker } from "@/components/date-range-input/dateRangeInput";
import { PendingApprovals } from "@/components/pending-approvals/PendingApprovals";
import { SearchInput } from "@/components/search-input/SearchInput";
import { Stats } from "@/components/stats/stats";
import { VendorApprovalTable } from "@/components/vendor-approval-table/VendorApprovalTable";
import Image from "next/image";
import { useState } from "react";

export const VendorApprovals = (): JSX.Element | null => {
  const [modalVisible, setIsModalVisible] = useState(false);
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
      <div className="header w-full h-20 flex items-center justify-between px-8 mt-4 ">
        <h1 className="font-roboto font-semibold text-2xl">Vendor Approvals</h1>
        <div className="option w-[40%] flex items-center gap-2 ">
          <SearchInput />
          <button
            onClick={() => {
              setIsModalVisible(true);
            }}
            className="w-[214px] h-[54px] text-sidenav font-roboto text-base flex justify-center gap-2 items-center font-normal bg-white rounded-xl "
          >
            <Image
              src={"/images/date-range.svg"}
              width={20}
              height={20}
              alt="date-range.svg"
            />
            Select Date Range
          </button>
        </div>
      </div>
      <VendorApprovalTable />
      {modalVisible && <DateRangePicker onToggle={setIsModalVisible} />}
    </main>
  );
};
