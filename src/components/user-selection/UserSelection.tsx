"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Button } from "../button/Button";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import { UserSelectionProps } from "../../../utils/types";
import { usePathname } from "next/navigation";

export const UserSelection = ({
  onToggle,
}: UserSelectionProps): JSX.Element | null => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const pathsWithModal = [
      "/dashboard/user-selection/Customer-Management",
      "/dashboard/user-selection/Vendor-Management",
    ];

    setModalVisible(pathsWithModal.includes(pathname));
  }, [pathname]);

  useEffect(() => {
    onToggle(modalVisible);
  }, [modalVisible, onToggle]);

  return (
    <main className=" relative cursor-pointer flex items-center justify-between w-full rounded-lg h-[60px] border-[1px] border-background text-sidenav">
      <div
        onClick={() => setModalVisible((prev: boolean) => !prev)}
        className="w-full h-full flex items-center justify-between"
      >
        <div className="flex gap-2 px-2">
          <Image
            src={"/icons/user.svg"}
            width={25}
            height={25}
            alt="users.svg"
          />
          <p className="text-[18px] text-sidenav">Users</p>
        </div>
        <button className="flex items-center">
          {modalVisible ? (
            <ChevronUpIcon className="mr-2 h-6 w-6" />
          ) : (
            <ChevronDownIcon className="mr-2 h-6 w-6" />
          )}
        </button>
      </div>

      <div
        className={`w-full h-[120px] border-[1px] border-background rounded-lg flex flex-col gap-2 transition-all ${
          modalVisible ? "absolute " : "hidden"
        } top-16 bg-white `}
      >
        <Button
          path={"/dashboard/user-selection/Customer-Management"}
          name={"Customers"}
          ImageUrl={"/icons/job-management.svg"}
          ActiveImageUrl={"/icons/job-management-blue.svg"}
        />
        <Button
          path={"/dashboard/user-selection/Vendor-Management"}
          name={"Vendors"}
          ImageUrl={"/icons/job-management.svg"}
          ActiveImageUrl={"/icons/job-management-blue.svg"}
        />
      </div>
    </main>
  );
};
