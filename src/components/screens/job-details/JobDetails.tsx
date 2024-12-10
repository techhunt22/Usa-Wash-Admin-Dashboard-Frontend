"use client";
import { Delete } from "@/components/delete-modal/Delete";
import { MarkAsCompleted } from "@/components/mark-as-completed-modal/MarkAsCompletedModal";
import Image from "next/image";
import { useCallback, useState } from "react";

export const JobDetails = (): JSX.Element | null => {
  const [markAsCompletedModal, setMarkAsCompletedModal] =
    useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  const handleMarkAsCompleted = useCallback(
    () => setMarkAsCompletedModal(true),
    []
  );
  const handleDelete = useCallback(() => setDeleteModal(true), []);

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
          <button className="w-[121px] h-[55px] bg-customYellow/10 text-customYellow  rounded-xl">
            In Progress
          </button>
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
