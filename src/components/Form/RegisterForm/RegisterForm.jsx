import { useFormik } from "formik";
import { toast } from "react-toastify";

import { useRegisterMutation } from "../../../redux/slices/mentorsboardApi";
import validationSchema from "../../../schemas/formValidation";

import { Button } from "../../Buttons/Button.styled"
import { Form, TextInput, RadioInput, RadioInputLabel, RadioMarker } from "../Form.styled";

const RegisterForm = ({setIsOpen}) => {
    const [register] = useRegisterMutation();

    const { handleSubmit, values, handleChange, resetForm, errors, touched } =
        useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            role: "",
        },
        validationSchema: validationSchema,
        onSubmit:
            async (values) => {
            await register(values)
                .unwrap()
                .then((id) => {
                    resetForm(id);
                    setIsOpen(false);
                    toast.success("Now you can use your credentials to login");
                })
                .catch((error) => {
                    toast.warn(error && `User with ${values.email} already exists`);
                });
            },
        });

    return (
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

            <RadioInput
                name="role"
                defaultValue="Student"
                value={values.role}
                onChange={handleChange}
                row={true}
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
            <Button type="submit">
                Submit
            </Button>
    </Form>
    );
};

export default RegisterForm;