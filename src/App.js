import "./App.css";
import Login from "./components/login/Login.js";
import Nav from "./components/navbar/Navbar.js";
import Feed from "./components/feed/Feed.js";
import Left from "./components/sidebarLeft/SidebarLeft.js";
import Right from "./components/sidebarRight/SidebarRight.js";

import { useState, useEffect } from "react";
import axios from "axios";

function App() {
	const [incoming, setIncoming] = useState([]);
	const [username, setUsername] = useState(" ");
	const [password, setPassword] = useState(" ");
	const API = "http://localhost:8000";

	// useEffect(() => {
	// 	axios.get(`${API}/admin`).then((response) => {
	// 		setIncoming(response.data);
	// 	});
	// }, []);
	// const getIncoming = () => {
	// 	axios
	// 		.get(`${API}/api/users`)
	// 		.then(
	// 			(response) => setIncoming(response.data),
	// 			(err) => console.error(err)
	// 		)
	// 		.catch((error) => console.error(error));
	// };

	const handleUsername = (event) => {
		setUsername(event.target.value);
	};

	const handlePassword = (event) => {
		setPassword(event.target.value);
	};
	const handleLogin = (event) => {
		event.preventDefault();
		axios
			.post(`${API}/login/`, {
				username: username,
				password: password,
			})
			// .catch((error) => {
			// 	if (error) {
			// 		alert("Email or password does not match records");
			// 	}
			// })
			.then((response) => {
				// console.log(userAccount)
				console.log(response.data);
				setIncoming(response.data);
			});
	};

	// useEffect(() => {
	// 	getIncoming();
	// }, []);

	const MainContent = (event) => {
		return (
			<>
				<Nav />
				<Left />
				<Right />
				<Feed />
			</>
		);
	};

	return (
		<div className='App'>
			{/* <Login /> */}
			<MainContent />
		</div>
	);
}

export default App;
