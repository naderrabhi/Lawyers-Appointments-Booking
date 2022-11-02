import React from 'react';
import { useSelector}  from 'react-redux'
import Alert from 'react-bootstrap/Alert';
import './alerts.css'

const Alerts = () => {
const alerts = useSelector(state => state.alert);
//console.log(alerts)
  return(alerts && alerts.map((alert) => (
    <Alert className='alert' key={alert.id} variant={alert.msg.variant} >
      {alert.msg.msg}
    </Alert>
  )));

}

export default Alerts;