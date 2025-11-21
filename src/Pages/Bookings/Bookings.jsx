import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import { getStoredData } from "../../utilities/addToLS";

const Bookings = () => {
	const data = useLoaderData();
	useEffect(() => {
		const storedIds = getStoredData();
		const filteredData = data.filter((doctor) =>
			storedIds.includes(doctor.registration_no)
		);

		console.log(filteredData);
	}, [data]);

	return <div>Bookings</div>;
};

export default Bookings;
