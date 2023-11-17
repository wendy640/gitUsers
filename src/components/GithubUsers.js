import React,{useState,useEffect} from 'react'

const GithubUsers = () => {
  const [users,setUsers]=useState([])
const getUsers=()=>{
  fetch("https://api.github.com/users")
  .then(response=>response.json())
  .then((data)=>{
    console.log(data)
    setUsers(data)
  })
  .catch((error)=>{
    console.error(" error fetching data", error )
  })
}

useEffect(() => {
getUsers()
}, [])


  return (
		<div className="--bg-grey --py2">
			<div className="contaner">
				<header>
					<h1 className="--text-center --text-light">Github Users</h1>
					<div className="--line"></div>
				</header>
				<div className="--grid-25 py">
					{users.map((user) => {
            const { id, avatar_url, login, html_url } = user;
              return (
								<div
									key={id}
									className="--card --bg-light --p --flex-start"
								>
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
            
          })}
				</div>
			</div>
		</div>
	);
}

export default GithubUsers
