import { Link } from "react-router-dom";

export default function Login() {
	return (
		<>
			<input style={{ color: "blue" }} placeholder="username:" />
			<input placeholder="password:" />
			<button>Login</button>
			<Link to="/signup">Create an account</Link>
		</>
	);
}
