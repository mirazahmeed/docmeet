import React from "react";

const BookingDetails = ({ booking, onCancel }) => {
	const { name, fee, education, designation, category, registration_no } =
		booking;
	return (
		<div>
			<div></div>
			<div className="space-y-5 p-5 bg-white rounded-3xl">
				<div className="flex justify-between items-center">
					<div className="flex flex-col">
						<h3>{name}</h3>
						<div className="text-gray-400">
							{education}, {designation}, {category}
						</div>
					</div>
					<p className="text-gray-400">
						Appointment Fee: {fee} Taka + Vat
					</p>
				</div>

				<hr className="border-b border-dashed border-gray-300" />
				<button
					className="btn rounded-2xl w-full"
					onClick={() => onCancel(registration_no)}>
					Cancel Appointment
				</button>
			</div>
		</div>
	);
};

export default BookingDetails;
