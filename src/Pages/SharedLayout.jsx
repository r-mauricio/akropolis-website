import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Home = () => {
	return (
		<div className="font-roboto dark:bg-darkGray">
			<Navbar />
			<div className="">
				<Outlet />
			</div>
		</div>
	);
};

export default Home;
