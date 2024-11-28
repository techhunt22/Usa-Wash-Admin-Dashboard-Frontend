"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

type ButtonProps = {
  path: string;
  name: string;
  ImageUrl: string;
  ActiveImageUrl: string;
};

export default function Button(props: ButtonProps) {
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
      className={`flex items-center w-[95%] h-[60px] gap-4 border-r-4  ${
        isActive ? "bg-[#F3F8FE] border-primary" : "bg-white border-white"
      }`}
    >
      <Image
        src={isActive ? ActiveImageUrl : ImageUrl}
        width={25}
        height={25}
        alt={name}
      />
      <p
        className={`text-[18px] ${isActive ? "text-primary" : "text-sidenav"}`}
      >
        {name}
      </p>
    </button>
  );
}
