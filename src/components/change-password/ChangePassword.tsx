import { PasswordInput } from "../password-input/PasswordInput";

export const ChangePassword = (): JSX.Element | null => {
  return (
    <div className="container w-[397px] h-[669px] items-center justify-center bg-white rounded-xl flex flex-col gap-6 mt-10">
      <h1 className="font-roboto font-semibold text-xl pb-10">
        Change Password
      </h1>
      <PasswordInput
        height={`h-[60px]`}
        width={`w-[320px]`}
        name={`Old Password`}
        onChange={(value: string) => console.log(value)}
      />
      <PasswordInput
        height={`h-[60px]`}
        width={`w-[320px]`}
        name={`New Password`}
        onChange={(value: string) => console.log(value)}
      />
      <PasswordInput
        height={`h-[60px]`}
        width={`w-[320px]`}
        name={`Confirm Password`}
        onChange={(value: string) => console.log(value)}
      />
      <div className="option-btn flex gap-2 mt-20 ">
        <button className="w-[124px] h-[58px] border-[1px] border-primary text-base font-roboto font-medium text-primary rounded-xl">
          Cancel
        </button>
        <button className="w-[179px] h-[58px] bg-primary text-white rounded-xl  font-roboto font-medium text-base">
          Save Changes
        </button>
      </div>
    </div>
  );
};
