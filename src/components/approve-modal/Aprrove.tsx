import { useCallback } from "react";
import { ApproveProps } from "utils/types";

export const Approve = ({
  onToggle,
  heading,
  content,
}: ApproveProps): JSX.Element | null => {
  const handleToggle = useCallback(() => onToggle(false), [onToggle]);
  return (
    <main className="fixed inset-0 bg-black/10 flex items-center justify-center">
      <div
        className="container w-[518px] h-[368px] bg-white   rounded-xl flex flex-col items-center justify-center gap-4 "
        style={{ backgroundImage: `url(/images/active.svg)` }}
      >
        <h1 className="font-poppins text-4xl text-primary font-medium">
          {heading}
        </h1>
        <p className="font-poppins text-xl font-normal text-center capitalize">
          {content}
        </p>
        <div className="btns flex gap-2">
          <button
            onClick={handleToggle}
            className="w-[155px] h-[58px] border-[1px] font-roboto text-lg font-medium border-filterText text-filterText rounded-lg"
          >
            Cancel
          </button>
          <button className="w-[188px] h-[58px]  text-white bg-primary   font-roboto text-lg font-medium rounded-lg">
            Active Customer
          </button>
        </div>
      </div>
    </main>
  );
};
