import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const PhoneBar = () => {
    const [phones, setphones] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneLoaded = data.data.data;
                const phoneData = phoneLoaded.map(phone => {
                    const parts = phone.slug.split('-');
                    const price = parseInt(parts[1]);
                    const singlePhone = {
                        name: phone.phone_name,
                        price: price
                    }
                    // console.log(singlePhone)
                    return singlePhone;

                })
                console.log(phoneData);
                setphones(phoneData);
            })
    }, [])
    return (
        <div>
            <BarChart width={500} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />

                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default PhoneBar;