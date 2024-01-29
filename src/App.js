import React from "react";
import ProfileCard from "./components/ProfileCard";
import users from "./data/Users";
import "./App.css"; 

function App() {
	// Main component that renders user profile cards
	return (
		<div className="app-container">
			{users.map((user) => (
				<ProfileCard key={user.id} user={user} />
			))}
		</div>
	);
}

export default App;
