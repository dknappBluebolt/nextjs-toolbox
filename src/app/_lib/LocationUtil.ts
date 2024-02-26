import { headers } from 'next/headers'
var base64 = require('base-64'); // npm package "base-64"
import { WebServiceClient } from '@maxmind/geoip2-node';

export default class LocationUtil {

    constructor() {
    }

    static delay(numMilliseconds: number) {
        return new Promise(resolve => setTimeout(resolve, numMilliseconds));
      }

    static getIpAddress() {
        const FALLBACK_IP_ADDRESS = '0.0.0.0'
        const forwardedFor = headers().get('x-forwarded-for')
       
        if (forwardedFor) {
          return forwardedFor.split(',')[0] ?? FALLBACK_IP_ADDRESS
        }
       
        return headers().get('x-real-ip') ?? FALLBACK_IP_ADDRESS
      }
      
    static async doSomethingAsync(numMilliseconds: number) {
        console.log("*** Starting doSomethingAsync ***");
        await this.delay(2000); // wait 2 sec
        console.log("*** doSomethingAsync Done ***");
        return "Something after 2 seconds";
    }

    // *** getLocation ***
    static async getLocation() {
        var useTestIpAddressOnLocal = true;
        var testIpAddress = "206.225.72.124";
        var ipAddress = this.getIpAddress();
        if (ipAddress == "::1") {
            if (useTestIpAddressOnLocal) {
                ipAddress = testIpAddress;
            } else {
                return "!!!Geolocation doesn't work on localhost!!!";
            }            
        }
        console.log(`*** Using IP Address ${ipAddress} ***`)
        
        var enableLocation = true;
        if (enableLocation) {
            //var url = "https://geoip.maxmind.com/geoip/v2.1/country/me?pretty";
            var enableLocation = true;
            var headers = new Headers();
            
            //var basicAuthValue = 'Basic ' + base64.encode(`${accountId}:${licenseKey})`);
            var basicAuthValue = 'Basic Nzg4MzM3Om9ybjk2YVg0Qkl2NWtXbWY=';
            
            console.log(`*** basicAuthValue = ${basicAuthValue}`);
            headers.append('Authorization', basicAuthValue); 

            
            var accountId = "788337";
            var licenseKey = "orn96aX4BIv5kWmf"
            const maxmindClient = new WebServiceClient(accountId, licenseKey);
            //const client = new WebServiceClient('10', 'LICENSEKEY', {host: 'geolite.info'});

            
            /*
            maxmindClient.city(ipAddress).then(response => {
                console.log('------------ RESULT -----------'); // 'CA'
                var city = response.city?.names.en;
                result = (`City = ${city}`);
              });
*/
            var maxMindResult = await maxmindClient.city(ipAddress);
            var result = `Country = '${maxMindResult.country?.names.en}', City = '${maxMindResult.city?.names.en}', Postal Code = '${maxMindResult.postal?.code}', Latitude = '${maxMindResult.location?.latitude}', Longitude = '', Longitude = '${maxMindResult.location?.longitude}', Time Zone = '${maxMindResult.location?.timeZone}', ISP = '${maxMindResult.traits.isp}', IP Address = '${maxMindResult.traits.ipAddress}'`;
            return result;
/*
            const res = await fetch(
                url, 
                {
                    method: 'GET', 
                    headers: headers,
                    next: { revalidate: 2 }
                }); // This is cached for 5 seconds      

            if (!res.ok) {
                return `Error retrieving location: res.status = "${res.status}", res.statusText = "${res.statusText}""`;
            }    

            var json = await res.json();
            var data = `Results: ${res.status}, ${json.continent.geoname_id}`;

            

            return data;
            /*return new Response(data, { 
                headers: { 
                "Content-Type": "text/xml",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "GET"        
              }
            });*/
        }

    }     
    
    /*
function GetMaxmindLocation(var ipAddress) {


  var headers = new Headers();
  headers.append('Authorization', 'Basic' + "wegeg:wgeg");

}
*/
}