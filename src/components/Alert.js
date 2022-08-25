import React from "react";
import { useAppContext } from "../context/appContext";

const Alert = () => {
  const { alertType, alertText } = useAppContext();
  return (
    <div className={`alert alert-${alertType}`}>
      <h3>{alertText} </h3>
    </div>
  );
};

export default Alert;
