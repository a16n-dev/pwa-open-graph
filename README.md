# OG Tags for React SPAs on Vercel
This repository demos how to set up OG tags (including titles, descriptions, and images) for Single-Page Applications (SPAs) hosted on vercel.

This uses a bakery website as an example, with various products.
You can see it in action at [bakery.a16n.dev](https://bakery.a16n.dev). 

You can see an example of the resulting OG data by pasting the URL `https://bakery.a16n.dev/product/croissant` into any site that supports open-graph previews

Before:

<img width="553" alt="image" src="https://github.com/a16n-dev/pwa-open-graph/assets/39721828/edb80c44-b4a0-4e24-ac06-1fc99594dc45">

After:

<img width="553" alt="image" src="https://github.com/a16n-dev/pwa-open-graph/assets/39721828/59a4ce68-4eea-44b6-94e7-c8fa0fe2e464">


## Overview
At a top level this utilises a seperate Next.js project. A user's first request to the SPA site will be routed through 
the Next.js site instead, which will serve the open graph data.
