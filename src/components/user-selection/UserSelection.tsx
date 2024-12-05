"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Button } from "../button/Button";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import { UserSelectionProps } from "../../../utils/types";

export const UserSelection = ({
  onToggle,
}: UserSelectionProps): JSX.Element | null => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    onToggle(modalVisible);
  }, [modalVisible, onToggle]);

  return (
    <div className="user-selection relative flex items-center justify-between w-full rounded-lg h-[60px] border-[1px] border-background text-sidenav">
      <div className="flex gap-4 px-2">
        <Image src={"/icons/user.svg"} width={25} height={25} alt="users.svg" />
        <p className="text-[18px] text-sidenav">Users</p>
      </div>
      <button
        onClick={() => setModalVisible((prev: boolean) => !prev)}
        className="flex items-center"
      >
        {modalVisible ? (
          <ChevronUpIcon className="mr-2 h-6 w-6" />
        ) : (
          <ChevronDownIcon className="mr-2 h-6 w-6" />
        )}
      </button>
      <div
        className={`w-full h-[120px] flex flex-col gap-2 transition-all ${
          modalVisible ? "absolute " : "hidden"
        } top-16 bg-white `}
      >
        <Button
          path={"/dashboard/user-selection/Vendor-Management"}
          name={"Vendor Management"}
          ImageUrl={"/icons/job-management.svg"}
          ActiveImageUrl={"/icons/job-management-blue.svg"}
        />
        <Button
          path={"/dashboard/user-selection/Customer-Management"}
          name={"Customer Management"}
          ImageUrl={"/icons/job-management.svg"}
          ActiveImageUrl={"/icons/job-management-blue.svg"}
        />
      </div>
    </div>
  );
};
