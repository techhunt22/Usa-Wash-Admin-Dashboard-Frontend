"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ButtonProps } from "../../../utils/types";

export const Button = (props: ButtonProps): JSX.Element | null => {
  const { path, name, ImageUrl, ActiveImageUrl } = props;
  const pathname = usePathname();
  const isActive = pathname === path;
  const router = useRouter();

  const handleClick = () => {
    router.push(path);
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-between px-2 ${
        name === "Job Management" ||
        name === "Vendor Management" ||
        name === "Customer Management"
          ? "w-full"
          : "w-[95%]"
      } h-[60px] gap-4 rounded-lg border-[1px] ${
        isActive ? "bg-[#F3F8FE] border-primary" : "bg-white border-background"
      }`}
    >
      <div className="flex gap-2  ">
        <Image
          src={isActive ? ActiveImageUrl : ImageUrl}
          width={25}
          height={25}
          alt={name}
        />
        <p className={`text-lg ${isActive ? "text-primary" : "text-sidenav"}`}>
          {name}
        </p>
      </div>
      {isActive && <div className="w-[3px] h-[80%] bg-primary" />}
    </button>
  );
};
