import React from "react";
import { ResponsiveContainer, PieChart, Pie, Legend, Tooltip } from "recharts";

interface PieChartItemProps {
  data: ReadonlyArray<object>;
  dataKey?: string;
  nameKey?: string;
  label?: boolean;
  noLegend?: boolean;
  customLegend?: boolean;
}

export const PieChartItem = ({
  data,
  dataKey = "value",
  nameKey = "name",
  label,
  noLegend,
}: PieChartItemProps) => {
  return (
    <ResponsiveContainer width="99.8%" height="88%" debounce={5}>
      <PieChart width={100} height={100}>
        <Pie
          data={data}
          dataKey={dataKey}
          nameKey={nameKey}
          cx="50%"
          cy="50%"
          innerRadius="50%"
          outerRadius="85%"
          fill="fill"
          legendType="circle"
          label={label}
        />
        <Tooltip />
        {noLegend ? null : <Legend verticalAlign="bottom" height={36} />}
      </PieChart>
    </ResponsiveContainer>
  );
};
