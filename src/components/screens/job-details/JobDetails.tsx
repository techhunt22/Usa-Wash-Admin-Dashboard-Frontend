"use client";
import { Delete } from "@/components/delete-modal/Delete";
import { CustomerDetails } from "@/components/job-customer-details/CustomerDetails";
import { VendorDetails } from "@/components/job-vendor-details/VendorDetails";
import { MarkAsCompleted } from "@/components/mark-as-completed-modal/MarkAsCompletedModal";
import { Offers } from "@/components/offers/Offers";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { Jobs } from "utils/types";

export const JobDetails = (): JSX.Element | null => {
  const [markAsCompletedModal, setMarkAsCompletedModal] =
    useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  // Get Jobs Data
  const jobs: Jobs | null = useSelector(
    (state: RootState) => state.jobDetails.job
  );

  // Format Schedule Time And Date
  const formatScheduledTime = (scheduledTime: string | undefined | Date) => {
    if (!scheduledTime) {
      return {
        date: "",
        startTime: "",
        endTime: "",
      };
    }

    const date = new Date(scheduledTime);

    if (isNaN(date.getTime())) {
      return {
        date: "",
        startTime: "",
        endTime: "",
      };
    }

    const formattedDate = new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);

    const startHour = date.getHours();
    const endHour = startHour + 1;

    const formattedStartTime = `${startHour % 12 || 12}${
      startHour >= 12 ? "pm" : "am"
    }`;
    const formattedEndTime = `${endHour % 12 || 12}${
      endHour >= 12 ? "pm" : "am"
    }`;

    return {
      date: formattedDate,
      startTime: formattedStartTime,
      endTime: formattedEndTime,
    };
  };

  const { date, startTime, endTime } = formatScheduledTime(
    jobs?.scheduled_time
  );

  //Mark As Completed Modal
  const handleMarkAsCompleted = useCallback(
    () => setMarkAsCompletedModal(true),
    []
  );

  //Delete Modal
  const handleDelete = useCallback(() => setDeleteModal(true), []);

  if (!jobs) {
    return <div>No Jobs.....</div>;
  }

  return (
    <main className="flex flex-col pb-10 mt-4 gap-4 px-4">
      <div className="header w-full h-[110px] flex items-center justify-between bg-white px-8 rounded-lg">
        <h1 className="font-roboto text-2xl font-semibold">Job Details</h1>
        <div className="btns flex gap-4 font-roboto text-base font-normal">
          <button
            onClick={handleMarkAsCompleted}
            className="w-[204px] h-[55px] bg-primary/10 text-primary  rounded-xl flex items-center justify-center gap-2"
          >
            <Image
              src={"/icons/mark-as-completed.svg"}
              width={13}
              height={15}
              alt="mark-as-completed.svg"
            />
            Mark As Completed
          </button>
          <div
            className={`w-[121px] h-[55px] capitalize  rounded-xl flex items-center justify-center ${
              jobs?.status === "completed"
                ? "text-completed bg-completed/10"
                : jobs.status === "in-progress"
                ? "text-progress bg-progress/10"
                : jobs.status === "open"
                ? "text-notBid bg-notBid/10"
                : jobs.status === "cancelled"
                ? "text-bidding bg-bidding/10"
                : ""
            } `}
          >
            {jobs?.status}
          </div>
          <button
            onClick={handleDelete}
            className="w-[106px] h-[55px] bg-delete/10 text-delete  rounded-xl flex justify-center items-center gap-2"
          >
            <Image
              src={"/icons/delete.svg"}
              width={13}
              height={15}
              alt="delete.svg"
            />
            Delete
          </button>
        </div>
      </div>
      <div className="info-section flex gap-2">
        <CustomerDetails />
        <VendorDetails />
      </div>
      <div className="content-section w-full flex gap-2 ">
        <div className="card-wash-service w-[65%] bg-white pt-10 rounded-xl h-max pb-6 px-10 flex flex-col gap-4">
          <h1 className="text-3xl font-roboto font-semibold">
            {jobs?.job_title}
          </h1>
          <div className="details flex items-center gap-10 ">
            <div className="flex items-center gap-3">
              <Image
                src={"/icons/user-grey.svg"}
                width={18}
                height={18}
                alt="user-svg"
              />
              <p className="font-roboto text-base font-normal">
                {jobs?.user?.full_name}
              </p>
            </div>
            <div className="bg-primary rounded-full w-[7px] h-[7px]" />
            <div className="flex items-center gap-3">
              <Image
                src={"/icons/job-grey.svg"}
                width={18}
                height={18}
                alt="user-svg"
              />
              <p className="font-roboto text-base font-normal">{date}</p>
            </div>
            <div className="bg-primary rounded-full w-[7px] h-[7px]" />
            <div className="flex items-center gap-3">
              <Image
                src={"/icons/clock.svg"}
                width={18}
                height={18}
                alt="user-svg"
              />
              <p className="font-roboto text-base font-normal">
                {startTime} to {endTime}
              </p>
            </div>
          </div>
          <div className="amount flex items-center justify-between pt-4">
            <h1 className="text-3xl font-roboto font-semibold">Budget</h1>
            <h1 className="text-3xl font-roboto font-extrabold text-primary">
              ${jobs?.budget}
            </h1>
          </div>
          <div className="description flex flex-col gap-2 pt-4">
            <h1 className="font-roboto text-xl font-semibold">
              Job Description{" "}
            </h1>
            <p className="font-roboto font-normal text-lg text-darkGray leading-8 text-justify">
              {jobs?.job_description}
            </p>
          </div>
          <div className="location flex flex-col pt-4 ">
            <h1 className="font-roboto text-xl font-semibold">Location</h1>
            <p className="font-roboto font-normal text-lg text-darkGray leading-8 text-justify">
              {jobs?.location}
            </p>
            <Image
              src={"/images/location.svg"}
              width={860}
              height={272}
              alt="location.svg"
              className="pt-4"
            />
          </div>
          <div className="gallery flex flex-col gap-4 pt-4">
            <h1 className="font-roboto text-xl font-semibold">Gallery</h1>
            <Image
              src={"/images/gallery.svg"}
              width={753}
              height={144}
              alt="Gallery.svg"
            />
          </div>
        </div>
        <div className="vendor-offers w-[35%] bg-white rounded-xl h-max pb-4 pt-10 gap-4 flex flex-col items-center">
          <h1 className="text-xl font-roboto font-semibold">
            Offers By Vendors
          </h1>
          <Offers />
        </div>
      </div>
      {markAsCompletedModal && (
        <MarkAsCompleted
          onToggle={setMarkAsCompletedModal}
          heading={
            <>
              Mark Job as <br /> Completed
            </>
          }
          content={
            <>
              Are you sure you want to mark <br /> this job as completed?
            </>
          }
        />
      )}
      {deleteModal && (
        <Delete
          content={
            <>
              Are you sure you want to <br /> delete this job? This action{" "}
              <br /> cannot be undone.
            </>
          }
          heading={`Confirm Job Deletion`}
          onToggle={setDeleteModal}
        />
      )}
    </main>
  );
};
