import React from "react";

import {GrClose} from "react-icons/gr";

import LoginForm from "../../Form/LoginForm/LoginForm";

import { Backdrop, Modal, Paragraph, Wrapper, CloseButtonWrapper, FormWrapper, Redirect, CloseButton } from "../Modal.styled";

import RegistrationLink from "../../NavBar/MenuLinks/RegistrationLink/RegistrationLink";


const LoginModal = ({setIsOpen}) => {
    return (
        <>
            <Backdrop>
                <Wrapper>
                    <Modal>
                        <CloseButtonWrapper>
                            <CloseButton onClick={() => setIsOpen(false)}>
                                <GrClose/>
                            </CloseButton>
                        </CloseButtonWrapper>
                        <FormWrapper>
                            <Paragraph> Log in</Paragraph>
                            <LoginForm/>
                        </FormWrapper>
                        <Redirect>
                            No account yet? 
                            <RegistrationLink>
                                Sign up
                            </RegistrationLink>
                        </Redirect>
                    </Modal>
                </Wrapper>
            </Backdrop>
        </>
    );
};

export default LoginModal;