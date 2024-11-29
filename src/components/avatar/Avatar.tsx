import Image from "next/image";

export const Avatar = (): JSX.Element | null => {
  return (
    <div className="avatar flex gap-2 items-center ">
      <Image src={"/avatar.png"} width={58} height={58} alt="avatar.png" />
      <p className=" text-[16px] font-medium">John Cosby</p>
    </div>
  );
};
