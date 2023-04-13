import React from "react";
import { useSelector } from "react-redux";
import Welcome from "./Welcome/Welcome";
import { Wrapper, Container } from "./Landing.styled";
import AdvertsList from "../Adverts/AdvertsList";
import NavBar from "../NavBar/NavBar";
import Cookie from "../Cookie/Cookie";
import UserAdverts from "../Adverts/UserAdverts/UserAdverts";

const Landing = () => {
    const user = useSelector((state) => state.user);
    const userRole = user.role;
    return (
        <>
        <Container>
            <NavBar/>
            <Wrapper>
                <Welcome/>
                    {userRole === "Mentor"
                    ?<UserAdverts/>
                    :<></>
                    }
                <AdvertsList/>
            </Wrapper>
            <Cookie/>
        </Container>

        </>
    );
};

export default Landing;