"use client";
import axios from "axios";
import { useToken } from "../../../utils/api";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import {
  clearJobs,
  setJobs,
  setTotalPages,
} from "../../../redux/features/jobTableSlice";
import { usePathname } from "next/navigation";
import {
  clearCustomers,
  setCustomers,
  setTotalUsers,
} from "../../../redux/features/customerTableSlice";
import {
  clearVendors,
  setVendors,
  setTotalVendors,
  clearInactiveVendors,
  setInactiveVendors,
  setTotalInActiveVendors,
} from "../../../redux/features/vendorTableSlice";

export const SearchInput = (): JSX.Element | null => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const [searchQuery, setSearchQuery] = useState<string>("");
  const pathname = usePathname();
  const dispatch = useDispatch();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const token = useToken();

  const handleJobSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pathname == "/dashboard/Job-Management") {
      try {
        const data = await axios.get(`${API_URL}/api/v1/jobs`, {
          params: {
            search: searchQuery,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        dispatch(clearJobs());
        dispatch(setJobs(data?.data?.data?.jobs?.data));
        const totalPages = Math.ceil(
          data?.data?.data?.total_jobs / data?.data?.data?.jobs?.per_page
        );
        dispatch(setTotalPages(totalPages));
      } catch (error) {
        console.error("Error fetching filtered jobs:", error);
      }
    }
    if (pathname == "/dashboard/user-selection/Customer-Management") {
      try {
        const response = await axios.get(
          `${API_URL}/api/v1/admin/users?type=customer`,
          {
            params: {
              search: searchQuery,
            },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        dispatch(clearCustomers());
        dispatch(setCustomers(response?.data?.data?.users?.data));
        const totalPages = Math.ceil(
          response?.data?.data?.total_users /
            response?.data?.data?.users?.per_page
        );
        dispatch(setTotalUsers(totalPages));
      } catch (error) {
        console.error(error);
      }
    }
    if (pathname == "/dashboard/user-selection/Vendor-Management") {
      try {
        const data = await axios.get(
          `${API_URL}/api/v1/admin/users?type=vendor`,
          {
            params: {
              search: searchQuery,
            },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch(clearVendors());
        dispatch(setVendors(data?.data?.data?.users?.data));
        const totalPages = Math.ceil(
          data?.data?.data?.total_users / data?.data?.data?.users?.per_page
        );
        dispatch(setTotalVendors(totalPages));
      } catch (error) {
        console.log(error);
      }
    }
    if (pathname == "/dashboard/Vendor-Approvals") {
      let status: string = "inactive";
      const response = await axios(
        `${API_URL}/api/v1/admin/users?type=vendor`,
        {
          params: {
            search: searchQuery,
            status,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(clearInactiveVendors());
      dispatch(setInactiveVendors(response?.data?.data?.users?.data));
      const totalPages = Math.ceil(
        response?.data?.data?.total_users /
          response?.data?.data?.users?.per_page
      );
      dispatch(setTotalInActiveVendors(totalPages));
    }
  };

  return (
    <form
      onSubmit={handleJobSearch}
      className="search w-[80%] bg-white justify-center h-[60px] flex items-center rounded-xl gap-2"
    >
      <input
        type="text"
        placeholder="Search...."
        className="outline-none w-[80%] h-full "
        onChange={handleSearch}
      />
      <button type="submit">
        <Image
          src={"/icons/search.svg"}
          width={19}
          height={19}
          alt="search.svg"
        />
      </button>
    </form>
  );
};
