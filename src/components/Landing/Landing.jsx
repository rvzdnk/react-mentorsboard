import Welcome from "./Welcome/Welcome";
import { Wrapper } from "./Landing.styled";
import AdvertsList from "../Adverts/AdvertsList";
import NavBar from "../NavBar/NavBar";
import Cookie from "../Cookie/Cookie";

const Landing = () => {
    return (
        <>
            <NavBar/>
            <Wrapper>
                <Welcome/>
                <AdvertsList/>
            </Wrapper>
            <Cookie/>
        </>
    );
};

export default Landing;