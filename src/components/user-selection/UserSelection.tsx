"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Button } from "../button/Button";
import { UserSelectionProps } from "../../../utils/types";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";

export const UserSelection = ({
  onToggle,
}: UserSelectionProps): JSX.Element | null => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    onToggle(modalVisible);
  }, [modalVisible, onToggle]);

  return (
    <div className="user-selection relative flex items-center justify-between w-[95%] text-sidenav">
      <div className="flex gap-4">
        <Image
          src={"/side-nav/ci_users-group.png"}
          width={25}
          height={25}
          alt="users.png"
        />
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
        } top-8 bg-white shadow-sm`}
      >
        <Button
          path={"/dashboard/UserSelection/Vendor-Management"}
          name={"Vendor Management"}
          ImageUrl={"/side-nav/folder-management.png"}
          ActiveImageUrl={"/side-nav/folder-management-blue.png"}
        />
        <Button
          path={"/dashboard/UserSelection/Customer-Management"}
          name={"Customer Management"}
          ImageUrl={"/side-nav/folder-management.png"}
          ActiveImageUrl={"/side-nav/folder-management-blue.png"}
        />
      </div>
    </div>
  );
};
