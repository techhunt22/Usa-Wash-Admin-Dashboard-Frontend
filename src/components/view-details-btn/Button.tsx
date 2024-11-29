import React from "react";
import { ViewDetailsProps } from "../../../utils/types";

export const Button = ({
  path,
  color,
}: ViewDetailsProps): JSX.Element | null => {
  return (
    <button
      className={`w-[116px] h-[30px] bg-btn ${color} rounded-lg font-roboto font-medium`}
    >
      View Details {path}
    </button>
  );
};
