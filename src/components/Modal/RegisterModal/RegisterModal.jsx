import React from "react";

import RegisterForm from "../../Form/RegisterForm/RegisterForm";
import { Link } from "../../NavBar/NavBar.styled";
import { Backdrop, Modal, Paragraph, Wrapper, CloseButtonWrapper, FormWrapper, CloseButton, Redirect } from "../Modal.styled";

const RegisterModal = ({open, setLoginIsOpen, setRegistrationIsOpen }) => {

    const switchLogin = () => {
        setLoginIsOpen(true);
        setRegistrationIsOpen(false);
    }

    return (
        <>
            <Backdrop>
                <Wrapper>
                    <Modal isOpen={open}>
                        <CloseButtonWrapper>
                            <CloseButton onClick={(e)=>setRegistrationIsOpen(false)}>
                                X
                            </CloseButton>
                        </CloseButtonWrapper>
                        <FormWrapper>
                            <Paragraph> Sign up!</Paragraph>
                            <RegisterForm/>
                        </FormWrapper>
                        <Redirect>
                            No account yet?
                            <Link onClick={switchLogin}>
                                Log in!
                            </Link>
                        </Redirect>
                    </Modal>
                </Wrapper>
            </Backdrop>
        </>
    );
};

export default RegisterModal;