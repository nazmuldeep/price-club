import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AssignmentMarks = () => {
    const data = [
        {
            name: 'Page A',
            marks: 4000,
            position: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            marks: 3000,
            position: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            marks: 2000,
            position: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            marks: 2780,
            position: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            marks: 1890,
            position: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            marks: 2390,
            position: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            marks: 3490,
            position: 4300,
            amt: 2100,
        },
    ];
    return (
        <div>
            <LineChart width={500} height={400} data={data}>
                <Line type="monotone" dataKey='marks' stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default AssignmentMarks;