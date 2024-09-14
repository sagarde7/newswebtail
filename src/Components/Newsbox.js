import React, { useEffect, useState } from 'react'
import Newsinfo from './Newsinfo'

function Newsbox() {
    const [articles,setArticles]=useState([]);
    useEffect( () => {
      
        const fetchNews = async () => {
            try {
                // Fetching data from an API
                let response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=ace90de33cb44020836ffb68afac36ad');
                
                // Check if the response is okay (status code 200-299)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
        
                // Parsing the JSON response
                let data = await response.json();
                
                // Using the fetched data
                // console.log(data);
                console.log(data); // Assuming articles is part of the response data
                setArticles(data.articles);
            } catch (error) {
                // Handling any errors that occur during the fetch
                console.error('Error fetching data:', error);
            }
        };
        // console.log("articles",articles);
        
        // Call the async function
        fetchNews();
    }, []); 
    
  return (
    <>
      <h1 className="heading text-center font-bold text-5xl underline text-red-600">
        Latest News
      </h1>
        {
            articles.map((article,index)=>{
                return (
                
                <Newsinfo key={index} ims={article.urlToImage} des={article.description} url={article.url} title={article.title} />
                )
            })
        }
        {/* <Newsinfo/> */}

    </>
  )
}

export default Newsbox
