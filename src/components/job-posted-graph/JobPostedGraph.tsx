import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

interface ChartProps {
  data: { month: number; job_posts: number }[];
}

export default class Chart extends PureComponent<ChartProps> {
  render() {
    const { data } = this.props;

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
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          {/* X-Axis with labels for months */}
          <XAxis
            dataKey="month"
            axisLine={false} // Remove axis line for X-axis
            tickLine={false} // Remove ticks for X-axis
            tick={{ fill: "gray" }} // Set color of X-axis ticks
            tickFormatter={(month) => monthNames[month - 1]} // Convert month number to name
          />
          {/* Remove Y-Axis */}
          <YAxis
            axisLine={false} // Hide Y-axis line
            tickLine={false} // Hide Y-axis ticks
            hide={true} // Hide the entire Y-Axis
          />
          {/* Tooltip to show data on hover */}
          <Tooltip
            formatter={(value) => [`${value} job posts`, "Jobs"]}
            labelFormatter={(label) => `Month: ${monthNames[label - 1]}`}
          />
          {/* Area line */}
          <Area
            type="monotone"
            dataKey="job_posts"
            stroke="#2F74FA"
            fill="#2F74FABF"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
