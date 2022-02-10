import * as React from 'react';
import * as R from 'ramda';
import { formatDistance, subDays } from 'date-fns';

import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import Title from '../../components/Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const rand = (max, min = 0) => {
  return Math.ceil(Math.random() * (max - min) + min);
};

const data = R.range(1, 8)
  .reverse()
  .map((x) => ({
    name: formatDistance(subDays(new Date(), x), new Date(), {
      addSuffix: true,
    }),
    sent: rand(2000),
    received: rand(3000),
  }));

const Chart = () => {
  return (
    <>
      <Title>Exchange History</Title>
      <ResponsiveContainer>
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sent" fill="#8884d8" />
          <Bar dataKey="received" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
