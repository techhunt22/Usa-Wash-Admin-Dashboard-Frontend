import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useEffect, useState } from "react";

export const TotalUsers = (): JSX.Element | null => {
  const [localUsers, setLocalUsers] = useState<number | null>(null);

  // Fetch data from Redux store
  const users = useSelector((state: RootState) => state.analytics.totalUsers);

  // Fallback to localStorage if Redux store data is unavailable
  useEffect(() => {
    if (users !== null) {
      setLocalUsers(users);
    } else {
      const storedUsers = localStorage.getItem("totalUsers");
      setLocalUsers(storedUsers ? parseInt(storedUsers, 10) : 0);
    }
  }, [users]);

  return (
    <div className="total-customers w-[22%] h-[225px] bg-white shadow-lg rounded-xl flex flex-col items-center justify-center gap-2">
      <h1 className="text-3xl font-roboto text-primary font-bold">
        {localUsers}
      </h1>
      <h1 className="font-roboto text-sm font-semibold">Total Users</h1>
      <p className="text-center font-roboto text-xs font-normal ">
        Registered users on the <br /> platform.
      </p>
      <Image
        src={"/images/total-users.svg"}
        width={200}
        height={200}
        alt="total-user.svg"
      />
    </div>
  );
};
