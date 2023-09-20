import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Car Rental Hub</title>
            </Helmet>
            <h1 style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "48px"
            }}>DRIVE YOUR DREAMS WITH US!</h1>
        </>
    )
};

export default Home;