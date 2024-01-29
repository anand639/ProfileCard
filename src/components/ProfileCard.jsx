import React from "react";
import "./ProfileCard.css"; // Importing ProfileCard specific styles

function ProfileCard({ user }) {
	// Component to display a user profile card
	return (
		<div className="card">
			<img src={user.image} alt={`${user.name}`} className="card-image" />
			<h2 className="card-title">{user.name}</h2>
			<p className="card-bio">{user.bio}</p>
		</div>
	);
}

export default ProfileCard;
