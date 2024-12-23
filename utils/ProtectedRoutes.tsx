"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoutes = ({
  children,
}: ProtectedRouteProps): JSX.Element | null => {
  const router = useRouter();
  const reduxToken = useSelector((state: RootState) => state?.auth?.token);

  useEffect(() => {
    const token =
      reduxToken ||
      (typeof window !== "undefined" ? localStorage.getItem("token") : null);
    if (!token) {
      router.push("/");
    }
  }, [router, reduxToken]);
  return <>{children}</>;
};
