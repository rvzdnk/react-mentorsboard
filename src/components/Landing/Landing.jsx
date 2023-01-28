import Welcome from "./Welcome/Welcome";
import { Wrapper } from "./Landing.styled";
import ShowAdvertsBtn from "../Buttons/ShowAdvertsBtn/ShowAdvertsBtn"

const Landing = () => {
    return (
        <>
            <Wrapper>
                <Welcome/>
                <ShowAdvertsBtn/>
            </Wrapper>
        </>
    );
};

export default Landing;