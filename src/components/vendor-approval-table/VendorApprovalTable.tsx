"use client";
import { Button } from "@/components/view-details-btn/Button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchInactiveVendors } from "../../../utils/api";
import { RootState } from "../../../redux/store";
import {
  clearInactiveVendors,
  setInactiveVendors,
  setTotalInActiveVendors,
} from "../../../redux/features/vendorTableSlice";
import { Vendor, VendorApprovalsProps } from "../../../utils/types";
import { Loader } from "../loader/Loader";

export const VendorApprovalTable = ({
  searchTerm,
  end_date,
  start_date,
}: VendorApprovalsProps): JSX.Element | null => {
  const [currentPage, setCurrentPage] = useState(1);
  const type: string = "vendor";
  const status: string = "inactive";
  const dispatch = useDispatch();

  const vendors = useSelector(
    (state: RootState) => state.vendor.vendors_inactive
  );
  const totalPages = useSelector(
    (state: RootState) => state.vendor.total_inactiveVendors
  );

  const { data, isLoading, error } = useFetchInactiveVendors(
    `/api/v1/admin/users`,
    {
      type,
      status,
      search: searchTerm || undefined,
      page: currentPage,
      start_date: start_date || undefined,
      end_date: end_date || undefined,
    },
    [searchTerm, currentPage, start_date, end_date]
  );

  useEffect(() => {
    if (data && data?.data?.users?.data?.length > 0) {
      dispatch(setInactiveVendors(data?.data?.users?.data));
      const totalPages = Math.ceil(
        data?.data?.total_users / data?.data?.users?.per_page
      );

      dispatch(setTotalInActiveVendors(totalPages));
    } else {
      dispatch(clearInactiveVendors());
    }
  }, [dispatch, data, currentPage]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!vendors || vendors.length <= 0) {
    return <div>No Vendors.....</div>;
  }

  return (
    <div className="table w-[98%] h-max pb-4 px-2 bg-white rounded-2xl ">
      <div className="table-headings font-roboto text-sm font-semibold grid text-darkGray grid-cols-4 gap-x-48 items-center h-14 px-2">
        <p>Vendor Name</p>
        <p>Email</p>
        <p>Phone</p>
        <p>Actions</p>
      </div>
      {vendors?.map((item: Vendor, index: number) => (
        <div
          key={index}
          className={`
         ${index % 2 === 0 ? "bg-tableBg" : "bg-white"}
         table-data grid grid-cols-4 items-center gap-x-48 h-14 gap-10  text-sm font-roboto font-normal
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
              path={`/dashboard/vendor-details/${item?.id}`}
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
