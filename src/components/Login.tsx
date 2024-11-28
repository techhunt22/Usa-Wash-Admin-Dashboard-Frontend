"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Login() {
  const [hidden, setHidden] = useState<boolean>(false);

  return (
    <main
      className="w-full min-h-screen flex flex-col items-center gap-8 pt-10"
      style={{
        backgroundImage:
          "linear-gradient(rgba(243, 248, 254, 0.9), rgba(243, 248, 254, 0.9)), url(/background.png)",
      }}
    >
      <Image src={"/logo.png"} width={200} height={200} alt="logo.png" />
      <form className="w-[540px] h-[400px]  bg-white text-[14px] rounded-xl shadow-sm flex flex-col gap-4 justify-center items-center">
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
            type={hidden ? "text" : "password"}
            placeholder="**********"
            className="w-[350px] outline-none relative h-[60px] px-2 rounded-2xl border-[1px] border-[#ADADAD]"
          />
          <button
            type="button"
            onClick={() => {
              setHidden((prev: boolean) => !prev);
            }}
          >
            {" "}
            {hidden ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 absolute right-2 top-12 text-[#ADADAD]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 absolute right-2 top-12 text-[#ADADAD]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            )}
          </button>
        </div>
        <button className="w-[350px] h-[60px] rounded-2xl bg-primary text-white">
          Login
        </button>
      </form>
    </main>
  );
}
