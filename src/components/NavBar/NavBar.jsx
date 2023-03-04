import React, {useState} from "react";
import LoginModal from "../Modal/LoginModal/LoginModal";
import RegisterModal from "../Modal/RegisterModal/RegisterModal";
import Logo from "./Logo/Logo";
import {Container, MenuWrapper } from "./NavBar.styled";
import { Link } from "./NavBar.styled";

const NavBar = () => {
    const [registrationIsOpen, setRegistrationIsOpen] = useState(false);
    const [loginIsOpen, setLoginIsOpen] = useState(false);

    const handleLogin = () => {setLoginIsOpen(true)};
    const handleRegistration = () => {setRegistrationIsOpen(true)};

    return(
        <Container>
            <Logo/>
            <MenuWrapper>
                <Link onClick={handleRegistration}>
                    Sign up
                </Link>
                {registrationIsOpen && <RegisterModal open={registrationIsOpen} setLoginIsOpen={setLoginIsOpen} setRegistrationIsOpen={setRegistrationIsOpen}/>}
                <Link onClick={handleLogin}>
                    Log in
                </Link>
                {loginIsOpen && <LoginModal open={loginIsOpen} setLoginIsOpen={setLoginIsOpen} setRegistrationIsOpen={setRegistrationIsOpen}/>}
            </MenuWrapper>
        </Container>

    );
};

export default NavBar;