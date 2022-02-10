import React from 'react';

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
];

const fakeSeries = [
  {
    data: data01,
    dataKey: 'value',
    fill: '#8844d8',
    outerRadius: 60
  },
  {
    data: data02,
    dataKey: 'value',
    fill: '#82cc9d',
    innerRadius: 70,
    outerRadius: 90,
    label: true
  }
];

const RateInfoChart = ({series = fakeSeries}) => (
  <ResponsiveContainer width="100%" height="100%">
    <PieChart width={400} height={400}>
      {series.map((s, i) => (
        <Pie key={i} cx="50%" cy="50%" {...s} />
      ))}
    </PieChart>
  </ResponsiveContainer>
);

export default RateInfoChart;
