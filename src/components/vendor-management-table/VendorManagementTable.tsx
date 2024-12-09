"use client";
import { Button } from "@/components/view-details-btn/Button";
import Image from "next/image";
import { useMemo, useState } from "react";
import { vendorManagementData } from "utils/data";

const ITEMS_PER_PAGE = 7;

export const VendorManagementTable = (): JSX.Element | null => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(
    () => Math.ceil(vendorManagementData.length / ITEMS_PER_PAGE),
    []
  );

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const paginatedData = useMemo(
    () => vendorManagementData?.slice(startIndex, startIndex + ITEMS_PER_PAGE),
    [startIndex]
  );
  return (
    <div className="table w-[98%] h-max pb-4 px-2 bg-white rounded-2xl ">
      <div className="table-headings font-roboto text-sm font-semibold grid text-darkGray grid-cols-5 gap-x-48 items-center h-14 px-2">
        <p>Vendor Name</p>
        <p>Email</p>
        <p>Phone</p>
        <p>Status</p>
        <p>Actions</p>
      </div>
      {paginatedData?.map((item, index) => (
        <div
          key={index}
          className={`
         ${index % 2 === 0 ? "bg-[#F9FAFC]" : "bg-white"}
         table-data grid grid-cols-5 items-center gap-x-48 h-14 gap-10 text-sm font-roboto font-normal
         `}
        >
          <p className="flex gap-2 items-center">
            <Image
              src={"/images/avatar.svg"}
              width={38}
              height={38}
              alt="avatar.svg"
            />
            {item?.name}
          </p>
          <p>{item?.email}</p>
          <p>{item?.phone}</p>
          <p
            className={`w-[75px] h-[22px] 
            ${
              item?.status == "Verified"
                ? "text-primary bg-primary/10"
                : item?.status == "Pending"
                ? "text-progress bg-progress/10"
                : ""
            }
            rounded-lg flex items-center justify-center text-xs `}
          >
            {item?.status}
          </p>
          <p>
            <Button path={"/dashboard/vendor-details"} color={`text-primary`} />
          </p>
        </div>
      ))}
      <div className="flex justify-center items-center gap-2 mt-2">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-2 rounded text-sm text-black font-roboto ${
                page === currentPage ? "bg-primary/10" : "bg-white"
              }`}
            >
              {page}
            </button>
          )
        )}
      </div>
    </div>
  );
};
