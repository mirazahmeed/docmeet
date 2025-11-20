const getStoredData = () => {
	const storedData = localStorage.getItem("doctorId");
	if (storedData) {
		const storedDataParsed = JSON.parse(storedData);
		return storedDataParsed;
	} else {
		return [];
	}
};

const addToLS = (id) => {
	const storedData = getStoredData();
	if (storedData.includes(id)) {
		alert("Already Added");
	} else {
		storedData.push(id);
		const data = JSON.stringify(storedData);
		localStorage.setItem("doctorId", data);
	}
};

export { getStoredData, addToLS };
