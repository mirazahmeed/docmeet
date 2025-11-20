import React, { Component } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import DoctorDetails from "../Pages/DoctorDetails/DoctorDetails";
import Doctors from "../Pages/Doctors/Doctors";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: Root,
		errorElement: <Error></Error>,
		children: [
			{
				index: true,
				loader: () => fetch("/src/assets/doctorsInfo.json"),
				path: "/",
				Component: Home,
			},
			{
				path: "doctorDetails/:id",
				loader: async () => {
					const res = await fetch("/src/assets/doctorsInfo.json");
					return res.json();
				},
				Component: DoctorDetails,
			},
			{
				path: "/doctors",
				loader: () => fetch("/src/assets/doctorsInfo.json"),
				Component: Doctors,
			},
		],
	},
]);
