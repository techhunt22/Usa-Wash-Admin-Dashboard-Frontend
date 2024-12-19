"use client";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { PasswordInputProps } from "utils/types";

export const PasswordInput = ({
  width,
  height,
  name,
  onChange,
}: PasswordInputProps & {
  onChange: (value: string) => void;
}): JSX.Element | null => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="input flex flex-col gap-1 relative">
      <p className="font-roboto text-sm font-normal pl-3 ">{name}</p>
      <input
        required
        type={showPassword ? "text" : "password"}
        placeholder="**********"
        className={`${width} outline-none relative ${height} px-2 rounded-2xl border-[1px] border-[#ADADAD]`}
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          setShowPassword((prev: boolean) => !prev);
        }}
      >
        {" "}
        {showPassword ? (
          <EyeSlashIcon className="w-6 h-6 absolute right-2 top-11 text-[#ADADAD]" />
        ) : (
          <EyeIcon className="w-6 h-6 absolute right-2 top-11 text-[#ADADAD]" />
        )}
      </button>
    </div>
  );
};
