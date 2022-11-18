import React from "react";
import SignUp from "../Components/Sign/SignUpAsLawyer";

const Register = ({ action, title }) => {
  return (
    <>
      <SignUp action={action} title={title} />
    </>
  );
};

export default Register;
