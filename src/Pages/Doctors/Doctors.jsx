import React, { useMemo, useState } from "react";
import { useLoaderData } from "react-router";
import Doctor from "../Doctor/Doctor";
import SearchBar from "../../Components/SearchBar/SearchBar";

const Doctors = () => {
	const originalData = useLoaderData();
	const [doctors, setDoctors] = useState(originalData);
	const [sort, setSort] = useState("default");
	const [searchTerm, setSearchTerm] = useState("");

	const shuffleArray = (arr) => {
		const array = [...arr];
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};

	const handleSort = (type) => {
		if (type === "default") {
			setSort("default");
			setDoctors(shuffleArray(originalData));
		} else if (type === "experience") {
			setSort("experience");
			setDoctors(
				[...originalData].sort((a, b) => b.experience - a.experience)
			);
		} else if (type === "availability") {
			setSort("availability");

			const today = new Date().toLocaleDateString("en-US", {
				weekday: "long",
			});

			const sorted = [...originalData].sort((a, b) => {
				const aAvailable = a.availability.includes(today);
				const bAvailable = b.availability.includes(today);

				// Available today → show first
				if (aAvailable && !bAvailable) return -1;
				if (!aAvailable && bAvailable) return 1;

				return 0; // equal -> no change
			});

			setDoctors(sorted);
		}
	};

	const filteredDoctors = useMemo(() => {
		if (!searchTerm.trim()) return doctors;

		const term = searchTerm.toLowerCase();
		return doctors.filter((d) => {
			return (
				d.name.toLowerCase().includes(term) ||
				d.specialities.toLowerCase().includes(term) ||
				d.workplace.toLowerCase().includes(term) ||
				d.education.toLowerCase().includes(term)
			);
		});
	}, [doctors, searchTerm]);

	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 10;

	const totalPages = Math.ceil(filteredDoctors.length / itemsPerPage);

	const startIndex = (currentPage - 1) * itemsPerPage;
	const currentDoctors = filteredDoctors.slice(
    startIndex,
    startIndex + itemsPerPage
  );


	const goToPage = (page) => {
		if (page >= 1 && page <= totalPages) {
			setCurrentPage(page);
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	// function to generate visible page numbers
	const generatePageNumbers = () => {
		const pages = [];

		if (totalPages <= 10) {
			for (let i = 1; i <= totalPages; i++) pages.push(i);
			return pages;
		}

		if (currentPage <= 5) {
			return [1, 2, 3, 4, 5, 6, "...", totalPages - 1, totalPages];
		}

		if (currentPage >= totalPages - 4) {
			return [
				1,
				2,
				"...",
				totalPages - 5,
				totalPages - 4,
				totalPages - 3,
				totalPages - 2,
				totalPages - 1,
				totalPages,
			];
		}

		return [
			1,
			"...",
			currentPage - 2,
			currentPage - 1,
			currentPage,
			currentPage + 1,
			currentPage + 2,
			"...",
			totalPages,
		];
	};

	const pageNumbers = generatePageNumbers();

	const todayWeekday = new Date().toLocaleDateString("en-US", {
		weekday: "long",
	});

	return (
		<div className="my-10 space-y-5 mt-5 container mx-auto">
			<div className="p-6 bg-white rounded-2xl">
				<h4 className="text-4xl text-center">
					Doctor’s Profile Details
				</h4>
				<p className=" text-center ">
					Health is not just about what you're eating. It's also about
					what you're thinking, saying, and doing. A peaceful mind
					leads to a healthy body
				</p>
			</div>
			<SearchBar
				onSearch={(term) => {
					setSearchTerm(term);
					setCurrentPage(1); // reset to page 1 when searching
				}}
				placeholder="Search any doctor..."
			/>
			<div className="flex justify-end">
				<details className="dropdown">
					<summary className="btn m-1">
						Sort By {sort ? sort : "Default"}
					</summary>
					<ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
						<li>
							<a onClick={() => handleSort("default")}>Default</a>
						</li>
						<li>
							<a onClick={() => handleSort("experience")}>
								Experience
							</a>
						</li>
						<li>
							<a onClick={() => handleSort("availability")}>
								Availability
							</a>
						</li>
					</ul>
				</details>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
				{" "}
				{currentDoctors.map((doctor) => (
					<Doctor
						key={doctor.registration_no}
						doctor={doctor}></Doctor>
				))}{" "}
			</div>{" "}
			<div className="flex justify-center mt-10">
				<div className="join">
					<button
						className="join-item btn"
						onClick={() => goToPage(currentPage - 1)}
						disabled={currentPage === 1}>
						‹
					</button>

					{pageNumbers.map((num, idx) =>
						num === "..." ? (
							<button
								key={idx}
								className="join-item btn btn-disabled">
								...
							</button>
						) : (
							<button
								key={idx}
								className={`join-item btn ${
									num === currentPage
										? "bg-black text-white"
										: ""
								}`}
								onClick={() => goToPage(num)}>
								{num}
							</button>
						)
					)}

					<button
						className="join-item btn"
						onClick={() => goToPage(currentPage + 1)}
						disabled={currentPage === totalPages}>
						›
					</button>
				</div>
			</div>
		</div>
	);
};

export default Doctors;
