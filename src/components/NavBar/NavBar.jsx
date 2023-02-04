import RegistrationLink from "./MenuLinks/RegistrationLink/RegistrationLink";
import LoginLink from "./MenuLinks/LoginLink/LoginLink";
import Logo from "./Logo/Logo";
import {Container, MenuWrapper } from "./NavBar.styled";

const NavBar = () => {
    return(
        <Container>
            <Logo/>
            <MenuWrapper>
                <RegistrationLink />
                <LoginLink/>
            </MenuWrapper>
        </Container>

    );
};

export default NavBar;