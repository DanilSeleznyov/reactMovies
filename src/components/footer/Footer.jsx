import React from 'react'
import { SiThemoviedatabase } from "react-icons/si";
import './footer.scss'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container footer__content">
        <div className="footer_logo logo">
        <SiThemoviedatabase size={42} className='logo__img'/>
          <Link to='/'> React Movies</Link>
        </div>
        <div className="footer__menus">
          <ul className="footer__menu">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>Contact Us</Link></li>
            <li><Link to='/'></Link>Term of services</li>
            <li><Link to='/'>About Us</Link></li>
          </ul>
          <ul className="footer__menu">
            <li><Link to='/'>Live</Link></li>
            <li><Link to='/'>FAQ</Link></li>
            <li><Link to='/'>Premium</Link></li>
            <li><Link to='/'>Privacy Policy</Link></li>
          </ul>
          <ul className="footer__menu">
            <li><Link to='/'>You must watch</Link></li>
            <li><Link to='/'>Recent release</Link></li>
            <li><Link to='/'>Top IMDB</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer