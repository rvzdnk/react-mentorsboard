import React from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";

import { useCreateAdvertMutation } from "../../../redux/slices/mentorsboardApi";
import { advertLevel, advertTechnology } from "../../../utils/advertData";
// import { advertValidation } from "../../../schemas/advertValidation";

import { GrClose } from "react-icons/gr";
import { Wrapper, Modal, SelectInput, CloseButton, CloseButtonWrapper, FormWrapper, Paragraph, Form, SubmitButton } from "../Modal.styled";

import MenuItem from '@mui/material/MenuItem';
import Slider from "@mui/material/Slider";



export const NewAdvertModal = ({open, setNewAdvertIsOpen}) => {

    const [createAdvert] = useCreateAdvertMutation();


    const { handleSubmit, values, handleChange, resetForm, errors, touched } =
        useFormik({
        initialValues: {
            level: "",
            technology: "",
            price: "",
        },
        // validationSchema: advertValidation,
        onSubmit:  async (values) => {
        await createAdvert(values)
        .unwrap()
        .then(() => {
            toast.success("Success!");
            resetForm();
            setNewAdvertIsOpen(false);
        })
        .catch(() => {
            toast.warn("Please make sure all fields are filled in correctly.");
        });
    },
})

    return (
        <>
            <Wrapper>
                <Modal isOpen={open}>
                    <CloseButtonWrapper>
                        <CloseButton onClick={()=>setNewAdvertIsOpen(false)}>
                            <GrClose/>
                        </CloseButton>
                    </CloseButtonWrapper>
                    <FormWrapper>
                        <Paragraph> Create Advert </Paragraph>
                        <Form onSubmit={handleSubmit}>
                            <SelectInput
                                id="level"
                                name="level"
                                value={values.level}
                                onChange={handleChange}
                                error={touched.level && Boolean(errors.level)}
                                helpertext={touched.level && errors.level}
                            >
                                {advertLevel.map((level) => (
                                    <MenuItem
                                    key={level}
                                    value={level}
                                    >
                                    {level}
                                    </MenuItem>
                                ))}
                            </SelectInput>
                            <SelectInput
                                id="technology"
                                name="technology"
                                value={values.technology}
                                onChange={handleChange}
                                error={touched.technology && Boolean(errors.technology)}
                                helpertext={touched.technology && errors.technology}
                            >
                                {advertTechnology.map((technology) => (
                                    <MenuItem
                                    key={technology}
                                    value={technology}
                                    >
                                    {technology}
                                    </MenuItem>
                                ))}
                            </SelectInput>
                            <Slider
                                id="price"
                                name="price"
                                value={values.price}
                                onChange={handleChange}
                                error={touched.price && Boolean(errors.price)}
                                helpertext={touched.price && errors.price}
                                defaultValue={0}
                                step={1}
                                min={1}
                                max={50}
                                marks
                                valueLabelDisplay="auto"
                                />
                            <SubmitButton type="submit">
                                Submit
                            </SubmitButton>
                        </Form>
                    </FormWrapper>
                </Modal>
            </Wrapper>
    </>
    )
};