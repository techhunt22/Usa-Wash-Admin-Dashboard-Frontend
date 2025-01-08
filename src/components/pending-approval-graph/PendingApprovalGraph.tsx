import React from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Cell } from "recharts";
import { RootState } from "redux/store";

export const PendingApprovalGraph = (): JSX.Element | null => {
  const value =
    useSelector((state: RootState) => state.analytics.totalInactiveVendors) ??
    Number(localStorage.getItem("totalInactiveVendors")) ??
    0;

  const total =
    useSelector((state: RootState) => state.analytics.totalVendors) ??
    Number(localStorage.getItem("totalVendors")) ??
    0;

  const data = [
    { name: "Progress", value },
    { name: "Remaining", value: total - value },
  ];

  const COLORS = ["#DC3545", "#F5F5F5"];
  return (
    <div style={{ position: "relative", width: 150, height: 150 }}>
      {/* Pie Chart */}
      <PieChart width={150} height={150}>
        <Pie
          data={data}
          innerRadius={50} // Smaller inner radius
          outerRadius={60} // Smaller outer radius
          startAngle={90}
          endAngle={450} // Full circle
          dataKey="value"
          paddingAngle={5}
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>

      {/* Inner Circle Background */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100px", // Match inner circle size
          height: "100px",
          backgroundColor: "#DC3545", // Base color
          opacity: 0.1, // 10% opacity
          borderRadius: "50%", // Make it circular
          transform: "translate(-50%, -50%)",
        }}
      ></div>

      {/* Center Text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "18px", // Adjust font size for smaller graph
          color: "#DC3545",
          fontWeight: "bold",
        }}
      >
        {value}
      </div>
    </div>
  );
};
