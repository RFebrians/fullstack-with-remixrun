import{a as m}from"/build/_shared/chunk-NZCB3PMS.js";import{b as d,f as n}from"/build/_shared/chunk-AKSB5QXU.js";n();n();var s=d(m()),g=async({request:r})=>{var a;let l=await s.db.joke.findMany({take:100,orderBy:{createdAt:"desc"},include:{jokester:{select:{username:!0}}}}),o=(a=r.headers.get("X-Forwarded-Host"))!=null?a:r.headers.get("host");if(!o)throw new Error("Could not determine domain URL.");let t=`${`${o.includes("localhost")?"http":"https"}://${o}`}/jokes`,i=`
    <rss xmlns:blogChannel="${t}" version="2.0">
      <channel>
        <title>Remix Jokes</title>
        <link>${t}</link>
        <description>Some funny jokes</description>
        <language>en-us</language>
        <generator>Kody the Koala</generator>
        <ttl>40</ttl>
        ${l.map(e=>`
            <item>
              <title>${e.name}</title>
              <description>A funny joke called ${e.name}</description>
              <author>${e.jokester.username}</author>
              <pubDate>${e.createdAt}</pubDate>
              <link>${t}/${e.id}</link>
              <guid>${t}/${e.id}</guid>
            </item>
          `.trim()).join(`
`)}
      </channel>
    </rss>
  `.trim();return new Response(i,{headers:{"Cache-Control":`public, max-age=${60*10}, s-maxage=${60*60*24}`,"Content-Type":"application/xml","Content-Length":String(Buffer.byteLength(i))}})};export{g as loader};
