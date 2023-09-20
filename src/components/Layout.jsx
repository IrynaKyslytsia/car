import { Outlet } from "react-router-dom";
import Container from "./Container/Container";
import Header from "./AppBar/AppBar";

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Container>
                    <Outlet />
                </Container>
            </main>
        </>       
    )
};

export default Layout;