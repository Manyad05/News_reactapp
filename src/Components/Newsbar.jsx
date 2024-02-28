import React, { useEffect, useState } from 'react';

const Newsbar = ({ searchQuery }) => {
    const [newsData, setNewsData] = useState([]);

    const fetchData = async () => {
        try {
            let apiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9ae9ebf55a404cd9b676668c14d4465a";
            if (searchQuery) {
                apiUrl += `&q=${searchQuery}`;
            }
            const response = await fetch(apiUrl);
            const data = await response.json();
            setNewsData(data.articles); // Assuming 'articles' contains the news data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [searchQuery]);

    return (
        <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {newsData.map((article, index) => (
                <div className="card" style={{ width: '18rem', margin: '1rem' }} key={index}>
                    <img src={article.urlToImage == null ? "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/NKMOC45WAUT2LVWJQJW4CNPOFE.JPG&w=1440" : article.urlToImage} className="card-img-top" alt={article.title} />
                    <div className="card-body">
                        <h5 className="card-title">{article.title}</h5>
                        <p className="card-text">{article.description}</p>
                        <a href={article.url} className="btn btn-primary">Read more</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Newsbar;

