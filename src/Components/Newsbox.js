import React, { useEffect, useState } from "react";
import Newsinfo from "./Newsinfo";

function Newsbox(props) {
	const [articles, setArticles] = useState([]);
	const [pageno, setPageno] = useState(1);
	const [totalPages, setToltalpages] = useState(1);
	useEffect(() => {
		const fetchNews = async () => {
			try {
				// Fetching data from an API
				let response = await fetch(
					`https://newsdata.io/api/1/latest?apikey=${process.env.REACT_APP_API_KEY}${props.category !== "" ? `&category=${props.category}` : ""}&language=en`
				);

				
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				let data = await response.json();

				console.log(data); // Assuming results is part of the response data
				setArticles(data.results || []);
				setToltalpages(Math.ceil(data.totalResults / 10) || 1);
			} catch (error) {
			
				console.error("Error fetching data:", error);
				setArticles([]);
			}
		};

		// Call the async function
		fetchNews();
	}, [pageno, props.category]);

	return (
		<>
			<div className="container mx-auto px-4 pt-20">
				<h1 className="heading text-center font-bold text-4xl text-red-600 mb-8 mt-4">
					Latest{" "}
					{props.category.charAt(0).toUpperCase() +
						props.category.slice(1)}{" "}
					News
				</h1>

				{articles.length === 0 ? (
					<div className="text-center text-gray-500 text-lg">
						Loading news...
					</div>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
						{articles.map((article, index) => {
							return (
								<Newsinfo
									key={article.article_id || index}
									ims={article.image_url}
									des={article.description}
									url={article.link}
									title={article.title}
									source={article.source_name}
									pubDate={article.pubDate}
								/>
							);
						})}
					</div>
				)}

				<div className="flex justify-between items-center mt-8 mb-4">
					<button
						className={`flex items-center px-4 py-2 text-white rounded-lg transition-colors duration-200 ${
							pageno === 1
								? "bg-gray-400 cursor-not-allowed"
								: "bg-blue-600 hover:bg-blue-700"
						}`}
						onClick={() => {
							setPageno(pageno > 1 ? pageno - 1 : pageno);
						}}
						disabled={pageno === 1}
					>
						<svg
							className="w-4 h-4 mr-2"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M15 19l-7-7 7-7"
							></path>
						</svg>
						Previous
					</button>

					<span className="text-gray-600 font-medium">
						Page {pageno} of {Math.ceil(totalPages)}
					</span>

					<button
						className={`flex items-center px-4 py-2 text-white rounded-lg transition-colors duration-200 ${
							pageno >= totalPages
								? "bg-gray-400 cursor-not-allowed"
								: "bg-blue-600 hover:bg-blue-700"
						}`}
						onClick={() =>
							setPageno(pageno < totalPages ? pageno + 1 : pageno)
						}
						disabled={pageno >= totalPages}
					>
						Next
						<svg
							className="w-4 h-4 ml-2"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M9 5l7 7-7 7"
							></path>
						</svg>
					</button>
				</div>
			</div>
		</>
	);
}

export default Newsbox;