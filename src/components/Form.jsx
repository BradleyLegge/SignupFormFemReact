import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className={`${"firstName" in errors && "inputError"}`}
        type="text"
        placeholder="First Name"
        {...register("firstName", { required: "First Name cannot be empty" })}
      />
      {errors.firstName && (
        <p className="errorMessage">{errors.firstName.message}</p>
      )}
      <input
        className={`${"lastName" in errors && "inputError"}`}
        type="text"
        placeholder="Last Name"
        {...register("lastName", { required: "Last Name cannot be empty" })}
      />
      {errors.lastName && (
        <p className="errorMessage">{errors.lastName.message}</p>
      )}
      <input
        className={`${"emailAddress" in errors && "inputError"}`}
        type="text"
        placeholder="Email Address"
        {...register("emailAddress", {
          required: "Looks like this is not an email",
        })}
      />
      {errors.emailAddress && (
        <p className="errorMessage">{errors.emailAddress.message}</p>
      )}
      <input
        className={`${"password" in errors && "inputError"}`}
        type="password"
        placeholder="Password"
        {...register("password", {
          required: "Password cannot be empty",
        })}
      />
      {errors.password && (
        <p className="errorMessage">{errors.password.message}</p>
      )}
      <button>Claim your free trial</button>
      <p className="terms">
        By clicking the button, you are agreeing to our{" "}
        <span>Terms and Services</span>
      </p>
    </form>
  );
};

export default Form;
