import { useState } from "react";
import FormInput from "../components/FormInput";

const inputs = [
  {
    id: 1,
    label: "Name",
    type: "text",
    name: "name",
    required: true,
    placeholder: "Enter the name",
    pattern: "^[A-Za-z\\s'-]+$",
    errorMessage: "Entered name is incorrect. Please fix and try again.",
  },
  {
    id: 2,
    label: "Email",
    type: "email",
    name: "email",
    required: true,
    placeholder: "Enter the email",
    patters: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
    errorMessage: "Email is invalid. Please enter a valid email.",
  },
  {
    id: 3,
    label: "Password",
    type: "password",
    name: "password",
    required: true,
    placeholder: "Enter the password",
    pattern: "^(?=.*[A-Z])(?=.*[a-z])(?=.*[^ws]).{7}$",
    errorMessage:
      "Password must be 7 characters with atleast one uppercase, lowercase and special character.",
  },
];

const Form = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [isFormValid, setIsFormValid] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <main className="container mx-auto flex justify-center">
      <form onSubmit={submitForm} className="w-[50%]">
        <h1>This is heading of the form</h1>
        <h3>This is the subheading</h3>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} changeHandler={changeHandler} />
        ))}
        <button
          disabled={!isFormValid}
          className="block ml-auto px-8 py-3 text-sm border border-white rounded hover:bg-white disabled:bg-black hover:text-black disabled:text-white transition duration-300 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default Form;
