"use client";
import { CustomerDetails } from "@/components/screens/customer-details/CustomerDetails";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setTotalJobsPosted,
  setUserDetails,
} from "../../../../../redux/features/userDetailSlice";
import { useFetchDetails } from "../../../../../utils/api";
import {
  clearJobs,
  setJobs,
  setTotalPages,
} from "../../../../../redux/features/jobTableSlice";

const Page = (): JSX.Element | null => {
  const params = useParams();
  const id =
    typeof params.customerId === "string" ? params.customerId : undefined;
  const dispatch = useDispatch();
  const { data } = useFetchDetails(`/api/v1/admin/get-user-page-data`, id);

  useEffect(() => {
    if (data) {
      dispatch(setUserDetails(data?.data?.user));
      dispatch(setTotalJobsPosted(data?.data?.totalJobsPosted));
      dispatch(clearJobs());
      dispatch(setJobs(data?.data?.jobs?.data));
      const totalPages = Math.ceil(
        data?.data?.totalJobsPosted / data?.data?.jobs?.per_page
      );
      dispatch(setTotalPages(totalPages));
    }
  }, [data, dispatch]);

  return <CustomerDetails />;
};

export default Page;
