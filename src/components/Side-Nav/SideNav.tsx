"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../button/Button";
import { UserSelection } from "../user-selection/UserSelection";
import { Logout } from "../log-out/Logout";

export const SideNav = (): JSX.Element | null => {
  const [isUserSelectionExpanded, setIsUserSelectionExpanded] =
    useState<boolean>(false);
  const [logoutModal, setLogoutModal] = useState<boolean>(false);

  return (
    <main className="w-[20%] font-roboto  min-h-screen fixed  flex flex-col items-center">
      <div
        style={{
          backgroundImage: "url(/images/side-nav.svg)",
        }}
        className="w-[80%] min-h-screen   bg-white mt-4 rounded-xl flex flex-col justify-between py-10"
      >
        <div className="w-full h-full">
          <Image
            src={"/images/logo.png"}
            width={100}
            height={100}
            alt="logo.svg"
            className="ml-4 pt-4"
          />
          <div className="navigation links w-full flex flex-col h-max pb-2 gap-4 items-center mt-4">
            <Button
              path={"/dashboard"}
              name={"Dashboard"}
              ImageUrl={"/icons/dashboard.svg"}
              ActiveImageUrl={"/icons/dashboard-blue.svg"}
            />
            <div className="w-full  flex items-center px-2 ">
              <UserSelection onToggle={setIsUserSelectionExpanded} />
            </div>
            <div
              className={`transition-all w-full px-2 ${
                isUserSelectionExpanded ? "mt-32" : "mt-1"
              }`}
            >
              <Button
                path={"/dashboard/job-management"}
                name={"Job Management"}
                ImageUrl={"/icons/job-management.svg"}
                ActiveImageUrl={"/icons/job-management-blue.svg"}
              />
            </div>
            <Button
              path={"/dashboard/vendor-approvals"}
              name={"Vendor Approvals"}
              ImageUrl={"/icons/vendor-approval.svg"}
              ActiveImageUrl={"/icons/vendor-approval-blue.svg"}
            />
          </div>
        </div>
        <div className="content w-full flex flex-col h-max pb-2 gap-2 items-center ">
          <Button
            path={"/dashboard/settings"}
            name={"Settings"}
            ImageUrl={"/icons/settings.svg"}
            ActiveImageUrl={"/icons/settings-blue.svg"}
          />
          <button
            onClick={() => setLogoutModal(true)}
            className="flex items-center w-[95%] h-[60px] gap-4 rounded-lg border-[1px] border-background px-2"
          >
            <Image
              src={"/icons/logout.svg"}
              width={25}
              height={25}
              alt="logout.svg"
            />
            <p className="text-sidenav text-lg">Logout</p>
          </button>
        </div>
        {logoutModal && <Logout onToggle={setLogoutModal} />}
      </div>
    </main>
  );
};
