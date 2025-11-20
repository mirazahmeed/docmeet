import React, { Suspense } from "react";
import Doctor from "../Doctor/Doctor";
import { Link } from "react-router";

const BestDoctors = ({ data }) => {
	const topDoctors = Array.isArray(data)
		? [...data]
				.sort((a, b) => (b.experience || 0) - (a.experience || 0))
				.slice(0, 10)
		: [];

	return (
		<div className="container mx-auto">
			{" "}
			<h2 className="text-4xl font-bold text-center my-5">
				{" "}
				Our Best Doctors{" "}
			</h2>{" "}
			<p className="text-center w-3/4 mx-auto my-5 text-gray-500">
				{" "}
				Our platform connects you with verified, experienced doctors
				across various specialties all at your convenience. Whether it's
				a routine checkup or urgent consultation, book appointments in
				minutes and receive quality care you trust.{" "}
			</p>{" "}
			<Suspense fallback={<div>Loading...</div>}>
				{" "}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
					{" "}
					{topDoctors.map((doctor) => (
						<Doctor
							key={doctor.registration_no}
							doctor={doctor}></Doctor>
					))}{" "}
				</div>{" "}
			</Suspense>{" "}
			<div className="flex justify-center">
				<Link to="/doctors" className="btn btn-primary my-5 text-xl">
					See All Doctors
				</Link>
			</div>
		</div>
	);
};

export default BestDoctors;
