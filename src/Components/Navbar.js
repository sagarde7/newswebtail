import React from "react";

function Navbar(props) {
	return (
		<>
			<div className="navbar flex justify-between items-center bg-red-700 text-white fixed top-0 left-0 w-full z-10 px-4 py-3 shadow-lg">
				<div className="logo text-2xl font-bold">NewsInfo</div>
				<ul className="flex items-center gap-6">
					<li
						onClick={() => {
							props.setCategory("general");
						}}
						className="hover:underline hover:cursor-pointer px-3 py-2 rounded transition-colors duration-200 hover:bg-red-600"
					>
						Home
					</li>
					<li
						onClick={() => {
							props.setCategory("business");
						}}
						className="hover:underline hover:cursor-pointer px-3 py-2 rounded transition-colors duration-200 hover:bg-red-600"
					>
						Business
					</li>
					<li
						onClick={() => {
							props.setCategory("technology");
						}}
						className="hover:underline hover:cursor-pointer px-3 py-2 rounded transition-colors duration-200 hover:bg-red-600"
					>
						Technology
					</li>
					<li
						onClick={() => {
							props.setCategory("sports");
						}}
						className="hover:underline hover:cursor-pointer px-3 py-2 rounded transition-colors duration-200 hover:bg-red-600"
					>
						Sports
					</li>
				</ul>
			</div>
		</>
	);
}

export default Navbar;