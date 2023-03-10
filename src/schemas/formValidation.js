import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// min 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit

const registrationSchema = yup.object({
    name: yup
        .string("Enter your name")
        .min(2, "Name should be at least 2 letters")
        .required("Name is required"),
    email: yup
        .string("Enter your email")
        .email("Please enter a valid email")
        .required("Email is required"),
    password: yup
        .string("Enter your password")
        .min(8, "Password should be at least 8 characters")
        .matches(passwordRules, { message: "Please create a stronger password" })
        .required("Password is required"),
});

const loginSchema = yup.object({
    email: yup
        .string("Enter your email")
        .email("Please enter a valid email")
        .required("Email is required"),
    password: yup
        .string("Enter your password")
        .min(8, "Password should be at least 8 characters")
        .matches(passwordRules, { message: "Password neeeds min. 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit" })
        .required("Password is required"),
});

export {registrationSchema, loginSchema}