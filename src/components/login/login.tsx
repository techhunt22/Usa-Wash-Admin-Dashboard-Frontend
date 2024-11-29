"use client";
import Image from "next/image";
import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";

export const Login = (): JSX.Element | null => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <main
      className="w-full min-h-screen font-roboto flex flex-col items-center gap-8 pt-10"
      style={{
        backgroundImage:
          "linear-gradient(rgba(243, 248, 254, 0.9), rgba(243, 248, 254, 0.9)), url(/images/background.png)",
      }}
    >
      <Image src={"/images/logo.png"} width={200} height={200} alt="logo.png" />
      <form className="w-[540px] h-[400px]  bg-white text-sm rounded-xl shadow-sm flex flex-col gap-4 justify-center items-center">
        <div className="input flex flex-col gap-2">
          <p>Email</p>
          <input
            type="email"
            placeholder="Email"
            className="w-[350px] h-[60px] outline-none px-2 rounded-2xl border-[1px] border-[#ADADAD]"
          />
        </div>
        <div className="input flex flex-col gap-2 relative">
          <p>Password</p>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="**********"
            className="w-[350px] outline-none relative h-[60px] px-2 rounded-2xl border-[1px] border-[#ADADAD]"
          />
          <button
            type="button"
            onClick={() => {
              setShowPassword((prev: boolean) => !prev);
            }}
          >
            {" "}
            {showPassword ? (
              <EyeSlashIcon className="w-6 h-6 absolute right-2 top-12 text-[#ADADAD]" />
            ) : (
              <EyeIcon className="w-6 h-6 absolute right-2 top-12 text-[#ADADAD]" />
            )}
          </button>
        </div>
        <button className="w-[350px] h-[60px] rounded-2xl bg-primary text-white">
          Login
        </button>
      </form>
    </main>
  );
};
