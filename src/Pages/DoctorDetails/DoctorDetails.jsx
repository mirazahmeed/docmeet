import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { addToLS } from "../../utilities/addToLS";

const DoctorDetails = () => {
	const { id } = useParams();
	
	const data = useLoaderData();
	const doctor = data?.find((d) => d.registration_no === id);

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

	const todayDate = new Date();
	const todayFormatted = todayDate.toLocaleDateString("en-US", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	const todayWeekday = todayDate.toLocaleDateString("en-US", {
		weekday: "long",
	});

	const isAvailableToday = availability.includes(todayWeekday);

	const dayIndexMap = {
		Sunday: 0,
		Monday: 1,
		Tuesday: 2,
		Wednesday: 3,
		Thursday: 4,
		Friday: 5,
		Saturday: 6,
	}; 
	

	let nextAvailableDateText = null;

	if (!isAvailableToday && availability.length) {
		const todayIndex = dayIndexMap[todayWeekday];

		// Convert availability names to indexes
		const availableIndices = availability
			.map((day) => dayIndexMap[day])
			.filter((i) => i !== undefined);

		// Find the smallest positive offset in days
		let bestOffset = null;
		availableIndices.forEach((index) => {
			let offset = (index - todayIndex + 7) % 7;
			if (offset === 0) offset = 7; // same day next week
			if (bestOffset === null || offset < bestOffset) {
				bestOffset = offset;
			}
		});

		if (bestOffset !== null) {
			const nextDate = new Date();
			nextDate.setDate(todayDate.getDate() + bestOffset);
			nextAvailableDateText = nextDate.toLocaleDateString("en-US", {
				weekday: "long",
				year: "numeric",
				month: "long",
				day: "numeric",
			});
		}
	}


	const handleBooking = (id) => {
		// stored with registration_no
		addToLS(id);
	}





	return (
		<div className="space-y-5 mt-5 container mx-auto">
			<div className="p-6 bg-white rounded-2xl ">
				<h4 className="text-4xl text-center font-bold">
					Doctor’s Profile Details
				</h4>
				<p className=" text-center w-1/2 mx-auto">
					Health is not just about what you're eating. It's also about
					what you're thinking, saying, and doing. A peaceful mind
					leads to a healthy body
				</p>
			</div>
			<div className="card rounded-2xl lg:card-side bg-base-100 shadow-sm">
				<figure>
					<img
						className="w-72 h-96 object-cover"
						src={`/src/assets/Doctors-pic/${image}`}
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title text-2xl">{name}</h2>
					<p>Education: {education}</p>
					<p>Specialities: {specialities}</p>
					<p>Designation: {designation}</p>
					<p>Workplace: {workplace}</p>
					<p>{experience} years+ experience</p>
					<p>Registration No: {registration_no}</p>
					<p>
						{availability.map((day,index) => (
							<span key={index} className=" mr-1 p-1 bg-amber-100 text-amber-400 rounded-2xl">
								{day}
							</span>
						))}
					</p>

					<p>Fee: {fee} + included Vat.</p>
					{/* <p>Today: {todayFormatted}</p> */}
				</div>
			</div>
			<div className="text-center p-6 bg-white rounded-2xl">
				<h3>Book an Appointment</h3>
				<div className="flex justify-between mb-2">
					<p>Availability</p>
					<p>
						{isAvailableToday
							? "Doctor Available Today"
							: nextAvailableDateText
							? `Doctor available on ${nextAvailableDateText}`
							: "Availability not found"}
					</p>
				</div>
				<p className="p-2 mb-4 bg-amber-100 text-amber-500 rounded-2xl">
					Due to high patient volume, we are currently accepting
					appointments
					{isAvailableToday
						? " for today."
						: " only on available days."}{" "}
					We appreciate your understanding and cooperation.
				</p>
				<div className="card-actions justify-center ">
					<button
						onClick={() => handleBooking(id)}
						className="btn btn-primary rounded-3xl"
						disabled={!isAvailableToday}>
						{isAvailableToday
							? "Book Appointment"
							: "Not Available Today"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default DoctorDetails;
