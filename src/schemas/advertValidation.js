import * as yup from "yup";

export const advertValidation = yup.object({
    level: yup
        .string("Select level")
        .required("Level is required"),
    technology: yup
        .string("Select technology")
        .required("Technology is required"),
    price: yup
        .number("Enter your pice")
        .moreThan(0, "Price must be higher than 0")
        .required("Price is required"),
});