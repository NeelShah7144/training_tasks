import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Make sure to import axios
import NewsCard from './NewsCard';

export default function ApiExample() {
    const [myData, setMyData] = useState([]);

    const getDataWithApi = async () => {
        try {
            const ref = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2024-06-03&sortBy=publishedAt&apiKey=708799007e8b4751b1dbd6c5b1bd5a3b");
            setMyData(ref.data.articles); 
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }

    useEffect(() => {
        getDataWithApi();
    }, []);
    
    return (
        <div className="row">
            {myData.length > 0 ? myData.map((post) => {
                const { title, description, urlToImage, url } = post;
                return (
                    <div className='col-md-4' key={url}>
                        <NewsCard title={title} desc={description} mainUrl={url} imageUrl={urlToImage} />
                    </div>
                );
            }) : <h1>Loading...</h1>}
        </div>
    );
}