// MyForm.js
import React from "react";
import { useForm } from "./FormContext";

export const ContextApi = () => {
  const { state, dispatch } = useForm();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FORM_FIELD", field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission using state.formData
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={state.formData.username}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={state.formData.email}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={state.formData.password}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContextApi;
