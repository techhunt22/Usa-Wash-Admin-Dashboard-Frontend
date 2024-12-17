import ReactDOM from "react-dom";
import Image from "next/image";
import { LogoutModal } from "../../../utils/types";
import { useCallback } from "react";

export const Logout = ({ onToggle }: LogoutModal): JSX.Element | null => {
  //Logout
  const handleLogout = useCallback(() => {
    onToggle(false);
  }, [onToggle]);

  return ReactDOM.createPortal(
    <main className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">
      <div className="container bg-white w-[370px] h-[300px] rounded-3xl flex flex-col items-center justify-center gap-6 shadow-lg">
        <div className="flex flex-col gap-1 items-center justify-center">
          <Image
            src="/images/logout.svg"
            width={60}
            height={60}
            alt="logout.png"
          />
          <h1 className="text-xl font-semibold font-montserrat">Log Out</h1>
          <p className="text-sm font-normal text-center font-poppins">
            Are You Sure You Want To <br /> Log Out?
          </p>
        </div>
        <div className="buttons flex gap-2 font-roboto">
          <button
            onClick={handleLogout}
            className="w-[113px] h-[58px] border border-filterText text-filterText text-lg font-medium rounded-xl"
          >
            No
          </button>
          <button className="w-[113px] h-[58px] text-white text-lg  bg-primary font-medium rounded-xl">
            Yes
          </button>
        </div>
      </div>
    </main>,
    document.body
  );
};
