"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ReactToastifyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
};
