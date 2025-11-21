import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { getStoredData, removeFromLS } from "../../utilities/addToLS";
import BookingDetails from "../BookingDetails/BookingDetails";
import DoctorsFeeChart from "../../Components/DoctorsFeeChart/DoctorsFeeChart";

const Bookings = () => {
	const [bookings, setBookings] = useState([]);
	const data = useLoaderData();
	useEffect(() => {
		const storedIds = getStoredData();
		const filteredData = data.filter((doctor) =>
			storedIds.includes(doctor.registration_no)
		);

		setBookings(filteredData);
	}, []);

	const handleCancelAppointment = (registration_no) => {
		// 1) remove from LS
		removeFromLS(registration_no);

		// 2) remove from state (so UI + chart update)
		setBookings((prev) =>
			prev.filter(
				(booking) => booking.registration_no !== registration_no
			)
		);
	};

	return (
		<div className="container mx-auto space-y-5 mt-5 mb-5">
			<h3 className="text-4xl font-semibold text-center">
				My Appointments
			</h3>
			<p className="text-center text-gray-400">
				Our platform connects you with verified, experienced doctors
				across various specialties — all at your convenience.
			</p>
			{bookings.length > 0 && (
				<div className="flex justify-center">
					<DoctorsFeeChart bookings={bookings} />
				</div>
			)}
			<div className="flex flex-col gap-4">
				{bookings.map((booking) => (
					<BookingDetails
						key={booking.registration_no}
						booking={booking}
						onCancel={handleCancelAppointment}></BookingDetails>
				))}
				{bookings.length === 0 && (
					<div className="flex flex-col justify-center items-center space-y-5">
						<p className="text-center text-gray-400">
							You don't have any appointments yet.
						</p>
						<Link to={"/"} className="btn btn-primary">Book an Appointment</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default Bookings;
