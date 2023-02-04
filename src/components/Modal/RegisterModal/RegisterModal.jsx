import React from "react";

import RegisterForm from "../../Form/RegisterForm/RegisterForm";
import LoginLink from "../../NavBar/MenuLinks/LoginLink/LoginLink";
import { Backdrop, Modal, Paragraph, Wrapper, CloseButtonWrapper, FormWrapper, CloseButton, Redirect } from "../Modal.styled";

const RegisterModal = ({setIsOpen}) => {
    return (
        <>
            <Backdrop>
                <Wrapper>
                    <Modal>
                        <CloseButtonWrapper>
                            <CloseButton onClick={() => setIsOpen(false)}>
                                X
                            </CloseButton>
                        </CloseButtonWrapper>
                        <FormWrapper>
                            <Paragraph> Sign up!</Paragraph>
                            <RegisterForm/>
                        </FormWrapper>
                        <Redirect>
                            No account yet?
                            <LoginLink>
                                Log in
                            </LoginLink>
                        </Redirect>
                    </Modal>
                </Wrapper>
            </Backdrop>
        </>
    );
};

export default RegisterModal;