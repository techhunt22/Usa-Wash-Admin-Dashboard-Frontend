"use client";
import { JobFilter } from "@/components/job-filter/JobFilter";
import { JobTable } from "@/components/job-table/JobTable";
import { SearchInput } from "@/components/search-input/SearchInput";
import Image from "next/image";
import { useCallback, useState } from "react";

export const JobManagement = (): JSX.Element | null => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string | undefined>("");
  const [status, setStatus] = useState<string | undefined>("");
  const [min_budget, setMinBudget] = useState<number | undefined>();
  const [max_budget, setMaxBudget] = useState<number | undefined>();
  const [service_id, setServiceId] = useState<number | undefined>();

  const handleModal = useCallback(() => {
    setModalVisible(true);
  }, []);

  return (
    <main className="w-full h-full mt-4 p-4 pb-10">
      <div className="headings w-full h-20  flex items-center justify-between px-4">
        <h1 className="font-roboto text-xl font-semibold">All Jobs</h1>
        <div className="options w-[40%] h-full  flex  items-center justify-end gap-2">
          <SearchInput onToggle={setSearchQuery} />
          <button
            onClick={handleModal}
            className="w-[110px] h-[60px] flex gap-2 items-center justify-center bg-white rounded-xl"
          >
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
      <JobTable
        max_budget={max_budget}
        min_budget={min_budget}
        status={status}
        search={searchQuery}
        service_id={service_id}
      />
      {modalVisible && (
        <JobFilter
          onToggle={setModalVisible}
          setStatus={setStatus}
          setMaxBudget={setMaxBudget}
          setMinBudget={setMinBudget}
          setServiceId={setServiceId}
        />
      )}
    </main>
  );
};
