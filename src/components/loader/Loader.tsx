import Image from "next/image";

export const Loader = (): JSX.Element | null => {
  return (
    <div className="flex items-center gap-2 ">
      <Image
        src={"/images/loader.svg"}
        height={50}
        width={50}
        alt="loader.svg"
      />
    </div>
  );
};
