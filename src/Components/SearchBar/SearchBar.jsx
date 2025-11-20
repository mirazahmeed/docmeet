import React, { useState } from "react";

const SearchBar = ({
	onSearch,
	initialValue = "",
	placeholder = "Search any doctor...",
	buttonLabel = "Search Now",
	className = "",
}) => {
	const [value, setValue] = useState(initialValue);

	const handleSubmit = (e) => {
		e.preventDefault();
		onSearch?.(value.trim());
	};

	return (
		<form
			onSubmit={handleSubmit}
			className={`flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 ${className}`}>
			<input
				className="md:w-96 w-72 rounded-4xl p-3 border border-gray-300 outline-none"
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder={placeholder}
			/>
			<button
				className="rounded-4xl text-white bg-[#176AE5] p-3 border-2 border-[#176AE5] md:ml-2 w-32 text-center"
				type="submit">
				{buttonLabel}
			</button>
		</form>
	);
};

export default SearchBar;
