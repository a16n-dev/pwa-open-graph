'use client';

import {useEffect} from "react";
import Cookies from "universal-cookie";

/**
 * This component is used to redirect to the SPA, using the "link" path to bypass the vercel rewrites
 */
const ClientSPARedirect = () => {

  useEffect(() => {

    const cookies = new Cookies(null, {
      path: '/',
      domain: window.location.hostname.replace(/.*?(?=\..*?\..*)/, ''),
      maxAge: 60 * 60 * 24 * 365,
    });

    cookies.set('visited', '1');

    const targetUrl = window.location.href.replace(window.location.origin, process.env.NEXT_PUBLIC_SPA_URL!);

    window.location.href = targetUrl
  }, []);

  return null;
};

export default ClientSPARedirect;