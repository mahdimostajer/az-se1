import { Button, Layout } from "antd";
import Card from "antd/es/card/Card";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate();
    return (
        <Layout style={{ minHeight: "100vh" }} >
            <Layout.Content>
                <Card className="w-1/3 text-center m-auto mt-7">
                    <h2 className="m-2 text-lg">Welcome</h2>
                    <h2 className="m-2 text-lg">
                        To Software Engineering Lab
                    </h2>
                    <h4 className="m-2">az1</h4>
                    <Button className="m-2" onClick={() => navigate("/login")}>Login</Button>
                    <Button onClick={() => navigate("/signup")}>Signup</Button>
                </Card>

            </Layout.Content>

        </Layout >

    )
}

export default MainPage;