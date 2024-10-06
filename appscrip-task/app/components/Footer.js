import React from 'react'
import { useState } from 'react';

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer>
      <div className="footerContainer">
        <div className="upper">
          <div className="first">
            <h3>BE THE FIRST TO KNOW</h3>
            <h4>Sign up for updates from mettā muse.</h4>
            <div className="input">
              <input type="text" placeholder='Enter your e-mail...' />
              <button>SUBSCRIBE</button>
            </div>
          </div>
          <div className="border1 border"></div>
          <div className="second">
            <h3 className='contactUs'>CONTACT US</h3>
            <div className="contact">

              <h5>+44 221 133 5360</h5>.<h5>customercare@mettamuse.com</h5>
            </div>
            <div className="border1 border"></div>
            <h3 className='currency'>CURRENCY</h3>
            <div className='usd'>
              <img src="/map.svg" alt="map" />. USD
            </div>
            <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
          </div>
        </div>

        <div className="border"></div>

        <div className="lower">

          <div className="lowerFirst">
            <div className="left">
              <div onClick={() => toggleSection("metta")} className="metta option ">
                <h3>mettā muse</h3>
                <img src="/downarrow.svg" alt="Down arrow" />
              </div>
              <div className={openSection === "metta" ? "" : "allhide"}>
                <h4>About Us</h4>
                <h4>Stories</h4>
                <h4>Artisans</h4>
                <h4>Boutiques</h4>
                <h4>Contact Us</h4>
              </div>
            </div>

            <div className="border1 border"></div>

            <div className="lowerRight">
              <div onClick={() => toggleSection("quickLinks")} className="quickLinks option">

                <h3>QUICK LINKS</h3>
                <img src="/downarrow.svg" alt="Down arrow" />
              </div>
              <div className={openSection === "quickLinks" ? "" : "allhide"}>

                <h4>Orders & Shipping</h4>
                <h4>Join/Login as a Seller</h4>
                <h4>Payment & Pricing</h4>
                <h4>Return & Refunds</h4>
                <h4>FAQs</h4>
                <h4>Privacy Policy</h4>
                <h4>Terms & Conditions</h4>

              </div>
            </div>

            <div className="border1 border"></div>

          </div>
          <div className="second">
            <div className="follow">
              <div onClick={() => toggleSection("followUs")} className="followUs option">
                <h3>FOLLOW US</h3>
                <img src="/downarrow.svg" alt="Down arrow" />
              </div>
              <div className={openSection === "followUs" ? "" : "allhide"}>

                <img className='insta' src="/insta.svg" alt="Instagram" />
                <img className='linkdin' src="/linkdin.svg" alt="Linkdin" />
              </div>
            </div>

            <div className="border1 border"></div>

            <div className="payments">
              <h3>mettā muse Accepts</h3>
              <img src="/google.svg" alt="google" />
              <img src="/mastercard.svg" alt="mastercard" />
              <img src="/paypal.svg" alt="paypal" />
              <img src="/amex.svg" alt="amex" />
              <img src="/apple.svg" alt="apple" />
              <img src="/dpay.svg" alt="dpay" />
            </div>
          </div>
        </div>
        <div className="copyright">
          Copyright © 2023 mettamuse. All rights reserved.
        </div>
      </div>
    </footer>

  )
}

export default Footer

