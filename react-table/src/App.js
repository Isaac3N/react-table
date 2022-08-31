import React, { useState, useEffect } from "react";
import "./app.css";
import Table from "./Table";
import { Users } from "./users";

function App() {
	const [query, setQuery] = useState("");
	const search = (data) => {
		return data.filter((item) => item.first_name.toLowerCase().includes(query));
	};
	return (
		<div className="app">
			<input
				type="text"
				placeholder="search"
				className="search"
				onChange={(e) => setQuery(e.target.value)}
			/>

			<Table data={search(Users)} />
		</div>
	);
}

export default App;
