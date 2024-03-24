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
  console.log(formData);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="container mx-auto flex justify-center">
      <form className="w-[50%]">
        <h1>This is heading of the form</h1>
        <h3>This is the subheading</h3>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} changeHandler={changeHandler} />
        ))}
      </form>
    </main>
  );
};

export default Form;
