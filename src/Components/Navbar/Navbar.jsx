import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router";
import "../../index.css"

const Navbar = () => {
	return (
		<div>
			{/* navbar */}
			<div className="navbar bg-base-100 shadow-sm">
				<div className="navbar-start">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								{" "}
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>{" "}
							</svg>
						</div>
						<ul
							tabIndex="-1"
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
							<NavLink to="/">
								<p>Home</p>
							</NavLink>
							<NavLink to="/doctors">
								<p>Doctors</p>
							</NavLink>
							<NavLink to="/bookings">
								<p>Bookings</p>
							</NavLink>
							<NavLink to="/blogs">
								<p>Blogs</p>
							</NavLink>
							<NavLink to="/contact">
								<p>Contact</p>
							</NavLink>
						</ul>
					</div>
					<Link to="/" className="flex items-center gap-2">
						<img
							className="w-8"
							src="src/assets/C001-assets/logo.png"
							alt=""
						/>{" "}
						DocMeet
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1 gap-5">
						<NavLink to="/">
							<p>Home</p>
						</NavLink>
						<NavLink to="/doctors">
							<p>Doctors</p>
						</NavLink>
						<NavLink to="/bookings">
							<p>Bookings</p>
						</NavLink>
						<NavLink to="/blogs">
							<p>Blogs</p>
						</NavLink>
						<NavLink to="/contact">
							<p>Contact</p>
						</NavLink>
					</ul>
				</div>
				<div className="navbar-end">
					<a className="btn rounded-4xl text-white bg-[#176AE5]">
						Emergency
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
