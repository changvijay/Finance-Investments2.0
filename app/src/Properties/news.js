// src/components/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/App.css';
import Home from "../navbar";

import { useAuth0 } from "@auth0/auth0-react";

const News = () => {

    const { user, isAuthenticated } = useAuth0();
    const [Data, setData] = useState([]);
    const [top_Data, settop_Data] = useState([]);


    useEffect(() => {
        // Fetch data from Flask API endpoint
        axios.get('http://127.0.0.1:5000/')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching scraped data:', error);
            });
        axios.get('http://127.0.0.1:5000/top')
            .then(response => {
                settop_Data(response.data);
            })
            .catch(error => {
                console.error('Error fetching scraped data:', error);
            });

    }, []);


    return (
        <div>
            <Home />
            {isAuthenticated && user ? (
                <div>Welcome, {user.name}!</div>
            ) : (
                <div>Welcome, Guest!</div>
            )}
            <h1>QUARTERLY RESULTS</h1>
            <ul>
                {top_Data.map((item, index) => (
                    <span>
                        <li>
                            <Link className='custom-link' to={`https://timesofindia.indiatimes.com/business/stock-market/quarterly-results/"${item[0]}`} target="_blank" rel="noopener noreferrer"><h1>{item[1]}</h1> </Link>
                        </li>
                    </span>
                ))}
            </ul>




            <h1>LATEST STORIES</h1>
            <ul>
                {Data.map((items, indexs) => (
                    <span>
                        <li key={indexs}>
                            <Link className='custom-link' to={`https://timesofindia.indiatimes.com/business/stock-market/quarterly-results/"${items[0]}`} target="_blank" rel="noopener noreferrer"><h1>{items[1]}</h1> </Link>
                        </li>
                    </span>

                ))}
            </ul>
        </div>
    );
};

export default News;
