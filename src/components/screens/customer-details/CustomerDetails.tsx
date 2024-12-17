"use client";
import { Active } from "@/components/active-modal/Active";
import { Delete } from "@/components/delete-modal/Delete";
import { Details } from "@/components/customer-details/Details";
import { JobTable } from "@/components/job-table/JobTable";
import { Suspend } from "@/components/suspendModal/SuspendModal";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { useCallback, useState } from "react";

export const CustomerDetails = (): JSX.Element | null => {
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [suspendModal, setSuspendModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<boolean>(false);

  const handleChevronIcon = useCallback(
    () => setShowBtn((prev: boolean) => !prev),
    []
  );

  //Suspend Modal
  const handleSuspend = useCallback(() => setSuspendModal(true), []);

  //Delete Modal
  const handleDelete = useCallback(() => setDeleteModal(true), []);

  //Active Modal
  const handleActive = useCallback(() => {
    setActiveModal(true);
    setShowBtn(false);
  }, []);

  return (
    <main className="flex flex-col gap-4 mt-10 pb-10 px-4">
      <div className="header w-full h-[110px] flex items-center justify-between bg-white px-8 rounded-lg">
        <h1 className="font-roboto text-2xl font-semibold">Customer Details</h1>
        <div className="btns flex gap-4 relative">
          <div className="w-[93px] h-[41px] text-xs font-roboto font-normal rounded-lg flex items-center justify-center gap-2 bg-customYellow/10 text-customYellow">
            <button onClick={handleSuspend}>Suspend</button>
            <button
              className="flex items-center justify-center"
              onClick={handleChevronIcon}
            >
              {showBtn ? (
                <ChevronUpIcon className="size-5" />
              ) : (
                <ChevronDownIcon className="size-5" />
              )}
            </button>
          </div>
          {showBtn && (
            <button
              onClick={handleActive}
              className="w-[93px] h-[41px] 
              absolute
             top-10 text-xs font-roboto font-normal rounded-lg flex items-center justify-center  bg-white text-completed shadow-md"
            >
              Active
            </button>
          )}

          <button
            onClick={handleDelete}
            className="w-[74px] h-[41px] text-xs font-roboto font-normal rounded-lg text-delete bg-delete/10 "
          >
            Delete
          </button>
        </div>
      </div>
      <div className="details flex w-full  h-max gap-4 ">
        <Details />
        <div className="total-jobs  w-[50%] h-[320px] px-10 bg-white rounded-xl flex flex-col justify-evenly">
          <h1 className="font-roboto text-xl font-medium">Total Jobs Posted</h1>
          <div className="flex items-center justify-between  ">
            <div className="flex flex-col">
              <p className="font-roboto text-[100px] font-bold  h-[120px]">
                35
              </p>
              <p className="font-roboto text-[20px] font-normal ">
                Jobs Posted
              </p>
            </div>
            <div className="image w-[77px] h-[77px] rounded-2xl bg-primary/10 flex items-center justify-center">
              <Image
                src={"/icons/jobs.svg"}
                width={36}
                height={32}
                alt="job.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <h1 className="font-roboto text-xl font-semibold">All Jobs</h1>
      <JobTable />
      {suspendModal && (
        <Suspend
          heading={` Suspend Customer`}
          content={
            <>
              {" "}
              Are you sure you want to <br /> suspend this Customer? The <br />{" "}
              Customer will not be able to <br /> access their account or post
              jobs <br /> until reactivated.
            </>
          }
          onToggle={setSuspendModal}
        />
      )}
      {deleteModal && (
        <Delete
          heading={` Confirm Customer Deletion`}
          content={
            <>
              Are you sure you want to delete <br />
              this Customer? This action <br />
              cannot be undone.
            </>
          }
          onToggle={setDeleteModal}
        />
      )}
      {activeModal && (
        <Active
          heading={`Activate Customer`}
          content={
            <>
              Are you sure you want to activate <br /> this Customer? The vendor
              will <br /> regain access to their account and <br /> can start
              postings jobs.
            </>
          }
          onToggle={setActiveModal}
        />
      )}
    </main>
  );
};
