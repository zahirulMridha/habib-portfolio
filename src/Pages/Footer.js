import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'



const Footer = () => {
    return (
        <div>
            <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <div class="grid grid-flow-col gap-4">
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div>
                    <div class="grid grid-flow-col gap-6 text-3xl">

                        <a href='https://www.facebook.com/Abdur.Rahman.Habib99' className='hover:text-orange-600'><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href='https://twitter.com/ArHabib255' className='hover:text-orange-600'><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href='https://www.linkedin.com/in/habib255/' className='hover:text-orange-600'><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href='https://wa.me/8801813032931' className='hover:text-orange-600'><FontAwesomeIcon icon={faWhatsapp} /></a>
                    </div>
                </div>
                <div>
                    <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;