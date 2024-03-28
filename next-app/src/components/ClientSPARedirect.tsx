'use client';

import {useEffect} from "react";
import Cookies from "universal-cookie";

/**
 * This component is used to redirect to the SPA, using the "link" path to bypass the vercel rewrites
 */
const ClientSPARedirect = () => {

  useEffect(() => {
    const urlWithoutOrigin = window.location.href.replace(window.location.origin, "");

    const cookies = new Cookies(null, {
      path: '/',
      domain: window.location.hostname.replace(/.*?(?=\..*?\..*)/, ''),
      // set expiry to be 1yr
      maxAge: 60 * 60 * 24 * 365,
    });

    cookies.set('visited', '1');

    window.location.href = `${process.env.NEXT_PUBLIC_SPA_URL}/link?url=${urlWithoutOrigin}`
  }, []);

  return null;
};

export default ClientSPARedirect;