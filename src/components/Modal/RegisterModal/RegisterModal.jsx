import React from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { AiOutlineClose } from "react-icons/ai";

import { useRegisterMutation } from "../../../redux/slices/mentorsboardApi";
import { registrationSchema } from "../../../schemas/formValidation";

import { Backdrop, Modal, Paragraph, Wrapper, CloseButtonWrapper, FormWrapper, CloseButton, Redirect, LinkRedirect, Form, TextInput, RadioInput, RadioInputLabel, RadioMarker, SubmitButton  } from "../Modal.styled";

const RegisterModal = ({open, setLoginIsOpen, setRegistrationIsOpen }) => {

    const switchLogin = () => {
        setLoginIsOpen(true);
        setRegistrationIsOpen(false);
    };

    const [register] = useRegisterMutation();

    const { handleSubmit, values, handleChange, resetForm, errors, touched } =
        useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            role: "",
        },
        validationSchema: registrationSchema,
        onSubmit:
            async (values) => {
            await register(values)
                .unwrap()
                .then((id) => {
                    resetForm(id);
                    switchLogin();
                    toast.success("Now you can use your credentials to login");
                })
                .catch((error) => {
                    toast.warn(error && `User with ${values.email} already exists`);
                });
            },
        });

    return (
        <>
            <Backdrop>
                <Wrapper>
                    <Modal isOpen={open}>
                        <CloseButtonWrapper>
                            <CloseButton onClick={()=>setRegistrationIsOpen(false)}>
                                <AiOutlineClose color="#FFF"/>
                            </CloseButton>
                        </CloseButtonWrapper>
                        <FormWrapper>
                            <Paragraph> Sign up!</Paragraph>
                            <Form onSubmit={handleSubmit}>
                                <TextInput
                                    fullWidth
                                    variant="standard"
                                    margin="dense"
                                    id="name"
                                    name="name"
                                    label="Name"
                                    value={values.name}
                                    onChange={handleChange}
                                    error={touched.name && Boolean(errors.name)}
                                    helperText={touched.name && errors.name}
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
                                <RadioInput
                                    name="role"
                                    defaultValue="Student"
                                    value={values.role}
                                    onChange={handleChange}
                                    row={true}
                                    sx={{
                                        '& span': {
                                            color: '#fff',
                                        },
                                    }}
                                >
                                    <RadioInputLabel
                                        value="Student"
                                        label="Student"
                                        control={<RadioMarker />}
                                    />
                                    <RadioInputLabel
                                        value="Mentor"
                                        label="Mentor"
                                        control={<RadioMarker />}
                                    />
                                </RadioInput>
                                <SubmitButton type="submit">
                                    Submit
                                </SubmitButton>
                             </Form>
                        </FormWrapper>
                        <Redirect>
                            No account yet?
                            <LinkRedirect onClick={switchLogin}
                                whileHover={{
                                    scale: 1.1,
                                    fontWeight: 700,
                                    }}>
                                Log in!
                            </LinkRedirect>
                        </Redirect>
                    </Modal>
                </Wrapper>
            </Backdrop>
        </>
    );
};

export default RegisterModal;