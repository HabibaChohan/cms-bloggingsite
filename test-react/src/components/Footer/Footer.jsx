import React from 'react';
import './Footer.css';

import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'


const Footer = ()=> {
  return (
   <footer>

    <div className='footer-social'>
      <a href=""><BsFacebook /></a>
      <a href=""><BsLinkedin /></a>
      <a href=""><BsGithub /></a>
      <a href=""><BsTwitter /></a>
    </div>

    <div className='container footer-container'>

      <div>
      <h3>Amazon Associates Disclaimer</h3>
      <p>GrillHub is a participant in the Amazon Associates Program. As an Amazon Associate, We may earn from qualifying purchases.    
      </p>
      </div>

      <div>
      <h3>Navigation</h3>
      <p>    
      </p>
      </div>

      <div>
      <h3>Get in touch</h3>
      <p>    
      </p>
      </div>

    </div>
   </footer>

        


    );
}

export default Footer; 