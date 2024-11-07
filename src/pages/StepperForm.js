import { Steps } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";

import {
  firstStepValidations,
  stepThreeValidationSchema,
  stepTwoValidationSchema,
} from "../constants/validations";
import UserDetailForm from "../components/UserDetailForm";
import {
  selectCompanyInfo,
  selectPersonalInfo,
  selectPlanSelection,
} from "../store/features/formSlice";

const StepperForm = () => {
  const personalInfo = useSelector(selectPersonalInfo);
  const companyInfo = useSelector(selectCompanyInfo);
  const planSelection = useSelector(selectPlanSelection);

  const [currentStep, setCurrentStep] = useState(0);
  const [completedStep, setCompletedStep] = useState([]);

  const handleNextStep = () => {
    setCompletedStep([...completedStep, currentStep]);
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const steps = [
    {
      title: "Personal Information",
      content: <StepOne />,
      initialValues: personalInfo,
      validations: firstStepValidations,
    },
    {
      title: "Company Information",
      content: <StepTwo />,
      initialValues: companyInfo,
      validations: stepTwoValidationSchema,
    },
    {
      title: "Plan Selection",
      content: <StepThree />,
      initialValues: planSelection,
      validations: stepThreeValidationSchema,
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <div className="form_container">
      <Steps className="steps" current={currentStep} items={items} />
      <div className="form_steps">
        <UserDetailForm
          steps={steps[currentStep]}
          currentStep={currentStep}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      </div>
    </div>
  );
};

export default StepperForm;
