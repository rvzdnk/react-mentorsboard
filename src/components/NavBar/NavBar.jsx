import React from "react";
import { useSelector } from "react-redux";

import Logo from "./Logo/Logo";
import { LoginUserMenu } from "./LoginUserMenu/LoginUserMenu";
import { StartUserMenu } from "./StartUserMenu/StartUserMenu";
import { Container } from "./NavBar.styled";


const NavBar = ({props}) => {
    const user = useSelector((state) => state.user);
    const isLoggedIn = user.email;

    return(
        <Container>
            <Logo/>
            {isLoggedIn
            ? <LoginUserMenu props={props}/>
            : <StartUserMenu/>
            }
        </Container>

    );
};

export default NavBar;