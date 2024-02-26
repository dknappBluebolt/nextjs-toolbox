import LocationUtil from '../../_lib/LocationUtil';
import dynamic2 from 'next/dynamic'
import Image from 'next/image'
/*
URL = "/geolocation"

# Notes
- 

# TODO:
- Figure out how to get the IP Address from HTTP Request to call Maxmind
*/

// Route Segment Config
// See https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
// ****** Set force-dynamic here to disable the static site generation because we have dynamic logic!!!! *******
export const dynamic = 'force-dynamic'           // 'auto' | 'force-dynamic' | 'error' | 'force-static'
export const dynamicParams = true
export const revalidate = false                 // false | 0 | number - seconds to invalidate the fache?
//export const maxDuration = 5                    // max duration of server-side logic (default is no limit)

async function getData() {
  //var url = "https://www.boredapi.com/api/activity";
  
  // NOTE: By default, fetch responses are cached!
  //const res = await fetch(url); // This is cached
  //const res = await fetch(url, { cache: 'no-store'}) // This is NOT cached
  var url = "https://dog.ceo/api/breeds/image/random";
  const res = await fetch(url, { next: { revalidate: 5 }}) // This is cached for 5 seconds

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  
  if (!res.ok) {
    // TODO: This doesn't show an error page
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  
  return res.json()
}

/*
const DynamicComponent = dynamic2(() => import('../../components/simple.tsx'), {
  loading: () => <p>Loading Simple Component...</p>,
})
*/

export default async function Geolocation() {
    const data = await getData();
    //const ipAddress = LocationUtil.getIpAddress();
    const ipAddress = "";
    //console.log('ip address - ' + ipAddress);

    return (
      <main className="flex min-h-screen flex-col items-center p-24">
          <h1 style={{fontWeight: "bold", color: "green", fontSize: "24px"}}>Geolocation Test Results</h1>
          <div>
            <ul>
              <li>dynamic = "{dynamic}"</li>
              {/*
              <li>activity = "{data.activity}"</li>
              <li>type = "{data.social}"</li>
              */}
              <li>timestamp = "{Math.floor(Date.now() / 1000)}"</li>
              <li>IP Address = "{LocationUtil.getIpAddress()}"</li>              
              {/*
              <li>doSomethingAsync = "{await LocationUtil.doSomethingAsync(2000)}"</li>              
              <li>Test = "{LocationUtil.getLocation("weg")}"</li>
              <li>Test = "{"HI"}"</li>              
              */}
              <li className="highlight">Location: {await LocationUtil.getLocation()}</li>
              <li>API Result = "{data.message}"</li>
              <li>
                <Image
                    src={data.message}
                    width={200}
                    height={200}
                    alt="Picture of the author!!!"
                  />
              </li>
            </ul>            
          </div>
      </main>
    );
  }
  