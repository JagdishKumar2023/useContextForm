// FormContext.js
import React, { createContext, useReducer, useContext } from "react";

// Define initial state
const initialState = {
  formData: {
    // Your form fields and their initial values
    // For example:
    username: "",
    email: "",
    password: "",
  },
};

// Create a context
const FormContext = createContext();

// Create a reducer function to handle state changes

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FORM_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
      };
    // Add more cases for different form actions if needed

    default:
      return state;
  }
};

// Create a provider component
export const ChartGpt = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

// Custom hook to access the form context
export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
};
