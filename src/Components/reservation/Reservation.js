import React from 'react'
import title from '../../images/title.png'
import './Reservation.css'
function Reservation() {
  return (
    <div className='reservation-main'>
            <div className='discover-reservation'>RESERVATION</div>
            <div  className='Choose-Title'>
                <img className='title-image' src={title} alt="" />
            </div>
            <div className='form'>
                <div className='Row-form'>
                    <input className='input' type="text" placeholder='Name'></input>
                    <input className='input' type="text" placeholder='Name'></input>
                </div>
                <div className='Row-form'>
                    <input className='input' type="text" placeholder='Name'></input>
                    <input className='input' type="text" placeholder='Name'></input>
                </div>
                <div className='Row-form'>
                    <input className='input' type="text" placeholder='Name'></input>
                    <div className='Button-find'>FIND A TABLE</div>
                </div>
            </div>
    </div>
  )
}

export default Reservation