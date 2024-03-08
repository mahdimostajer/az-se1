import { Button, Card, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

export default function Signup() {
	const navigate = useNavigate();
	return (
		<>
			<Card className="w-1/3 text-center m-auto mt-7">

				<Form name="auth" onFinish={() => navigate("/login")}>
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
					<Form.Item
						name="confirm"
						dependencies={['password']}
						hasFeedback
						rules={[
							{
								required: true,
								message: 'enter this.',
							},
							({ getFieldValue }) => ({
								validator(_, value) {
									if (!value || getFieldValue('password') === value) {
										return Promise.resolve();
									}
									return Promise.reject(new Error('password and repeat are not the same!'));
								},
							}),
						]}
					>
						<Input.Password size="large" placeholder="repeat password" />
					</Form.Item>
					<Form.Item>
						<Button size="large" block htmlType="submit">
							signup
						</Button>
					</Form.Item>
				</Form>
				<Button className="m-2" onClick={() => navigate("/login")} type="link">I already have an account</Button>

			</Card>

		</>
	);
}
