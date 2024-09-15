import React, { useEffect, useState } from 'react'
import Newsinfo from './Newsinfo'

function Newsbox(props) {
    const [articles,setArticles]=useState([]);
    const [pageno,setPageno]=useState(1);
    const [totalPages,setToltalpages]=useState(1);
    useEffect( () => {
      
        const fetchNews = async () => {
            try {
                // Fetching data from an API
                let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=ace90de33cb44020836ffb68afac36ad&page=${pageno}`);
                console.log(props.category);
                
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
                setToltalpages(data.totalResults/20);
            } catch (error) {
                // Handling any errors that occur during the fetch
                console.error('Error fetching data:', error);
            }
        };
        // console.log("articles",articles);
        
        // Call the async function
        fetchNews();
    }, [pageno,props.category]); 
    
  return (
    <>
      <h1 className="heading text-center font-bold text-5xl underline text-red-600 mt-7">
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
        <br/>
        <button className={`bg-blue-600 ml-5 float-left h-10 w-10 mb-2 ${pageno === 1 ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600}' }`} onClick={()=>{
          setPageno(pageno>1? pageno-1:pageno);
        }}
        disabled={pageno===1}
        > &lt; </button>
        <button className={`bg-blue-600 mr-5 float-right h-10 w-10 mb-2 ${pageno === totalPages ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600}' }`}
      onClick={() => setPageno(pageno < totalPages ? pageno + 1 : pageno)}
      disabled={pageno === totalPages} 
      > &gt; </button>

    </>
  )
}

export default Newsbox
