"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: 'Jan', users: 30 },
  { name: 'Feb', users: 45 },
  { name: 'Mar', users: 60 },
  { name: 'Apr', users: 75 },
  { name: 'May', users: 90 },
  { name: 'Jun', users: 120 },
];

export default function AnalyticsMockup() {
  return (
    <section className="py-12 px-6 max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">User Growth Analytics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis stroke="#8884d8" />
          <Tooltip />
          <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={3} dot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}
