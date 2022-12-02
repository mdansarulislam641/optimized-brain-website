import React from 'react';
import {useLoaderData} from 'react-router-dom';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const QuizChart = () => {
    const questions = useLoaderData()
    console.log(questions.data)

    return (
        <div className='md:w-1/2 w-[90%] m-auto'>
            <h2 className="text-3xl text-red-700 mb-5">
                This is All Of Data Chart in Quiz Item
            </h2>
            <ResponsiveContainer width="100%" height={300}>
           <LineChart  width={500}
            height={200}
            data={questions.data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey='name'/>
                <YAxis></YAxis>
                <Tooltip/>
                <Line type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
           </LineChart>
                </ResponsiveContainer>
        </div>
    );
};

export default QuizChart;