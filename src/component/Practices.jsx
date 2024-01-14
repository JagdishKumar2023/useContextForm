import React, { useContext, useReducer } from "react";

const initialState = {
  FormData: {
    username: "",
    email: "",
    password: "",
  },
};

const FormContextBasic = createContext();

const PracticesFormReducer = (state,action) {
    switch(action.type) {
       case "UPDATE_FORM_FIELD":
        return {
            ...state,
            FormData: {
                ...state.FormData,
                [action.fieid]: action.value
            },
        } 
    }
}

export const ChartGpt = ({ children }) => {
  const [state, dispatch] = useReducer(PracticesFormReducer, initialState);

  return (
    <FormContextBasic.Provider value={{ state, dispatch }}>
      {children}
    </FormContextBasic.Provider>
  );
 
  export const useForm = () => {
     const context = useContext(FormContextBasic);
     if(!context) {
        throw new Error("useForm must be used within a formProvider")
     }
  }



};
