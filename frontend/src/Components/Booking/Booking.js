import React, { useState } from 'react'
import { createAppointment } from '../../JS/actions/appointment'
import { useDispatch} from "react-redux";
import './booking.css'
const hour = ["09","10","11","12","13","14","15","16","17"]

const Booking = ({id,handleClose}) => {
    const dispatch = useDispatch()
    const [booking,setBooking] = useState({
        subject : '',
        description : '',
        day : '',
        hour : ''
    })

    const handleSave = event => {
        event.preventDefault()
        dispatch(createAppointment(id,booking))
        handleClose()
    }
  return (
    <div className='booking'>
        <div className="container booking--content">
            <div className="row booking--row">
                <div className="col col-12 booking--col">
                    <div className="booking--form">
                        <h3>Book an appoitnment</h3>
                        <form onSubmit={handleSave}>
                        <input onChange={e => setBooking({...booking,subject : e.target.value})} name="subject" placeholder='Subject' type="text" className='form-control mb-3' />                        <div className="booking-date">
                        <input onChange={e => setBooking({...booking,day : e.target.value})} name="day" type="date" className='form-control mb-3 select--day' />
                        <select onChange={e => setBooking({...booking,hour : e.target.value})} name="booking--hour" id="hour" className='form-control select---hour mb-3'>
                            {hour.map(hour => (
                                <option value={hour}>{hour}:00</option>
                            ))}
                        </select>
                        </div>
                        <textarea onChange={e => setBooking({...booking,description : e.target.value})} placeholder='description' name="description" id="description" cols="30" rows="5" className='form-control mb-3' />
                        <button className='btn booking--btn'>Booking</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Booking