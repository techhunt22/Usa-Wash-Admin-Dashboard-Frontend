import Image from "next/image";
import React from "react";
import Button from "./Button";
import UserSelection from "./UserSelection";

function SideNav() {
  return (
    <main className="w-[15%] min-h-screen  fixed border-r-2 flex flex-col ">
      <Image
        src={"/logo.png"}
        width={100}
        height={100}
        alt="logo.png"
        className="ml-4 pt-4"
      />
      <div className="navigation links w-full flex flex-col h-max pb-2 gap-8  items-center mt-4 ">
        <Button
          path={"/dashboard"}
          name={"Dashboard"}
          ImageUrl={"/side-nav/home.png"}
          ActiveImageUrl={"/side-nav/home-blue.png"}
        />
        <UserSelection />
        <Button
          path={"/dashboard/Job-Management"}
          name={"Job Management"}
          ImageUrl={"/side-nav/folder-management.png"}
          ActiveImageUrl={"/side-nav/folder-management-blue.png"}
        />
        <Button
          path={"/dashboard/Vendor-Approvals"}
          name={"Vendor Approvals"}
          ImageUrl={"/side-nav/approvals.png"}
          ActiveImageUrl={"/side-nav/approvals-blue.png"}
        />
      </div>
      <div className="content w-full flex flex-col h-max pb-2 gap-2  items-center mt-[200px]">
        <Button
          path={"/dashboard/Settings"}
          name={"Settings"}
          ImageUrl={"/side-nav/settings.png"}
          ActiveImageUrl={"/side-nav/settings-blue.png"}
        />
        <button className="flex items-center w-[90%] h-[60px] gap-4 ">
          <Image
            src={"/side-nav/logout.png"}
            width={25}
            height={25}
            alt="logout.png"
          />
          <p className="text-sidenav text-[18px]">Logout</p>
        </button>
      </div>
    </main>
  );
}

export default SideNav;
