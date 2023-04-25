import React from "react";
import { useSelector } from "react-redux";

import { Wrapper, Container } from "./Landing.styled";


import Welcome from "./Welcome/Welcome";
import AdvertsList from "../Adverts/AdvertsList";
import NavBar from "../NavBar/NavBar";
import Cookie from "../Cookie/Cookie";
import UserAdverts from "../Adverts/UserAdverts/UserAdverts";
import Footer from "../Footer/Footer";

const Landing = () => {

    const isVisible = useSelector((store) => store.visibility.isVisible);

    return (
        <>
        <Container>
            <NavBar/>
            <Wrapper>
                <Welcome/>
                {isVisible &&
                    <UserAdverts/>
                }
                {!isVisible &&
                    <AdvertsList/>
                }
                <Footer/>
            </Wrapper>
            <Cookie/>
        </Container>
        </>
    );
};

export default Landing;