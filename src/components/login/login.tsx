import Image from "next/image";
import { Input } from "../input/input";
import { PasswordInput } from "../password-input/PasswordInput";

export const Login = (): JSX.Element | null => {
  return (
    <main
      className="w-full min-h-screen font-roboto flex flex-col items-center gap-8 pt-10"
      style={{
        backgroundImage: "url(/images/background.svg)",
      }}
    >
      <Image src={"/images/logo.png"} width={200} height={200} alt="logo.png" />
      <form className="w-[540px] h-[400px]  bg-white text-sm rounded-xl shadow-sm flex flex-col gap-4 justify-center items-center">
        <Input
          type={`email`}
          placeholder="Email"
          width={`w-[350px]`}
          height={`h-[82px]`}
          name={"Email"}
        />
        <PasswordInput
          width={`w-[350px]`}
          height={`h-[60px]`}
          name={"Password"}
        />

        <button className="w-[350px] h-[60px] rounded-2xl bg-primary text-white">
          Login
        </button>
      </form>
    </main>
  );
};
