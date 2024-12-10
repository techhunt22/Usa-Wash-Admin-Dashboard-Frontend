"use client";
import { Active } from "@/components/active-modal/Active";
import { Approve } from "@/components/approve-modal/Aprrove";
import { Delete } from "@/components/delete-modal/Delete";
import { Suspend } from "@/components/suspendModal/SuspendModal";
import { Testimony } from "@/components/testimony/Testimony";
import { Details } from "@/components/vendor-details/Details";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { useCallback, useState } from "react";

export const VendorDetails = (): JSX.Element | null => {
  const [showActiveBtn, setShowActiveBtn] = useState<boolean>(false);
  const [showRejectBtn, setShowRejectBtn] = useState<boolean>(false);
  const [suspendModal, setSuspendModal] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [approveModal, setApproveModal] = useState<boolean>(false);

  const handleRejectChevron = useCallback(
    () => setShowRejectBtn((prev: boolean) => !prev),
    []
  );
  const handleActiveChevron = useCallback(
    () => setShowActiveBtn((prev: boolean) => !prev),
    []
  );

  const handleApprove = useCallback(() => setApproveModal(true), []);
  const handleActive = useCallback(() => {
    setActiveModal(true);
    setShowActiveBtn(false);
  }, []);
  const handleSuspend = useCallback(() => setSuspendModal(true), []);
  const handleDelete = useCallback(() => setDeleteModal(true), []);

  return (
    <main className="flex flex-col px-4 gap-4 pb-10">
      <div className="header w-full  h-[110px] mt-4 flex items-center justify-between bg-white px-8 rounded-lg">
        <h1 className="font-roboto text-2xl font-semibold">Vendor Details</h1>
        <div className="btns flex gap-4 ">
          <div className="w-[102px] h-[41px] text-xs relative font-roboto font-normal rounded-lg gap-2 flex items-center justify-center bg-primary/10 text-primary">
            <button onClick={handleApprove}>Approve</button>
            <button
              onClick={handleRejectChevron}
              className="flex items-center justify-center"
            >
              {showRejectBtn ? (
                <ChevronUpIcon className="size-5" />
              ) : (
                <ChevronDownIcon className="size-5" />
              )}
            </button>
            {showRejectBtn && (
              <button
                className="w-[93px] h-[41px] 
              absolute
             top-12 text-xs font-roboto font-normal rounded-lg flex items-center justify-center  bg-white text-customRed shadow-md"
              >
                Reject
              </button>
            )}
          </div>

          <div className="w-[102px] h-[41px] text-xs relative font-roboto font-normal rounded-lg flex items-center justify-center bg-customYellow/10 gap-2 text-customYellow">
            <button onClick={handleSuspend}>Suspend</button>
            <button
              onClick={handleActiveChevron}
              className="flex items-center justify-center"
            >
              {showActiveBtn ? (
                <ChevronUpIcon className="size-5" />
              ) : (
                <ChevronDownIcon className="size-5" />
              )}
            </button>
            {showActiveBtn && (
              <button
                onClick={handleActive}
                className="w-[93px] h-[41px] 
              absolute
             top-12 text-xs font-roboto font-normal rounded-lg flex items-center justify-center  bg-white text-completed shadow-md"
              >
                Active
              </button>
            )}
          </div>

          <button
            onClick={handleDelete}
            className="w-[74px] h-[41px] text-xs font-roboto font-normal rounded-lg text-delete bg-delete/10 "
          >
            Delete
          </button>
        </div>
      </div>
      <div className="container w-full  flex gap-2">
        <div className="w-[60%]   flex flex-col gap-2">
          <div className="details w-full ">
            <Details />
          </div>
          <div className="about bg-white shadow-md rounded-xl h-max pb-4  flex flex-col">
            <div className="w-[90%] p-10">
              <p className="text-sm font-roboto font-normal text-filterText">
                About
              </p>
              <p className="font-normal text-lg  font-roboto">
                Michael Guzzi specializes in high-quality vehicle detailing with
                5 years of experience in providing car wash, wax, and interior
                cleaning services.
              </p>
            </div>
            <div className="w-full h-[2px] bg-background" />
            <div className="documents w-full h-max  p-10 flex justify-between">
              <p className="text-sm font-roboto font-normal text-filterText">
                Documents Submitted
              </p>
              <div className="w-[300px] flex flex-col gap-2 h-max   items-center justify-end">
                <div className="documents-data flex">
                  <div>
                    <p className="break-words  px-3 font-roboto font-normal text-sm">
                      MichaelguzziBusiness License.pdf
                    </p>
                  </div>
                  <div className="btns flex gap-1">
                    <button className="w-[32px] h-[30px] flex items-center justify-center bg-primary rounded-full">
                      <Image
                        src={"/icons/download.svg"}
                        width={18}
                        height={18}
                        alt="download.svg "
                      />
                    </button>
                    <button className="w-[32px] h-[30px] flex items-center justify-center bg-black rounded-full">
                      <Image
                        src={"/icons/eye.svg"}
                        width={18}
                        height={18}
                        alt="eye.svg "
                      />
                    </button>
                  </div>
                </div>
                <div className="documents-data flex">
                  <div>
                    <p className="break-words  px-3 font-roboto font-normal text-sm">
                      MichaelguzziBusiness License.pdf
                    </p>
                  </div>
                  <div className="btns flex gap-1">
                    <button className="w-[32px] h-[30px] flex items-center justify-center bg-primary rounded-full">
                      <Image
                        src={"/icons/download.svg"}
                        width={18}
                        height={18}
                        alt="download.svg "
                      />
                    </button>
                    <button className="w-[32px] h-[30px] flex items-center justify-center bg-black rounded-full">
                      <Image
                        src={"/icons/eye.svg"}
                        width={18}
                        height={18}
                        alt="eye.svg "
                      />
                    </button>
                  </div>
                </div>
                <div className="documents-data flex">
                  <div>
                    <p className="break-words  px-3 font-roboto font-normal text-sm">
                      MichaelguzziBusiness License.pdf
                    </p>
                  </div>
                  <div className="btns flex gap-1">
                    <button className="w-[32px] h-[30px] flex items-center justify-center bg-primary rounded-full">
                      <Image
                        src={"/icons/download.svg"}
                        width={18}
                        height={18}
                        alt="download.svg "
                      />
                    </button>
                    <button className="w-[32px] h-[30px] flex items-center justify-center bg-black rounded-full">
                      <Image
                        src={"/icons/eye.svg"}
                        width={18}
                        height={18}
                        alt="eye.svg "
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="reviews w-[40%] h-max pb-4  bg-white shadow-md rounded-xl flex flex-col items-center gap-6 pt-10">
          <div className="flex flex-col items-center">
            <p className="font-roboto font-medium text-base ">Overall Rating</p>
            <p className="font-roboto text-[70px] font-bold">4.5</p>
            <Image
              src={"/images/reviews.svg"}
              width={225}
              height={45}
              alt="reviews.svg"
            />
            <p className="font-normal text-sm font-roboto">
              Based on 135 Reviews
            </p>
          </div>

          <Testimony />
          <Testimony />
          <Testimony />
        </div>
      </div>
      {deleteModal && (
        <Delete
          onToggle={setDeleteModal}
          heading={`Confirm Vendor Deletion`}
          content={
            <>
              Are you sure you want to delete <br /> this vendor? This action
              cannot <br /> be undone.
            </>
          }
        />
      )}
      {activeModal && (
        <Active
          heading={`Activate Vendor`}
          content={
            <>
              Are you sure you want to activate <br /> this vendor? The vendor
              will regain <br /> access to their account and can <br /> start
              applying for jobs.
            </>
          }
          onToggle={setActiveModal}
        />
      )}
      {suspendModal && (
        <Suspend
          heading={`Suspend Vendor`}
          content={
            <>
              Are you sure you want to <br /> suspend this vendor? The vendor{" "}
              <br /> will not be able to access their
              <br /> account or apply for jobs until <br />
              reactivated.
            </>
          }
          onToggle={setSuspendModal}
        />
      )}
      {approveModal && (
        <Approve
          heading={`Approve Vendor`}
          content={
            <>
              Are you sure you want to <br /> approve this vendor?
            </>
          }
          onToggle={setApproveModal}
        />
      )}
    </main>
  );
};
