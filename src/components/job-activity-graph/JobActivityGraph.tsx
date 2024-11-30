import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { DataItem } from "../../../utils/types";

interface DonutChartProps {
  data: DataItem[];
}

const DonutChart: React.FC<DonutChartProps> = ({ data }) => {
  const COLORS = ["#FFC107", "#007BFF80", "#28A74580", "#6C757D80"];
  const totalValue = data.reduce((sum, entry) => sum + entry.value, 0);

  const getPercentage = (value: number, total: number): string => {
    return ((value / total) * 100).toFixed(0);
  };

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={110}
          dataKey="value"
          paddingAngle={5}
          isAnimationActive={true}
          cornerRadius={10}
          label={({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
            const RADIAN = Math.PI / 180;
            const radius = innerRadius + (outerRadius - innerRadius) / 2;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
              <text
                x={x}
                y={y}
                fill="white"
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="14px"
                fontWeight="bold"
              >
                {getPercentage(data[index].value, totalValue)}%
              </text>
            );
          }}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize: "24px", fontWeight: "bold", fill: "#000" }}
        >
          {totalValue}
        </text>

        <text
          x="50%"
          y="57%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize: "12px", fontWeight: "bold", fill: "#9CA3AF" }}
        >
          TotalJobs
        </text>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DonutChart;
