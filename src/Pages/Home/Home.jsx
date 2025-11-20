import React from "react";
import Banner from "../Banner/Banner";
import BestDoctors from "../BestDoctors/BestDoctors";
import { useLoaderData } from "react-router";
const Home = () => {
	const data  = useLoaderData();

	return (
		<div>
			<Banner />
			<BestDoctors data={data} />
		</div>
	);
};

export default Home;
