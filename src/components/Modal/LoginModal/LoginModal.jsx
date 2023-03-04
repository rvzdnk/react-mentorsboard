import React from "react";

import {GrClose} from "react-icons/gr";

import LoginForm from "../../Form/LoginForm/LoginForm";

import { Backdrop, Modal, Paragraph, Wrapper, CloseButtonWrapper, FormWrapper, Redirect, CloseButton } from "../Modal.styled";

import { Link } from "../../NavBar/NavBar.styled";

const LoginModal = ({open, setLoginIsOpen, setRegistrationIsOpen}) => {

    const switchRegistration = () => {
        setRegistrationIsOpen(true);
        setLoginIsOpen(false);
    };

    return (
        <>
            <Backdrop>
                <Wrapper>
                    <Modal isOpen={open}>
                        <CloseButtonWrapper>
                            <CloseButton onClick={()=>setLoginIsOpen(false)}>
                                <GrClose/>
                            </CloseButton>
                        </CloseButtonWrapper>
                        <FormWrapper>
                            <Paragraph> Log in</Paragraph>
                            <LoginForm/>
                        </FormWrapper>
                        <Redirect>
                            No account yet?
                            <Link onClick={switchRegistration}>
                                Sign up!
                            </Link>
                        </Redirect>
                    </Modal>
                </Wrapper>
            </Backdrop>
        </>
    );
};

export default LoginModal;