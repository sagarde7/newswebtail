import React from "react";

function Newsinfo(props) {
  console.log(props);

  // Format the publication date
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 m-4 overflow-hidden">
        <div className="relative">
          <img
            src={props.ims || "logo.png"}
            alt="News"
            className="w-full h-48 object-cover"
            onError={(e) => {
              e.target.src = "logo.png";
            }}
          />
          <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
            {props.source || "Unknown Source"}
          </div>
        </div>

        <div className="p-5">
          <div className="title font-bold text-lg mb-2 text-gray-900 line-clamp-2">
            {props.title
              ? props.title.slice(0, 80) +
              (props.title.length > 80 ? "..." : "")
              : "No title available"}
          </div>

          <div className="description text-gray-700 text-sm mb-3 line-clamp-3">
            {props.des
              ? props.des.slice(0, 120) +
              (props.des.length > 120 ? "..." : "")
              : "No description available"}
          </div>

          <div className="flex justify-between items-center">
            <div className="text-xs text-gray-500">
              {formatDate(props.pubDate)}
            </div>

            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors duration-200">
              <a
                href={props.url}
                target="_blank"
                rel="noreferrer"
                className="text-white no-underline"
              >
                Read more
              </a>
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsinfo;