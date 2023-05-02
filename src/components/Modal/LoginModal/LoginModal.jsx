import React from "react";
import { useDispatch } from "react-redux";

import { useFormik } from "formik";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

import { AiOutlineClose } from "react-icons/ai";

import { useLoginMutation } from "../../../redux/slices/mentorsboardApi";
import { addUser } from "../../../redux/slices/userSlice";
import { addToken } from "../../../redux/slices/tokenSlice";
import { loginSchema } from "../../../schemas/formValidation";

import { Backdrop, Modal, Paragraph, Wrapper, CloseButtonWrapper, FormWrapper, Redirect, LinkRedirect, CloseButton , Form, TextInput, SubmitButton} from "../Modal.styled";
import AnimatedTextCharacter from "../../../utils/animatedTextCharacter";

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
                userData: { email, id, name, role },
            }) => {
                Cookies.set("token", accessToken);
                if (accessToken) {
                    dispatch(addUser({ email, id, name, role }));
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
                                <AiOutlineClose color="#FFF"/>
                            </CloseButton>
                        </CloseButtonWrapper>
                        <FormWrapper>
                            <Paragraph> 
                                <AnimatedTextCharacter>
                                    Log in 
                                </AnimatedTextCharacter>
                            </Paragraph>
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
                                    sx={{
                                        '& label.Mui-focused': {
                                            color: '#f8ff75',
                                        },
                                        '& .MuiInput-underline:after': {
                                            borderBottomColor:  '#f8ff75',
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#FFF',
                                            paddingLeft: "10px"
                                        },
                                        '& input': {
                                            color: '#f8ff75',
                                            border: "1px solid",
                                            borderColor: '#FFF'
                                        },
                                    }}
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
                                    sx={{
                                        '& label.Mui-focused': {
                                            color: '#f8ff75',
                                        },
                                        '& .MuiInput-underline:after': {
                                            borderBottomColor:  '#f8ff75',
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#FFF',
                                            paddingLeft: "10px"
                                        },
                                        '& input': {
                                            color: '#f8ff75',
                                            border: "1px solid",
                                            borderColor: '#FFF'
                                        },
                                    }}
                                />
                                <SubmitButton type="submit">
                                    Submit
                                </SubmitButton>
                            </Form>
                        </FormWrapper>
                        <Redirect>
                            No account yet?
                            <LinkRedirect onClick={switchRegistration} 
                                whileHover={{
                                    scale: 1.1,
                                    fontWeight: 700,
                                    }}>
                                Sign up!
                            </LinkRedirect>
                        </Redirect>
                    </Modal>
                </Wrapper>
            </Backdrop>
        </>
    );
};

export default LoginModal;