import Image from "next/image";
import { useCallback, useState } from "react";
import { Input } from "../input/input";

export const EditProfile = (): JSX.Element | null => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = useCallback(() => {
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => setImage(reader.result as string);
        reader.readAsDataURL(file);
      }
    };
  }, [image]);

  return (
    <div className="container w-[397px] h-[669px] flex flex-col items-center gap-6 justify-center  bg-white rounded-xl mt-10 shadow-lg">
      <div
        className="image w-[216px] h-[216px] rounded-2xl relative overflow-hidden bg-gray-200 flex items-center justify-center"
        style={{
          backgroundImage: image
            ? `url(${image})`
            : `url(/images/upload-image.svg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <label
          htmlFor="upload"
          className="absolute bottom-1 right-2  w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600"
        >
          <Image
            src={"/icons/upload-icon.svg"}
            width={40}
            height={40}
            alt="upload-icons.svg"
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
        width={`w-[311px]`}
        height={`h-[82px]`}
        placeholder="Jhon Cosby"
        name={`Name`}
        type={`text`}
      />
      <div className="option-btn flex gap-2 mt-28 ">
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
