import type { NextRequest } from 'next/server'

export async function GET(  
    req: NextRequest,
    ) {
      if (!req.nextUrl.searchParams.get('isbn')) {
        return new Response("ERROR: URL must contain the isbn parameter");
      }

      var isbn = req.nextUrl.searchParams.get('isbn');
      var url = `https://www.goodreads.com/book/isbn/${isbn}?key=L9FJBdxft9vIqzNM5KWHg&format=xml`;
      const res = await fetch(
        url, 
        {
            method: 'GET', 
        });

    if (!res.ok) {
        return new Response(`Error retrieving location: res.status = "${res.status}", res.statusText = "${res.statusText}""`);
      };

    var data = await res.text();
    return new Response(data, { 
        headers: { 
        "Content-Type": "text/xml",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET"        
      }
    });
}