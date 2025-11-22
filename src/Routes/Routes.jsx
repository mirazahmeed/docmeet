import React, { Component } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import DoctorDetails from "../Pages/DoctorDetails/DoctorDetails";
import Doctors from "../Pages/Doctors/Doctors";
import Bookings from "../Pages/Bookings/Bookings";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: Root,
		errorElement: <Error></Error>,
		children: [
			{
				index: true,
				loader: () => fetch("/doctorsInfo.json"),
				path: "/",
				Component: Home,
			},
			{
				path: "doctorDetails/:id",
				loader: async () => {
					const res = await fetch("/doctorsInfo.json");
					return res.json();
				},
				Component: DoctorDetails,
			},
			{
				path: "/doctors",
				loader: () => fetch("/doctorsInfo.json"),
				Component: Doctors,
			},
			{
				path: "/bookings",
				loader: () => fetch("/doctorsInfo.json"),
				Component: Bookings,
			},
			{
				path: "/bookings/:id",
				Component: Bookings,
			}
		],
	},
]);
