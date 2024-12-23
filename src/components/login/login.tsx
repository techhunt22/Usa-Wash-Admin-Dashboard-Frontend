"use client";
import Image from "next/image";
import { Input } from "../input/input";
import { PasswordInput } from "../password-input/PasswordInput";
import { useState } from "react";
import { useAdminLogin } from "utils/api";
import { useRouter } from "next/navigation";
import { ApiError } from "utils/types";
import { useDispatch } from "react-redux";
import { setToken, setData } from "../../../redux/features/authSlice";

export const Login = (): JSX.Element | null => {
  const router = useRouter();
  const [items, setItems] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { mutate, isError, isPending } = useAdminLogin();
  const dispatch = useDispatch();

  const handleInputChange = (field: string, value: string) => {
    setItems((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    if (!items.email.trim() || !items.password.trim()) {
      setErrorMessage("Both email and password are required.");
      return;
    }
    mutate(items, {
      onSuccess: (data) => {
        dispatch(setToken(data?.data?.access_token));
        const payload = {
          name: data?.data?.user?.full_name,
          image: data?.data?.user?.profile_pic,
        };
        dispatch(setData(payload));
        setItems({ email: "", password: "" });
        router.push("/dashboard");
      },
      onError: (error: ApiError) => {
        setErrorMessage(
          error?.response?.data?.errors?.messages?.[0] ||
            "Login failed. Please try again."
        );
      },
    });
  };

  return (
    <main
      className="w-full min-h-screen font-roboto flex flex-col items-center gap-8 pt-10"
      style={{
        backgroundImage: "url(/images/background.svg)",
      }}
    >
      <Image
        src={"/images/logo.png"}
        width={200}
        height={200}
        alt="logo.png"
        priority
      />
      <form
        className="w-[540px] h-[400px] bg-white text-sm rounded-xl shadow-sm flex flex-col gap-4 justify-center items-center"
        onSubmit={handleSubmit}
      >
        <Input
          type="email"
          placeholder="Email"
          width="w-[350px]"
          height="h-[82px]"
          name="Email"
          onChange={(value: string) => handleInputChange("email", value)}
        />
        <PasswordInput
          width="w-[350px]"
          height="h-[60px]"
          name="Password"
          onChange={(value: string) => handleInputChange("password", value)}
        />
        <button
          type="submit"
          className="w-[350px] h-[60px] rounded-2xl bg-primary text-white"
          disabled={isPending}
        >
          {isPending ? "Logging in..." : "Login"}
        </button>
        {isError && (
          <p className="font-roboto font-semibold text-delete">
            {errorMessage}
          </p>
        )}
      </form>
    </main>
  );
};
