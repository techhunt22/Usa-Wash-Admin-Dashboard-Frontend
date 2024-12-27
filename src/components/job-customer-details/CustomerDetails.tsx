import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export const CustomerDetails = (): JSX.Element | null => {
  const jobs = useSelector((state: RootState) => state.jobDetails.job);

  return (
    <div className="customer-info w-[37%] h-[280px] justify-center bg-white rounded-xl flex flex-col px-2 gap-6">
      <div className="header flex items-center justify-between h-14 px-4 ">
        <h1 className="font-roboto text-lg font-semibold">Customer Info</h1>
        <button className="w-[104px] h-[36px] font-roboto text-xs font-normal bg-primary/10 text-primary rounded-lg">
          View Profile
        </button>
      </div>
      <div className="information flex gap-4 ">
        <div className="image w-[35%]  flex items-start justify-center">
          <Image
            src={"/images/customer-details.svg"}
            width={124}
            height={124}
            alt="customer-details.svg"
          />
        </div>
        <div className="details w-[65%] flex flex-col items-center justify-center">
          <div className="w-full flex flex-col gap-3">
            <div className="name flex justify-between   w-full ">
              <p className="font-roboto  text-sm font-normal text-filterText">
                Full Name
              </p>
              <p className=" font-roboto w-[60%] flex  text-sm font-normal">
                {jobs?.user?.full_name}
              </p>
            </div>
            <div className="w-full h-[2px] bg-background" />
            <div className="name flex justify-between w-full ">
              <p className="font-roboto text-sm font-normal text-filterText">
                Phone
              </p>
              <p className=" font-roboto w-[60%] text-sm font-normal">
                {jobs?.user?.phone_number}
              </p>
            </div>
            <div className="w-full h-[2px] bg-background" />
            <div className="name flex justify-between w-full  ">
              <p className="font-roboto text-sm font-normal text-filterText">
                Email
              </p>
              <p className=" font-roboto w-[60%]  text-sm font-normal">
                {jobs?.user?.email}
              </p>
            </div>
            <div className="w-full h-[2px] bg-background" />
            <div className="name flex justify-between w-full ">
              <p className="font-roboto text-sm font-normal text-filterText">
                Location
              </p>
              <p className=" font-roboto  w-[60%]  text-sm font-normal truncate">
                {jobs?.user?.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
