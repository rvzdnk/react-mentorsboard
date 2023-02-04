import LoginBtn from "../Buttons/LoginBtn/LoginBtn";
import RegisterBtn from "../Buttons/RegisterBtn/RegisterBtn";
import {Container, LogoWrapper, Logo, LogoText, ButtonsWrapper } from "./NavBar.styled";

const NavBar = () => {
    return(
        <Container>
            <LogoWrapper>
                <Logo>
                    M
                </Logo>
                <LogoText>
                    entorsboard
                </LogoText>
            </LogoWrapper>
            <ButtonsWrapper>
                <RegisterBtn/>
                <LoginBtn/>
            </ButtonsWrapper>
        </Container>

    );
};

export default NavBar;