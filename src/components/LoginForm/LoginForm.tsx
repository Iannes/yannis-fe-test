import * as React from "react";
import { TextField } from "../TextField";
import "./LoginForm.css";

type FormValues = {
  name: string;
  email: string;
};
type LoginFormProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: FormValues;
  auth: any;
};

export const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  onChange,
  values,
  auth,
}) => {
  return (
    <div className="form-container">
      <div className="title-container">
        <h1>LOGIN</h1>
      </div>
      <form className="form" onSubmit={onSubmit}>
        <TextField
          disabled={false}
          type="text"
          name="name"
          onChange={onChange}
          value={values.name}
          required
          id="Name"
          variant="fullWidth"
        />
        <TextField
          disabled={false}
          type="text"
          name="email"
          onChange={onChange}
          value={values.email}
          required
          id="Email"
          variant="fullWidth"
        />
        <div className="text-field-container button-container">
          <button className="submit-button">Go</button>
        </div>
      </form>
      {auth?.error && (
        <p className="error">There was an error with your request</p>
      )}
    </div>
  );
};
