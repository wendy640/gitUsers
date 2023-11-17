import React, { useState, useEffect } from "react";

const Text = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const getText = () => {
		setLoading(true);
		try {
			fetch("").then((response) => {
				if (!response.ok) {
					throw new error("something went wrong");
					
				}
				return (() => response.json).then((data) => {
					setUsers(data);
					setLoading(false);
				});
			});
		} catch (error) {
			console.error("error msg", error);
			setError(true);
		}
	};

	useEffect(() => {
		getText();
	}, []);

	return (
		<div>
			{loading && <p>loading..</p>}
			{error && <p>oops..</p>}
			{users.map((user) => {
				return user.login;
			})}
		</div>
	);
};

export default Text;
