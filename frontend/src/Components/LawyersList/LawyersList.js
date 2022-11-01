import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProfiles } from '../../JS/actions/profile'
import LawyerCard from '../LawyerCard/LawyerCard'
import './lawyerslist.css'

const specialty = ["bankruptcy","business","civil Rights","criminal Law","immigration","family"]

const LawyersList = () => {
  const [value, setValue] = useState("all")
  const [query,setQuery] = useState(" ")
  const [input,setInput] = useState("")
  const Profiles = useSelector(state => state.profile.Profiles)

  const dispatch = useDispatch()

  useEffect(() => { 
      dispatch(getAllProfiles())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className='lawyer--page'>
    <div className="filter--lawyers">
      <form className='lawyer--form' onSubmit={e=>e.preventDefault()}>
        <select className='form-select form-select-lg' onChange={e => {setValue(e.target.value)}} name="select-lawyer" id="select-lawyer">
          <option defaultValue>all</option>
            {specialty.map((s,i) => (
              <option key={i}  value={s}>{s}</option>
            ))}
        </select>
        <div className="form--search">
          <input placeholder='Search by name...' onChange={e => {setInput(e.target.value)}} type="text" className='form-control form-control-lg' />
          <button onClick={()=> setQuery(input)} className='btn btn-sm btn-primary'>Search</button>
        </div>
      </form>
    </div>
    <div className='lawyers--list'>
      {Profiles.map(profile => <LawyerCard key={profile._id} profile={profile} />)}
    </div>
    </div>
  )
}

export default LawyersList