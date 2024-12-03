import { InputProps } from "utils/types";

export const Input = ({
  width,
  height,
  name,
  type,
  placeholder,
}: InputProps): JSX.Element | null => {
  return (
    <div className={`input ${width} ${height} flex flex-col gap-1`}>
      <p className="font-roboto text-sm font-normal pl-3 ">{name}</p>
      <input
        type={`${type}`}
        className={`${width} outline-none ${height} border-[1px] border-customGray rounded-xl text-sm font-roboto font-medium px-4`}
        placeholder={`${placeholder}`}
      />
    </div>
  );
};
