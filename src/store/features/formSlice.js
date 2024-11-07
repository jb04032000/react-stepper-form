import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalInfo: {
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    companyWebsite: "",
    state: "",
    zipCode: "",
  },
  companyInfo: {
    companyField: [],
    employeeCount: "",
    wfhPolicy: "",
  },
  planSelection: {
    startDate: null,
    planType: "",
    planOption: "",
    numberOfUsers: 1,
    totalPrice: 0,
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setPersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    setCompanyInfo: (state, action) => {
      state.companyInfo = action.payload;
    },
    setPlanSelection: (state, action) => {
      state.planSelection = action.payload;
    },
  },
});

// Corrected selectors
export const selectPersonalInfo = (state) => state.form.personalInfo;
export const selectCompanyInfo = (state) => state.form.companyInfo;
export const selectPlanSelection = (state) => state.form.planSelection;

export const { setPersonalInfo, setCompanyInfo, setPlanSelection } =
  formSlice.actions;
export default formSlice.reducer;
