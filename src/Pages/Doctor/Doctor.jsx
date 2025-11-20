import React from "react";
import { Link } from "react-router";

const Doctor = ({ doctor }) => {
	const {
		image,
		name,
		education,
		specialities,
		designation,
		workplace,
		fee,
		registration_no,
		availability,
		experience,
	} = doctor;

	const todayWeekday = new Date().toLocaleDateString("en-US", {
		weekday: "long",
	});

	const isAvailableToday = availability.includes(todayWeekday);

	return (
		<div className="">
			<div className="card bg-base-100 w-96 shadow-sm">
				<figure className="px-5 py-2 h-64">
					<img
						className="w-full h-full object-cover"
						src={`src/assets/Doctors-pic/${image}`}
						alt="Shoes"
					/>
				</figure>
				<div className="card-body">
					<div className="card-actions justify-end">
						{/* Status Badge */}
						<div
							className={`text-white badge ${
								isAvailableToday
									? "badge-success"
									: "badge-error"
							}`}>
							{isAvailableToday ? "Available" : "Not Available"}
						</div>
						<div className="badge badge-outline">
							{experience} Years+ Experience
						</div>
					</div>
					<h2 className="card-title">{name}</h2>
					<p className="text-gray-500">{education}</p>
					<p className="text-gray-500">{registration_no}</p>
					<div className="card-actions justify-end">
						<Link to={`/doctorDetails/${registration_no}`}>
							<button className="btn btn-primary">
								View Details
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Doctor;
