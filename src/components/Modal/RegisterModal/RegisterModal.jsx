import React from "react";

import RegisterForm from "../../Form/RegisterForm/RegisterForm";

import { Backdrop, Modal, Paragraph, Wrapper, CloseButtonWrapper, FormWrapper } from "../Modal.styled";
import { CloseButton } from "../../Buttons/Button.styled";


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
                    </Modal>
                </Wrapper>
            </Backdrop>
        </>
    );
};

export default RegisterModal;