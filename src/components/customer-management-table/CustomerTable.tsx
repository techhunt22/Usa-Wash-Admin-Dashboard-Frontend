"use client";
import { Button } from "@/components/view-details-btn/Button";
import { useFetchUserData1 } from "hooks/fetchUsers";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setTotalUsers,
  setUsers,
} from "../../../redux/features/userTableSlice";
import { User } from "../../../utils/types";
import { RootState } from "../../../redux/store";

export const CustomerTable = (): JSX.Element | null => {
  const [currentPage, setCurrentPage] = useState(1);
  const type: string = "customer";
  const customers = useSelector((state: RootState) => state.user.users);
  const totalPages = useSelector((state: RootState) => state.user.total_users);

  const { data } = useFetchUserData1("/api/v1/admin/users", type, currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data && data?.data?.data?.users?.data?.length > 0) {
      dispatch(setUsers(data?.data?.data?.users?.data));
      const totalPages = Math.ceil(
        data?.data?.data?.total_users / data?.data?.data?.users?.per_page
      );

      dispatch(setTotalUsers(totalPages));
    }
  }, [dispatch, data, currentPage]);

  console.log(currentPage);

  return (
    <div className="table w-[98%] h-max pb-4 px-2 bg-white rounded-2xl ">
      <div className="table-headings font-roboto text-sm font-semibold grid text-darkGray grid-cols-4 gap-x-48 items-center h-14 px-2">
        <p>Customer Name</p>
        <p>Email</p>
        <p>Phone</p>
        <p>Actions</p>
      </div>
      {customers?.map((item: User, index: number) => (
        <div
          key={index}
          className={`
         ${index % 2 === 0 ? "bg-tableBg" : "bg-white"}
         table-data grid grid-cols-4 items-center gap-x-48 h-14 gap-10
         `}
        >
          <p className="flex gap-2 items-center">
            <Image
              src={"/images/avatar.svg"}
              width={38}
              height={38}
              alt="avatar.svg"
            />
            {item?.full_name}
          </p>
          <p>{item?.email}</p>
          <p>{item?.phone_number}</p>
          <p>
            <Button
              path={"/dashboard/customer-details"}
              color={`text-primary`}
            />
          </p>
        </div>
      ))}
      <div className="flex justify-center items-center gap-2 mt-2">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-2 rounded text-sm text-black font-roboto ${
                page === currentPage ? "bg-primary/10" : "bg-white"
              }`}
            >
              {page}
            </button>
          )
        )}
      </div>
    </div>
  );
};
