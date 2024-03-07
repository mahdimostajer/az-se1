import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function Signup() {
	const navigate = useNavigate();
	return (
		<>
			<input placeholder="username:" />
			<input placeholder="password:" />
			<input placeholder="confirm password:" />
			<button>Signup</button>
			<Button className="m-2" onClick={() => navigate("/login")} type="link">I already have an account</Button>
		</>
	);
}
