import React, { useState, useEffect } from "react";

const GithubUsers = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	// const getUsers=()=>{
	//   setLoading(true)
	//   fetch("https://api.github.com/users")
	//   .then(response=>response.json())
	//   .then((data)=>{
	//     console.log(data)
	//     setUsers(data)
	//     setLoading(false)
	//   })
	//   .catch((error)=>{
	//     console.error(" error fetching data", error )
	//     setError(true)
	//     setLoading(false)
	//   })
	// }

	const getUsers = async () => {
		setLoading(true);
		try {
			const response = await fetch("https://api.github.com/users");
			if (!response.ok) {
				throw new error("something went wrong");
			}
			const data = await response.json();
			setUsers(data);
			setLoading(false);
		} catch (error) {
			console.log(error.message);
			setError(true);
			setLoading(false);
		}
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div className="--bg-grey --py2">
			<div className="contaner">
				<header>
					<h1 className="--text-center --text-light">Github Users</h1>
					<div className="--line"></div>
				</header>
				{loading && (
					<div className="--center-all --p">
						<p className="--text-dark">Loading...</p>
					</div>
				)}

				<div className="--grid-25 py">
					{error ? (
						<div className="--center-all --p">
							<h4 className="--text-red">...Oops error fetching the data</h4>
						</div>
					) : (
						users.map((user) => {
							const { id, avatar_url, login, html_url } = user;
							return (
								<div key={id} className="--card --bg-light --p --flex-start">
									<img
										className="--profile-img --mx"
										src={avatar_url}
										alt="pics"
									/>
									<span>
										<h4>{login}</h4>

										<a href={html_url}>View Profile</a>
									</span>
								</div>
							);
						})
					)}
				</div>
			</div>
		</div>
	);
};

export default GithubUsers;
