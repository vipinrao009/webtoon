import React, { useEffect, useState } from 'react'
import Navbar from '../layout/navbar/Navbar'
import Footer from '../layout/footer/Footer'
import axios from 'axios'
import './Webtoon.css'
import Card from '../layout/Card'

const WebtoonComponent = () => {
    const [webtoon, setWebtoon] = useState([]);

    const FetchWebtoon = async () => {
        try {
            const { data } = await axios.get("https://webtoon-1.onrender.com/api/v1/webtoon/fetch-webtoon?limit=5");

            if (data.success) {
                setWebtoon(data.webtoons);
            }
        } catch (error) {
            if (error.response) {
                console.log("Error response data:", error.response.data);
            } else if (error.request) {
                console.log("Error request:", error.request);
            } else {
                console.log("Error message:", error.message);
            }
        }
    };

    useEffect(() => {
        FetchWebtoon();
    }, []); // Empty dependency array ensures FetchWebtoon is called once when the component mounts

    return (
        <div className="container">
        <Navbar />
        <div className="webtoon-container">
            {webtoon.length > 0 ? (
                webtoon.map((item) => (
                    <Card
                        key={item._id}
                        imageUrl={item.image.secure_url}
                        title={item?.title}
                        description={item.description}
                    />
                ))
            ) : (
                <p>No webtoons found</p>
            )}
        </div>
        <Footer />
    </div>
    );
};

export default WebtoonComponent;
