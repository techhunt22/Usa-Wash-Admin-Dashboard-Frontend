import Image from "next/image";

export const TotalUsers = (): JSX.Element | null => {
  return (
    <div className="total-customers w-[22%] h-[225px] bg-white shadow-lg rounded-xl  flex flex-col items-center justify-center gap-2">
      <h1 className="text-3xl font-roboto text-primary font-bold">2,540</h1>
      <h1 className="font-roboto text-sm font-semibold">Total User</h1>
      <p className="text-center font-roboto text-xs font-normal ">
        Registered users on the <br /> platform.
      </p>
      <Image
        src={"/images/total-users.svg"}
        width={200}
        height={200}
        alt="total-user.svg"
      />
    </div>
  );
};
