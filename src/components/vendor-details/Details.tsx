import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export const Details = (): JSX.Element | null => {
  const vendor = useSelector((state: RootState) => state.vendorDetails.user);
  const jobsDone = useSelector(
    (state: RootState) => state.vendorDetails.reviewCount
  );
  return (
    <div className="vendor-details w-full h-[320px] bg-white rounded-xl flex">
      <div className="image w-[40%]  flex items-center justify-center">
        <Image
          src={"/images/vendor-details.svg"}
          width={216}
          height={216}
          alt="customer-details.svg"
        />
      </div>
      <div className="details w-[60%] flex flex-col items-center justify-center">
        <div className="w-full flex flex-col gap-2">
          <div className="name flex justify-between   w-[90%] ">
            <p className="font-roboto  text-sm font-normal text-filterText">
              Full Name
            </p>
            <p className=" font-roboto w-[50%] flex  text-sm font-normal">
              {vendor?.full_name}
            </p>
          </div>
          <div className="w-full h-[2px] bg-background" />
          <div className="name flex justify-between w-[90%] ">
            <p className="font-roboto text-sm font-normal text-filterText">
              Phone
            </p>
            <p className=" font-roboto w-[50%] text-sm font-normal">
              {vendor?.phone_number}
            </p>
          </div>
          <div className="w-full h-[2px] bg-background" />
          <div className="name flex justify-between w-[90%] ">
            <p className="font-roboto text-sm font-normal text-filterText">
              Email
            </p>
            <p className=" font-roboto w-[50%] text-sm font-normal">
              {vendor?.email}
            </p>
          </div>
          <div className="w-full h-[2px] bg-background" />
          <div className="name flex justify-between w-[90%] ">
            <p className="font-roboto text-sm font-normal text-filterText">
              Location
            </p>
            <p className=" font-roboto  w-[50%]  text-sm font-normal truncate">
              {vendor?.location}
            </p>
          </div>
          <div className="w-full h-[2px] bg-background" />
          <div className="name flex justify-between w-[90%] ">
            <p className="font-roboto text-sm font-normal text-filterText">
              Registration Date
            </p>
            <p className=" font-roboto  w-[50%]  text-sm font-normal">
              {vendor?.created_at?.slice(0, 10)}
            </p>
          </div>
          <div className="w-full h-[2px] bg-background" />
          <div className="name flex justify-between w-[90%] ">
            <p className="font-roboto text-sm font-normal text-filterText">
              Jobs Done
            </p>
            <p className=" font-roboto  w-[50%]  text-sm font-normal">
              {jobsDone}
            </p>
          </div>
          <div className="w-full h-[2px] bg-background" />
        </div>
      </div>
    </div>
  );
};
