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

export const SearchInput = (): JSX.Element | null => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch = useDispatch();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const token = useToken();
  const handleJobSearch = async (e: React.FormEvent) => {
    e.preventDefault();
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
