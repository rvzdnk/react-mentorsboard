import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

import { useLoginMutation } from "../../../redux/slices/mentorsboardApi";
import validationSchema from "../../../schemas/formValidation";
import { addToken } from "../../../redux/slices/tokenSlice";
import { addUser } from "../../../redux/slices/userSlice";

import { Button } from "../../Buttons/Button.styled"
import { Form, TextInput } from "../Form.styled";

const LoginForm = ({setIsOpen}) => {
    const [login] = useLoginMutation();
    const navigate = useNavigate();
	const dispatch = useDispatch();

    const { handleSubmit, values, handleChange, resetForm, errors, touched } =
        useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: 
            async (values) => {
                await login(values)
                    .unwrap()
                    .then(
                        ({
                            accessToken,
                            userData: { email, id, adverts },
                        }) => {
                            Cookies.set("token", accessToken);
                            if (accessToken) {
                                dispatch(addUser({ email, id, adverts }));
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
                navigate("/");
                resetForm();
            },
        });

    return (
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
                onChange={handleChange}error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
            />
            <Button type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default LoginForm;