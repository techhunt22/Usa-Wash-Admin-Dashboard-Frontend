import Image from "next/image";

export const Avatar = (): JSX.Element | null => {
  return (
    <div className="avatar w-[215px] h-[70px] bg-white shadow-lg flex gap-2 items-center px-4 rounded-lg ">
      <Image
        src={"/images/avatar.png"}
        width={58}
        height={58}
        alt="avatar.png"
      />
      <p className=" text-[16px] font-medium">John Cosby</p>
    </div>
  );
};
