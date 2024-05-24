import React from 'react';
import './Footer.css';
import place_your_logo_here_doub from '../../images/place_your_logo_here_doub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 

function Footer() {
    return (
        <div className='main-footer'>
            <div className='footer-description'>
                <div className='discription'>
                    <img style={{ marginBottom: "30px" }} className='foter-logo' src={place_your_logo_here_doub} alt="Logo" />
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viver ra maecenas accumsan lacus vel facilisis.</div>
                </div>
                <div className='discription'>
                    <span style={{ lineHeight: "30px" }}>Main Road, Building Name, Country</span><br />
                    <span>info@companyname.com</span>
                </div>
            </div>
            <div className='footer-description'>
                <div className='discription'>Company Name 2020. All rights reserved.</div>
                <div className='social-icons'>
                    <FontAwesomeIcon icon={faInstagram} className='social' />
                    <FontAwesomeIcon icon={faLinkedin} className='social' />
                    <FontAwesomeIcon icon={faWhatsapp} className='social' />
                    <FontAwesomeIcon icon={faFacebook} className='social' />
                </div>
            </div>
        </div>
    );
}

export default Footer;
