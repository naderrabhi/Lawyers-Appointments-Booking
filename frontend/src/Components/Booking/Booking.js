import React from 'react'
import './booking.css'
const hour = ["09","10","11","12","13","14","15","16","17"]

const Booking = () => {
  return (
    <div className='booking'>
        <div className="container booking--content">
            <div className="row booking--row">
                <div className="col col-12 booking--col">
                    <div className="booking--form">
                        <h3>Book an appoitnment</h3>
                        <form>
                        <input name="name" placeholder='Full name' type="text" className='form-control mb-3' />
                        <input name="email" placeholder='Email' type="email" className='form-control mb-3' />
                        <div className="booking-date">
                            <input name="day" type="date" className='form-control mb-3 select--day' />
                            <select name="booking--hour" id="hour" className='form-control select---hour mb-3'>
                                {hour.map(hour => (
                                    <option value={hour}>{hour}:00</option>
                                ))}
                            </select>
                        </div>
                        <textarea placeholder='description' name="description" id="description" cols="30" rows="5" className='form-control mb-3' />
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