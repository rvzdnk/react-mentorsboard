import React, {useState} from "react";
import LoginModal from "../../Modal/LoginModal/LoginModal";
import RegisterModal from "../../Modal/RegisterModal/RegisterModal";
import { Link, MenuWrapper } from "../NavBar.styled";

export const StartUserMenu = () => {
    const [registrationIsOpen, setRegistrationIsOpen] = useState(false);
    const [loginIsOpen, setLoginIsOpen] = useState(false);

    const handleLogin = () => {setLoginIsOpen(true)};
    const handleRegistration = () => {setRegistrationIsOpen(true)};

    return(
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

    )
};

