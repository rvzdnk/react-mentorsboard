import Welcome from "./Welcome/Welcome";
import { Wrapper, Container } from "./Landing.styled";
import AdvertsList from "../Adverts/AdvertsList";
import NavBar from "../NavBar/NavBar";
import Cookie from "../Cookie/Cookie";

const Landing = () => {
    return (
        <>
        <Container>
        <NavBar/>
            <Wrapper>
                <Welcome/>
                <AdvertsList/>
            </Wrapper>
            <Cookie/>
        </Container>

        </>
    );
};

export default Landing;