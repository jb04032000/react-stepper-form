import { Form, Formik } from "formik";
import { Button, message } from "antd";
import { useDispatch } from "react-redux";
import {
  setCompanyInfo,
  setPersonalInfo,
  setPlanSelection,
} from "../store/features/formSlice";

const UserDetailForm = ({
  steps,
  currentStep,
  handleNextStep,
  handlePreviousStep,
}) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={steps.initialValues}
      validationSchema={steps.validations}
      enableReinitialize
      onSubmit={(values) => {
        switch (currentStep) {
          case 0:
            dispatch(setPersonalInfo(values));
            break;
          case 1:
            dispatch(setCompanyInfo(values));
            break;
          case 2:
            dispatch(setPlanSelection(values));
            break;
          default:
            break;
        }
        if (currentStep === 2) {
          message.success("Form Submitted successfully!");
        } else {
          handleNextStep();
        }
      }}
    >
      {({ handleSubmit }) => (
        <Form>
          {steps.content}
          <div>
            {currentStep > 0 && (
              <Button
                style={{
                  margin: "10px 8px",
                }}
                onClick={handlePreviousStep}
              >
                Previous
              </Button>
            )}

            <Button type="primary" onClick={handleSubmit}>
              {currentStep === 2 ? "Done" : "Next"}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UserDetailForm;
