import { Link } from "react-router-dom";
export default function Signup() {
	return (
		<>
			<input placeholder="username:" style={{ color: "red" }} />
			<input placeholder="password:" />
			<input placeholder="confirm password:" />
			<button>Signup</button>
			<Link to="/login">I already have an account</Link>
		</>
	);
}
