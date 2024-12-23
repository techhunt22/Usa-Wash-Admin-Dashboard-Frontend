"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "../view-details-btn/Button";
import { useFetchData } from "../../../hooks/fetchData";
import { Job } from "utils/types";
import { useDispatch, useSelector } from "react-redux";
import { setJobs } from "../../../redux/features/jobTableSlice";

export const JobTable = (): JSX.Element | null => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error } = useFetchData(`/api/v1/jobs`, currentPage);
  const dispatch = useDispatch();

  if (data) {
    dispatch(setJobs(data?.data?.jobs?.data));
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const jobs: Job[] = data?.data?.jobs?.data || [];
  const totalPages = Math.ceil(
    data?.data?.total_jobs / data?.data?.jobs?.per_page
  );

  return (
    <div className="table w-full h-max pb-4 bg-white rounded-xl">
      <div className="table-headings font-roboto text-sm font-semibold grid text-darkGray grid-cols-[10%,16%,16%,7%,10%,15%,15%,10%] items-center h-14 px-2">
        <p>Job ID</p>
        <p>Job Type</p>
        <p>Customer Name</p>
        <p>Budget</p>
        <p>Status</p>
        <p>Location</p>
        <p>Scheduled Date & Time</p>
        <p>Actions</p>
      </div>
      {jobs?.map((job: Job, index: number) => (
        <div
          key={job.id}
          className={`table-data font-roboto text-sm font-normal text-tableData grid grid-cols-[10%,16%,16%,7%,10%,15%,15%,10%] items-center h-14 px-2 ${
            index % 2 === 0 ? "bg-tableBg" : "bg-white"
          }`}
        >
          <p>{job?.id}</p>
          <p className="truncate">{job?.service.name}</p>
          <p className="flex gap-2 items-center">
            <Image
              src="/images/avatar.svg"
              width={38}
              height={38}
              alt="avatar.svg"
            />
            {/* src={
                job?.user?.profile_pic?.split("profile_pics/")[1] ||
                "/avatar.svg"
              } */}
            {job?.user?.full_name}
          </p>
          <p>${job?.budget}</p>
          <p
            className={`w-[100px] h-[25px] ${
              job?.status === "completed"
                ? "text-completed bg-completed/10"
                : job.status === "in-progress"
                ? "text-progress bg-progress/10"
                : job.status === "open"
                ? "text-notBid bg-notBid/10"
                : job.status === "Bidding"
                ? "text-bidding bg-bidding/10"
                : ""
            } flex items-center justify-center rounded-lg`}
          >
            {job?.status}
          </p>
          <p className="truncate">{job?.location}</p>
          <p>{job?.scheduled_time}</p>
          <p>
            <Button color="text-primary" path="/dashboard/job-details" />
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
