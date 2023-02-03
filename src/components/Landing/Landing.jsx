import Welcome from "./Welcome/Welcome";
import { Wrapper } from "./Landing.styled";
// import ShowAdvertsBtn from "../Buttons/ShowAdvertsBtn/ShowAdvertsBtn"
import AdvertsList from "../Adverts/AdvertsList";
import NavBar from "../NavBar/NavBar";

const Landing = () => {
    return (
        <>
            <Wrapper>
                <NavBar/>
                <Welcome/>
                {/* <ShowAdvertsBtn/> */}
                <AdvertsList/>
            </Wrapper>
        </>
    );
};

export default Landing;