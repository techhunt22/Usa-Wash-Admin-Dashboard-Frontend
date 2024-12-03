"use client";
import { Button } from "@/components/view-details-btn/Button";
import Image from "next/image";
import { useMemo, useState } from "react";
import { vendorDummyData } from "utils/data";

const ITEMS_PER_PAGE = 7;

export const VendorApprovalTable = (): JSX.Element | null => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(
    () => Math.ceil(vendorDummyData.length / ITEMS_PER_PAGE),
    [vendorDummyData?.length]
  );

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const paginatedData = useMemo(
    () => vendorDummyData?.slice(startIndex, startIndex + ITEMS_PER_PAGE),
    [startIndex]
  );
  return (
    <div className="table w-[98%] h-max pb-10 px-2 bg-white rounded-2xl ">
      <div className="table-headings font-roboto text-sm font-semibold grid text-darkGray grid-cols-4 gap-x-48 items-center h-14 px-2">
        <p>Vendor Name</p>
        <p>Email</p>
        <p>Phone</p>
        <p>Actions</p>
      </div>
      {paginatedData?.map((item, index) => (
        <div
          key={index}
          className={`
         ${index % 2 === 0 ? "bg-white" : "bg-[#F9FAFC]"}
         table-data grid grid-cols-4 items-center gap-x-48 h-14 gap-10
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
          <p>
            <Button path={""} color={`text-primary`} />
          </p>
        </div>
      ))}
      <div className="flex justify-center items-center gap-2 mt-4">
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
