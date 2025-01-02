"use client";
import { VendorDetails } from "@/components/screens/vendor-details/VendorDetails";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setAvgRating,
  setDocuments,
  setReviewCount,
  setReviews,
  setVendorDetails,
} from "../../../../../redux/features/vendorDetailsSlice";
import { useFetchDetails } from "../../../../../utils/api";
import { Loader } from "@/components/loader/Loader";

const Page = (): JSX.Element | null => {
  const params = useParams();
  const id = typeof params.vendorId === "string" ? params.vendorId : undefined;
  const dispatch = useDispatch();
  const { data, isLoading, error } = useFetchDetails(
    `/api/v1/admin/get-user-page-data`,
    id
  );
  useEffect(() => {
    if (data) {
      dispatch(setVendorDetails(data?.data?.user));
      dispatch(setAvgRating(data?.data?.avgRating));
      dispatch(setReviewCount(data?.data?.reviewCount));
      dispatch(setDocuments(data?.data?.documents));
      dispatch(setReviews(data?.data?.reviews));
    }
  }, [dispatch, data]);

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <div>Error:{error.message}</div>;
  }

  return <VendorDetails />;
};

export default Page;
