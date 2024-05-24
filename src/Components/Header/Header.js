import React from 'react'
import './Header.css'
import place_your_logo_here_doub from '../../images/place_your_logo_here_doub.png'
import place_your_image_here_dou_3 from '../../images/place_your_image_here_dou_3.png';
import subtitle from '../../images/subtitle.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className='main-head'>
            <div className='header'>
                <div>
                    <img className='logo' src={place_your_logo_here_doub}></img>
                </div>
                <div className='baricon'><FontAwesomeIcon icon={faBars} /></div>
                <div className='toll'>
                    <div>
                        <div className='express'>EXPRESS DELIVERY</div>
                        <div className='Number'>1800 258 888</div>
                    </div>
                    <ul className='Nav-links'>
                        <li><Link className='link' to="/page">Home</Link></li>
                        <li><Link className='link' to="/page">Menu</Link></li>
                        <li><Link  className='link' to="/page">Contact</Link></li>
                        <li><Link className='link' to="/page">Our Story</Link></li>
                        {/* <li>Home</li> */}
                    </ul>
                </div>
            </div>
            <div className='main-content-header'>
                <div className='text-header'>
                    <span className='hungry'>Are you hungry?</span>
                    <img className='dont-wait' src={subtitle} />
                    <span className='now'>LET START TO ORDER FOOD NOW</span>
                    <span className='happy'>Happy Hour 1+3</span>
                    <span className='order'>Order Now</span>
                </div>
                <div>
                    <img className='main-image' src={place_your_image_here_dou_3}></img>
                </div>
            </div>
        </div>
    )
}

export default Header