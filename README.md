# Notes
- https://bb-next-js-demo.netlify.app


# TODO
- Geolocation Page
    - Get the IP address from the request, call maxmind, display location
- Do async server example calling an API
    - Add part of the page that is static - display timestamp
    - Add another part or the page that shows the querystring, IP address, Date timestamp. Does it need a loader.
- Research State Management - https://www.pronextjs.dev/tutorials/state-management/state-management-with-react-context/intro-to-state-management-with-next-js-app-router
- Look into Hydrating a page, Suspense boundary?
- Look into https://nextjs.org/docs/messages/react-hydration-error What is it how to replicate, how to fix
- TRY LAZY LOADING - https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading (next/dynamic)
- Can you confifure the terminal to not show all gets? 
- HOW TO LOG TERMINAL TO FILE?

## Lower Priority
- 

# DONE
- OK - Deploy to Netlify and get working
- https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations

# Troubleshooting
- If you get the hydration error, see ifd you're making a call to an async function but forgot the "await"