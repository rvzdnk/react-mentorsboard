import Welcome from "./Welcome/Welcome";
import { Wrapper } from "./Landing.styled";
import AdvertsList from "../Adverts/AdvertsList";
import NavBar from "../NavBar/NavBar";

const Landing = () => {
    return (
        <>
            <NavBar/>
            <Wrapper>
                <Welcome/>
                <AdvertsList/>
            </Wrapper>
        </>
    );
};

export default Landing;