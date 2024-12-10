import { useCallback } from "react";
import { SuspendProps } from "utils/types";

export const Suspend = ({
  onToggle,
  heading,
  content,
}: SuspendProps): JSX.Element | null => {
  const handleToggle = useCallback(() => onToggle(false), [onToggle]);

  return (
    <main className="fixed inset-0 bg-black/10 flex items-center justify-center">
      <div
        className="container w-[528px] h-[465px] bg-white   rounded-xl flex flex-col items-center justify-center gap-4 "
        style={{ backgroundImage: `url(/images/suspend.svg)` }}
      >
        <h1 className="font-poppins text-4xl text-customYellow font-medium">
          {heading}
        </h1>
        <p className="font-poppins text-xl capitalize font-normal text-center">
          {content}
        </p>
        <div className="btns flex gap-2">
          <button
            onClick={handleToggle}
            className="w-[155px] h-[58px] border-[1px] font-roboto text-lg font-medium border-filterText text-filterText rounded-lg"
          >
            Cancel
          </button>
          <button className="w-[188px] h-[58px]  text-white bg-customYellow   font-roboto text-lg font-medium rounded-lg">
            Suspend
          </button>
        </div>
      </div>
    </main>
  );
};
