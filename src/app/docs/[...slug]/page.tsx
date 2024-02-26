

export default function Docs({ 
    params,
   }: {
    params: {
      slug: string[];
    } 
   }) {
    if (params.slug.length === 2) {
        console.log('hello')
        return (            
            /* URL = /docs/one/two */
            <h1>
                #1 - Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}.
            </h1>
        );
    } else if (params.slug.length === 1) {
        return (
            /* URL = /docs/one */
            <h1>
                #2 - Viewing docs for feature {params.slug[0]}.
            </h1>
        );
    }
    // TODO: THIS ISN'T WORKING - should go here if do /docs
    return <h1>Docs Home</h1>;
  }
  