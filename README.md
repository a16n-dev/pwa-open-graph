# OG Tags for React SPAs on Vercel
This repository demos how to set up OG tags (including titles, descriptions, and images) for Single-Page Applications (SPAs) hosted on vercel.

This uses a bakery website as an example, with various products.
You can see it in action at [bakery.a16n.dev](bakery.16n.dev). 

You can see an example of the resulting OG data by pasting the URL `https://bakery.a16n.dev/product/croissant` into any site that supports open-graph previews

## Overview
At a top level this utilises a seperate Next.js project. A user's first request to the SPA site will be routed through 
the Next.js site instead, which will serve the open graph data.