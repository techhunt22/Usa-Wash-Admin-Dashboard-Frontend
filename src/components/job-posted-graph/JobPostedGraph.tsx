import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  XAxisProps,
  YAxisProps,
} from "recharts";
import { ChartData } from "../../../utils/types";

const data: ChartData[] = [
  { name: "Jan", jobs: 4000 },
  { name: "Feb", jobs: 3000 },
  { name: "Mar", jobs: 2000 },
  { name: "Apr", jobs: 2780 },
  { name: "May", jobs: 1890 },
  { name: "Jun", jobs: 2390 },
  { name: "Jul", jobs: 3490 },
];

export default class Chart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 30, // Space for X-axis labels
          }}
        >
          {/* Cartesian Grid with only X-Axis grid lines */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} />{" "}
          {/* Set vertical to false to hide Y grid lines */}
          {/* X-Axis with labels for months */}
          <XAxis
            dataKey="name"
            axisLine={false} // Remove axis line for X-axis
            tickLine={false} // Remove ticks for X-axis
            tick={{ fill: "gray" }} // Set color of X-axis ticks
          />
          {/* Remove Y-Axis */}
          <YAxis
            axisLine={false} // Hide Y-axis line
            tickLine={false} // Hide Y-axis ticks
            hide={true} // Hide the entire Y-Axis
          />
          {/* Tooltip to show data on hover */}
          <Tooltip />
          {/* Area line */}
          <Area
            type="monotone"
            dataKey="jobs"
            stroke="#2F74FA"
            fill="#2F74FABF"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
