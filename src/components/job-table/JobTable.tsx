import Image from "next/image";
import { Button } from "../view-details-btn/Button";
import { dummyData } from "../../../utils/data";

export const JobTable = (): JSX.Element | null => {
  return (
    <div className="table w-full h-[600px] bg-white rounded-xl ">
      <div className="table-headings font-roboto text-sm font-semibold grid grid-cols-8 items-center  h-14 px-2 ">
        <p>Job ID</p>
        <p>Job Type</p>
        <p>Customer Name</p>
        <p>Budget</p>
        <p>Status</p>
        <p>Location</p>
        <p>Scheduled Date & Time</p>
        <p>Actions</p>
      </div>
      {dummyData?.map((item, index) => (
        <div
          key={index}
          className={`table-data font-roboto text-sm font-normal grid grid-cols-8 items-center  h-14 px-2  ${
            index % 2 == 0 ? "bg-white" : "bg-[#F9FAFC]"
          }`}
        >
          <p>{item?.id}</p>
          <p>{item?.service}</p>
          <p className="flex gap-2 items-center">
            <Image
              src={item?.customer?.avatar}
              width={38}
              height={38}
              alt="avatar.svg"
            />
            {item?.customer?.name}
          </p>
          <p>{item?.price}</p>
          <p className="w-[100px] h-[25px] text-[#28A745] bg-[#28A745]/10 flex items-center justify-center rounded-lg">
            {item?.status?.text}
          </p>
          <p className="truncate">{item?.location}</p>
          <p>{item?.date}</p>
          <p>
            <Button color={`text-primary`} path={``} />
          </p>
        </div>
      ))}
    </div>
  );
};
