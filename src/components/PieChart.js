import React from 'react';
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const defaultData = [
  { name: 'Default A', value: 300 },
  { name: 'Default B', value: 200 },
  { name: 'Default C', value: 100 },
  { name: 'Default D', value: 50 },
];

const PieChart = ({ data = defaultData }) => {
  return (
    <RechartsPieChart width={400} height={160}>
      <Pie
        data={data}
        cx={200}
        cy={50}
        innerRadius={20}
        outerRadius={50}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </RechartsPieChart>
  );
};

export default PieChart;
