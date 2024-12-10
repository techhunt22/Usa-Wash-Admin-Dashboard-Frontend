import Image from "next/image";

export const Testimony = (): JSX.Element | null => {
  return (
    <div className="testimony w-[327px] h-[143px] border-[1px] border-background flex gap-2 rounded-xl">
      <div className="image w-[100px] ">
        <Image
          src={"/images/shape.svg"}
          width={50}
          height={50}
          alt="shape.svg"
        />
      </div>
      <div className="content flex flex-col justify-between">
        <p className="font-roboto text-xs font-bold">Kurt Mullins</p>
        <p className="font-roboto text-[10px] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <Image
          src={"/images/reviews.svg"}
          width={101}
          height={20}
          alt="reviews.svg"
        />
        <p className="font-roboto text-[8px] font-normal">8 Days ago</p>
      </div>
    </div>
  );
};
