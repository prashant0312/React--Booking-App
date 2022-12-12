import React from 'react';
import "./footer.css";
import {FaInstagram, FaFacebookSquare, FaLinkedin} from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
        <div className="fLists">
            <ul className="fList">
                <li className="fListItemTitle">CONTACT</li>
                <li className="fListItem">24 HOURS A DAY</li>
                <li className="fListItem">
                    <a href="mailto:mhbooking@gmail.com" className="footer__link">mhbooking@gmail.com</a>
                </li>
                <li className="fListItem">+91 85858-01021</li>
            </ul>
            <ul className="fList Social">
                <li className="fListItemTitle">FOLLOWS US</li>
                <li className="fListItem">
                    <a className="social-list__link" href="https://www.linkedin.com/in/prashant-kale-ba29b7148/">
                        <FaLinkedin/>
                    </a>
                </li>
                <li className="fListItem">
                    <a className="social-list__link" href="https://www.instagram.com/prashant_kale0312/">
                        <FaInstagram/>
                    </a>
                </li>
                <li className="fListItem">
                    <a className="social-list__link" href="https://www.facebook.com/profile.php?id=100008829647826  ">
                        <FaFacebookSquare/>
                    </a>
                </li>
            </ul>
        </div>
        <div className="fText">Copyright © 2022 MHBooking.</div>
    </div>
);
}

export default Footer
