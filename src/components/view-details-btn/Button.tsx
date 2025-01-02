"use client";
import { useRouter } from "next/navigation";
import { ViewDetailsProps } from "../../../utils/types";
import { useCallback } from "react";

export const Button = ({
  path,
  color,
}: ViewDetailsProps): JSX.Element | null => {
  const router = useRouter();

  const handlePath = useCallback(() => {
    if (path) {
      router.push(path);
    }
  }, [path, router]);

  return (
    <button
      onClick={handlePath}
      className={`w-[116px] h-[30px] bg-btn ${color} rounded-lg font-roboto font-medium`}
    >
      View Details
    </button>
  );
};
