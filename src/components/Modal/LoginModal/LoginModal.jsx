import React from "react";

import LoginForm from "../../Form/LoginForm/LoginForm";

import { Backdrop, Modal, Paragraph, Wrapper, CloseButtonWrapper, FormWrapper } from "../Modal.styled";
import { CloseButton } from "../../Buttons/Button.styled";


const LoginModal = ({setIsOpen}) => {
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
                            <LoginForm/>
                        </FormWrapper>
                    </Modal>
                </Wrapper>
            </Backdrop>
        </>
    );
};

export default LoginModal;