import React from "react";
import "./Banner.css";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { useNavigate } from "react-router";

const Banner = () => {
	const navigate = useNavigate();

	const handleBannerSearch = (term) => {
		if (!term) return;
		// Go to /doctors and optionally add query param
		navigate(`/doctors?q=${encodeURIComponent(term)}`);
	};
	return (
		<div>
			{/* search bar with Hero */}
			<div className="container mx-auto mt-16 mb-16">
				<div className="hero-section flex flex-col items-center justify-center min-h-screen text-center p-16 space-y-4 rounded-2xl shadow-xl border-white border-3">
					<h2 className="lg:text-5xl text-3xl font-bold">
						Dependable Care, Backed by Trusted Professionals.
					</h2>
					<p className="text-center">
						Our platform connects you with verified, experienced
						doctors across various specialties — all at your
						convenience. Whether it's a routine checkup or urgent
						consultation, book appointments in minutes and receive
						quality care you can trust.
					</p>
					<SearchBar
						onSearch={handleBannerSearch}
						placeholder="Search any doctor..."
					/>
					<div className="flex md:flex-row flex-col items-center justify-center gap-2 overflow-hidden">
						<img
							className="w-full h-86 rounded-3xl md:w-1/2"
							src="C001-assets/banner-img-1.png"
							alt=""
						/>
						<img
							className="w-full h-86 rounded-3xl md:w-1/2"
							src="C001-assets/banner-img-2.jpg"
							alt=""
						/>
					</div>
				</div>
				{/* user profile */}
			</div>
		</div>
	);
};

export default Banner;
