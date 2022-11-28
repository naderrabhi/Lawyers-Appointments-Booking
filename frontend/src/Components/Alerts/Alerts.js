import React from "react";
import { useSelector } from "react-redux";
import Alert from "react-bootstrap/Alert";

import "./alerts.css";

const Alerts = () => {
  const alerts = useSelector((state) => state.alert);

  return (
    alerts &&
    alerts.map((alert) => (
      <Alert style={{position : "absolute",marginTop : "14vh",textAlign:'center'}} key={alert.id} variant={alert.msg.variant}>
        {alert.msg}
      </Alert>
    ))
  );
};

export default Alerts;
