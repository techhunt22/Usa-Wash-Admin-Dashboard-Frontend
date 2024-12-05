"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import { Button } from "../view-details-btn/Button";
import { dummyData } from "../../../utils/data";

const ITEMS_PER_PAGE = 7;

export const JobTable = (): JSX.Element | null => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(
    () => Math.ceil(dummyData.length / ITEMS_PER_PAGE),
    []
  );

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const paginatedData = useMemo(
    () => dummyData.slice(startIndex, startIndex + ITEMS_PER_PAGE),
    [startIndex]
  );

  return (
    <div className="table w-full h-max pb-4 bg-white rounded-xl ">
      <div className="table-headings font-roboto text-sm font-semibold grid text-darkGray grid-cols-8 items-center h-14 px-2">
        <p>Job ID</p>
        <p>Job Type</p>
        <p>Customer Name</p>
        <p>Budget</p>
        <p>Status</p>
        <p>Location</p>
        <p>Scheduled Date & Time</p>
        <p>Actions</p>
      </div>
      {paginatedData.map((item, index) => (
        <div
          key={index}
          className={`table-data font-roboto text-sm font-normal text-tableData grid grid-cols-8 items-center h-14 px-2 ${
            index % 2 === 0 ? "bg-[#F9FAFC]" : "bg-white"
          }`}
        >
          <p>{item?.id}</p>
          <p>{item?.service}</p>
          <p className="flex gap-2 items-center">
            <Image
              src={item.customer.avatar}
              width={38}
              height={38}
              alt="avatar.svg"
            />
            {item?.customer?.name}
          </p>
          <p>{item?.price}</p>
          <p
            className={`w-[100px] h-[25px] ${
              item?.status?.text === "Completed"
                ? "text-completed bg-completed/10"
                : item.status.text === "In Progress"
                ? "text-progress bg-progress/10"
                : item.status.text === "Not Bid"
                ? "text-notBid bg-notBid/10"
                : item.status.text === "Bidding"
                ? "text-bidding bg-bidding/10"
                : ""
            } flex items-center justify-center rounded-lg`}
          >
            {item?.status?.text}
          </p>
          <p className="truncate">{item?.location}</p>
          <p>{item?.date}</p>
          <p>
            <Button color="text-primary" path="" />
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
