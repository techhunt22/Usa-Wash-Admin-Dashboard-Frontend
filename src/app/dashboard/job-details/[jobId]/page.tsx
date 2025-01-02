"use client";
import { JobDetails } from "@/components/screens/job-details/JobDetails";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setJobApplications,
  setJobsDetails,
  setVendorReviews,
} from "../../../../../redux/features/jobDetailsSlice";
import { useFetchDetails } from "../../../../../utils/api";
import { Loader } from "@/components/loader/Loader";

const Page = (): JSX.Element | null => {
  const params = useParams();
  const id = typeof params.jobId === "string" ? params.jobId : undefined;
  const dispatch = useDispatch();
  const { data, isLoading, error } = useFetchDetails(
    `/api/v1/admin/get-job-page-data`,
    id
  );

  useEffect(() => {
    if (data) {
      dispatch(setJobsDetails(data?.data?.job));
      dispatch(setVendorReviews(data?.data?.vendorReviews));
      dispatch(setJobApplications(data?.data?.job?.job_applications));
    }
  }, [data, dispatch]);

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <div>{error?.message}</div>;
  }

  return <JobDetails />;
};

export default Page;
