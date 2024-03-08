import { Button, Card, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const navigate = useNavigate();
	return (
		<>
			<Card className="w-1/3 text-center m-auto mt-7">
				<Form name="auth" onFinish={() => navigate("/")}>
					<Form.Item
						name="username"
						rules={[
							{ required: true, message: "please enter your username" },
						]}
					>
						<Input size="large" placeholder="username" />
					</Form.Item>
					<Form.Item
						name="password"
						rules={[
							{ required: true, message: "enter this" },
						]}
					>
						<Input.Password size="large" type="password" placeholder="password" />
					</Form.Item>
					<Form.Item>
						<Button size="large" block htmlType="submit">
							Login
						</Button>
					</Form.Item>
				</Form>
				<Button onClick={() => navigate("/signup")} type="link">Create an account</Button>

			</Card>
		</>
	);
}
