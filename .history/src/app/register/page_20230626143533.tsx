import React from "react";

interface RegisterModal {
  setShowRegisterModal: (value: boolean) => void;
}

const Register = ({ setShowRegisterModal }: RegisterModal) => {
  return <div className="registerModal z-[200]">Test register</div>;
};

export default Register;
