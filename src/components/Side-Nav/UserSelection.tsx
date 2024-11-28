"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";

export default function UserSelection() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return (
    <>
      <div className="user-selection  relative flex items-center justify-between w-[95%] text-sidenav ">
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
          onClick={() => {
            setModalVisible((prev: boolean) => !prev);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        <div
          className={`w-full h-[120px] flex flex-col gap-2  ${
            modalVisible ? "absolute z-40" : "hidden"
          } top-8 bg-white shadow-md`}
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
    </>
  );
}
