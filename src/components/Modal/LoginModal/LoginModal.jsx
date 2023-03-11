import React from "react";
import { useDispatch } from "react-redux";

import { useFormik } from "formik";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

import {GrClose} from "react-icons/gr";

import { useLoginMutation } from "../../../redux/slices/mentorsboardApi";
import { addUser } from "../../../redux/slices/userSlice";
import { addToken } from "../../../redux/slices/tokenSlice";
import { loginSchema } from "../../../schemas/formValidation";

import { Backdrop, Modal, Paragraph, Wrapper, CloseButtonWrapper, FormWrapper, Redirect, CloseButton , Form, TextInput, SubmitButton} from "../Modal.styled";

import { Link } from "../../NavBar/NavBar.styled";

const LoginModal = ({open, setLoginIsOpen, setRegistrationIsOpen}) => {

    const switchRegistration = () => {
        setRegistrationIsOpen(true);
        setLoginIsOpen(false);
    };

    const [login] = useLoginMutation();
	const dispatch = useDispatch();

    const { handleSubmit, values, handleChange, resetForm, errors, touched } =
        useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit:  async (values) => {
        await login(values)
        .unwrap()
        .then(
            ({
                accessToken,
                userData: { email, id },
            }) => {
                Cookies.set("token", accessToken);
                if (accessToken) {
                    dispatch(addUser({ email, id }));
                    toast.success("Success!");
                }
            }
        )
        .catch(() => {
            toast.warn("Please check your email address or password");
        });

        const token = Cookies.get("token");
        if (token === undefined) {
            return;
        }

        dispatch(addToken(token));
        resetForm();
    },
});
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
                            <Paragraph> Log in </Paragraph>
                            <Form onSubmit={handleSubmit}>
                                <TextInput
                                    fullWidth
                                    variant="standard"
                                    margin="dense"
                                    id="email"
                                    name="email"
                                    label="Email"
                                    value={values.email}
                                    onChange={handleChange}
                                    error={touched.email && Boolean(errors.email)}
                                    helperText={touched.email && errors.email}
                                />
                                <TextInput
                                    fullWidth
                                    variant="standard"
                                    margin="dense"
                                    id="password"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    error={touched.password && Boolean(errors.password)}
                                    helperText={touched.password && errors.password}
                                />
                                <SubmitButton type="submit">
                                    Submit
                                </SubmitButton>
                            </Form>
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