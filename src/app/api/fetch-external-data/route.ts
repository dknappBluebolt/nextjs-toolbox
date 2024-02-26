/*
Route = GET "/api/fetch-external-data"
Notes
- Because this is a Route Handler (not a page), the App Router does not support NextResponse.next() to forward onto the next middleware.
    Handlers must always return a Response object

*/


//import type { NextApiRequest, NextApiResponse } from 'next'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import test from 'node:test';
// import requestIp from 'request-ip' // third party package for getting IP

/*
function getIpAddress(req: NextApiRequest) {
    const forwarded = req.headers["x-forwarded-for"]
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress
    return {
      props: {
        ip,
      },
    }
}
*/

// GET | POST | PUT | DELETE | etc.
export async function GET(  
    req: NextRequest,
    resp: NextResponse
    ) {
        // see this for geo information? https://stackoverflow.com/questions/68338838/how-to-get-the-ip-address-of-the-client-from-server-side-in-next-js-app

        //const forwarded = req.headers["x-forwarded-for"]
        
        // TODO: make this a dictionary with tostring join with \r\n delimiter
        // See https://nextjs.org/docs/app/api-reference/functions/next-request        
        var result = "";
        result += `req.nextUrl.pathname = ${req.nextUrl.pathname}\r\n`;
        result += `req.body = ${req.body}\r\n`;
        result += `req headers.X-Forwarded-For = "${req.headers.get('X-Forwarded-For')}"\r\n`;
        
        // these are "optionally provided by your hosting platform - Vercel sends these"
        result += `req.ip (hosting dependent)= ${req.ip}\r\n`;
        //result += `req.geo.country (hosting dependent)= ${req.geo.country}\r\n`;
        
        // cookies
        // TODO: Figure out how to set cookies with response here
        var testCookieName = "BBTestCookie";
        result += `${testCookieName} Value = "${req.cookies.get(testCookieName)?.value}"\r\n`;

        //let response = NextResponse.next();
        //response.cookies.set(testCookieName, "hello");
        //return response;
        //response.
        
        //return new Response("HEY - " + req.ip);
        return new Response(result);
    }