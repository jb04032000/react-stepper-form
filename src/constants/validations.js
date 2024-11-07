import * as Yup from "yup";

export const firstStepValidations = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  companyName: Yup.string().required("Company Name is required"),
  companyWebsite: Yup.string()
    .url("Invalid URL")
    .required("Company Website is required"),
  state: Yup.string().required("state is required"),
  zipCode: Yup.string()
    .matches(/^\d{6}$/, "Invalid Zip Code")
    .required("Zip Code is required"),
});

export const stepTwoValidationSchema = Yup.object().shape({
  companyField: Yup.array()
    .min(1, "At least one field is required")
    .required("Please select at least one field of work"),
  employeeCount: Yup.string().required("Please select the number of employees"),
  wfhPolicy: Yup.string().required(
    "Please select if your company has a WFH policy"
  ),
});

export const stepThreeValidationSchema = Yup.object().shape({
  startDate: Yup.date().required("Start Plan Date is required"),
  planType: Yup.string().required("Please select a plan type (monthly/yearly)"),
  planOption: Yup.string().required(
    "Please select a plan option (gold/titanium)"
  ),
  numberOfUsers: Yup.number()
    .min(1, "Number of users must be at least 1")
    .required("Number of users is required"),
});
