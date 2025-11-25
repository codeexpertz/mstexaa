'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const PopupCookie = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowPopup(false);
  };

  if (!showPopup) {
    return null;
  }

  return (
    <div className="fixed bottom-0 w-full px-4 py-4 bg-forth text-secondary z-10 cursor-pointer flex justify-between items-center pl-2 font-poppins">
      <p>
        We use cookies to improve your experience on our site. By using our site, you consent to <Link className=' underline text-tirtry' href="/cookies">cookies</Link>
      </p>
      <button className='py-1 px-6 bg-tirtry rounded-full' onClick={handleAccept}>Accept</button>
    </div>
  );
};

export default PopupCookie;
