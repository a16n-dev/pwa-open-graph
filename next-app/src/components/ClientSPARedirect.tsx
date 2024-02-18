'use client';

import {useEffect} from "react";

/**
 * This component is used to redirect to the SPA, using the "link" path to bypass the vercel rewrites
 */
const ClientSPARedirect = () => {

  useEffect(() => {
    const urlWithoutOrigin = window.location.href.replace(window.location.origin, "")

    window.location.href = `${process.env.NEXT_PUBLIC_SPA_URL}/link?url=${urlWithoutOrigin}`
  }, []);

  return null;
};

export default ClientSPARedirect;