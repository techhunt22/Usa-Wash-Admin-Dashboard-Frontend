"use client";

import { ChangePassword } from "@/components/change-password/ChangePassword";
import { EditProfile } from "@/components/edit-profile/editProfile";
import { useState } from "react";

export const Settings = (): JSX.Element | null => {
  const [isActive, setIsActive] = useState<string>("edit");
  return (
    <main className="flex pt-10 gap-40">
      <div className="navigation flex flex-col  gap-4">
        <h1 className="text-2xl font-semibold font-roboto">Settings</h1>
        <button
          onClick={() => {
            setIsActive("edit");
          }}
          className={`w-[314px] h-[68px] bg-white text-lg font-roboto  flex items-center justify-between rounded-xl px-4 font-normal ${
            isActive == "edit" ? "text-primary" : "text-sidenav"
          }`}
        >
          Edit Profile
          {isActive == "edit" && <div className="w-[3px] h-[80%] bg-primary" />}
        </button>
        <button
          onClick={() => {
            setIsActive("change");
          }}
          className={`w-[314px] h-[68px] bg-white text-lg font-roboto  flex items-center justify-between rounded-xl px-4 font-normal  ${
            isActive == "change" ? "text-primary" : "text-sidenav"
          }`}
        >
          Change Password
          {isActive == "change" && (
            <div className="w-[3px] h-[80%] bg-primary" />
          )}
        </button>
      </div>
      {isActive == "edit" ? <EditProfile /> : <ChangePassword />}
    </main>
  );
};
