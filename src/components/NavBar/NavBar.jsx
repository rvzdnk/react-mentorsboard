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
        <Container whileHover={{
            borderColor: [
                "rgb(199, 210, 254)",
                "rgb(254, 202, 202)",
                "rgb(254, 249, 195)",
                "rgb(254, 249, 195)",
                "rgb(254, 249, 220)",
                "rgb(255,255,255)"]
         }}>
            <Logo/>
            {isLoggedIn
            ? <LoginUserMenu props={props}/>
            : <StartUserMenu/>
            }
        </Container>

    );
};

export default NavBar;