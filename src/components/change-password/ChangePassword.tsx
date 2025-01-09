import { useState } from "react";
import { PasswordInput } from "../password-input/PasswordInput";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { AdminBody, ApiError } from "utils/types";
import { useAdminUpdate } from "utils/api";
import { useRouter } from "next/navigation";

export const ChangePassword = (): JSX.Element | null => {
  const [old_password, setOldPassword] = useState<string | undefined>("");
  const [password, setPassword] = useState<string | undefined>("");
  const [confirm_password, setConfirmPassword] = useState<string | undefined>(
    ""
  );
  const router = useRouter();

  const fullName = useSelector((state: RootState) => state.auth.data?.name);
  const email = useSelector((state: RootState) => state.auth.data?.email);
  const id = useSelector((state: RootState) => state.auth.data?.id);

  const payload: AdminBody = {
    full_name: fullName ?? undefined,
    email: email ?? undefined,
    profile_pic: undefined,
    _method: "PUT",
    old_password: old_password ?? undefined,
    password: password ?? undefined,
  };

  const { mutate: userMutate } = useAdminUpdate(`/api/v1/admin/users/${id}`);

  const handleSave = () => {
    console.log(old_password, password, confirm_password);
    if (password === confirm_password) {
      userMutate(payload, {
        onSuccess: (data) => {
          toast.success(data?.messages[0]);
          router.push("/dashboard");
        },
        onError: (error: ApiError) => {
          const messages = error.response?.data?.errors?.messages;
          if (messages && messages.length > 0) {
            toast.error(messages[0]);
          } else {
            toast.error("An unknown error occurred.");
          }
        },
      });
    } else {
      toast.warn("Password Should Match!");
    }
  };

  const handleCancel = () => {
    setOldPassword("");
    setConfirmPassword("");
    setPassword("");
  };

  return (
    <div className="container w-[397px] h-[669px] items-center justify-center bg-white rounded-xl flex flex-col gap-6 mt-10">
      <h1 className="font-roboto font-semibold text-xl pb-10">
        Change Password
      </h1>
      <PasswordInput
        height={`h-[60px]`}
        width={`w-[320px]`}
        name={`Old Password`}
        onChange={setOldPassword}
        value={old_password}
      />
      <PasswordInput
        height={`h-[60px]`}
        width={`w-[320px]`}
        name={`New Password`}
        onChange={setPassword}
        value={password}
      />
      <PasswordInput
        height={`h-[60px]`}
        width={`w-[320px]`}
        name={`Confirm Password`}
        onChange={setConfirmPassword}
        value={confirm_password}
      />
      <div className="option-btn flex gap-2 mt-20 ">
        <button
          onClick={handleCancel}
          className="w-[124px] h-[58px] border-[1px] border-primary text-base font-roboto font-medium text-primary rounded-xl"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="w-[179px] h-[58px] bg-primary text-white rounded-xl  font-roboto font-medium text-base"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};
