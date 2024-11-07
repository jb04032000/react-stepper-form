# Getting Started with React Stepper Form App

This project is built with [Create React App](https://github.com/facebook/create-react-app) and demonstrates a multi-step form functionality with React. It utilizes popular libraries such as Ant Design, Redux Toolkit, Formik, and Yup provide a robust and flexible user experience.

### Live Demo

Check out the live version of the app [here](https://mmtreactstepperform.netlify.app/).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000] to view it in your browser.

### `npm run build`

Builds the app for production, outputting the optimized build to the `build` folder.\
React will run in production mode, optimizing the build for best performance.\
The build is minified, and filenames include hashes.

## Project Overview

The **React Stepper Form App** is a multi-step form application that guides users through different sections of input. Each step validates user input using Formik and Yup, ensuring only valid data is submitted. Ant Design’s `Steps` component is used for the stepper UI, creating a clean, user-friendly layout.

Redux Toolkit manages the app’s global state, making it easy to track data across form steps and manage shared states. Ajv is included for JSON schema validation, adding an extra layer for more complex data structures.

## Folder Structure

The project’s folder structure is organized for scalability:

- `components/`: Contains reusable components, such as the stepper form.
- `pages/`: Contains page level components, such as the stepper form.
- `features/`: Houses Redux slices, each representing a different app feature.
- `store/`: Configures the Redux store for centralized state management.

This structure keeps the codebase maintainable as the project grows.
