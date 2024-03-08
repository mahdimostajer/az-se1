import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const navigate = useNavigate();
	return (
		<>
			<input placeholder="username:" />
			<input placeholder="password:" />
			<button>Login</button>
			<Button onClick={() => navigate("/signup")} type="link">Create an account</Button>
		</>
	);
}


