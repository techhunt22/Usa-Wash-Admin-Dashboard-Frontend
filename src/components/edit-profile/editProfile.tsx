import Image from "next/image";
import { useCallback, useState } from "react";
import { Input } from "../input/input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { useAdminUpdate } from "utils/api";
import { AdminBody, ApiError } from "utils/types";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { QueryClient } from "@tanstack/react-query";
import { clearData, SetName } from "../../../redux/features/authSlice";

export const EditProfile = (): JSX.Element | null => {
  const [image, setImage] = useState<File | undefined>();
  const [name, setName] = useState<string | undefined>("");

  const fullName = useSelector((state: RootState) => state.auth.data?.name);
  const email = useSelector((state: RootState) => state.auth.data?.email);
  const id = useSelector((state: RootState) => state.auth.data?.id);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleImageUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files[0]) {
        setImage(event.target.files[0]);
      }
    },
    []
  );

  const payload: AdminBody = {
    full_name: name ?? undefined,
    email: email ?? undefined,
    profile_pic: image,
    _method: "PUT",
    old_password: undefined,
    password: undefined,
  };

  const { mutate: userMutate } = useAdminUpdate(`/api/v1/admin/users/${id}`);

  // Handle Save
  const handleSave = () => {
    userMutate(payload, {
      onSuccess: (data) => {
        dispatch(clearData());

        dispatch(SetName(name));
        toast.success(data?.messages[0]);
        setName("");
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
  };

  // Handle Cancel

  const handleCancel = () => {
    setName("");
  };

  return (
    <div className="container w-[397px] h-[669px] flex flex-col items-center gap-6 justify-center bg-white rounded-xl mt-10 shadow-lg">
      <div
        className="image w-[216px] h-[216px] rounded-2xl relative overflow-hidden bg-gray-200 flex items-center justify-center"
        style={{
          backgroundImage: image
            ? `url(${URL.createObjectURL(image)})`
            : `url(/images/upload-image.svg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <label
          htmlFor="upload"
          className="absolute bottom-1 right-2 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600"
        >
          <Image
            src={"/icons/upload-icon.svg"}
            width={40}
            height={40}
            alt="upload-icon"
          />
        </label>

        <input
          type="file"
          id="upload"
          name="upload"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>
      <Input
        value={name}
        width={`w-[311px]`}
        height={`h-[82px]`}
        placeholder={`${fullName ? fullName : "Admin"}`}
        name={`Name`}
        type={`text`}
        onChange={setName}
      />
      <div className="option-btn flex gap-2 mt-28">
        <button
          onClick={handleCancel}
          className="w-[124px] h-[58px] border-[1px] border-primary text-base font-roboto font-medium text-primary rounded-xl"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="w-[179px] h-[58px] bg-primary text-white rounded-xl font-roboto font-medium text-base"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};
