'use client';
import Script from 'next/script';
import { useEffect } from 'react';

export default function GoogleScript() {
  return (
    <>
      <Script
        async={true}
        src='https://securepubads.g.doubleclick.net/tag/js/gpt.js'
      />
      <Script
        id='google-tag-mgr'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `(function() {
          googletag.cmd.push(function() {
          googletag.defineSlot('/76889402/Homepage', [[300,250]], 'div-gpt-ad-6061432-1')
             .addService(googletag.pubads());

            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
          })
        })(window.googletag = window.googletag || {cmd: []});
          `,
        }}
        // onLoad={
        //   ((window.googletag = window.googletag || { cmd: [] }),
        //   window.setTimeout(() => {
        //     console.log('🚀 window.googletag', window.googletag);
        //     window.googletag.cmd.push(function () {
        //       window.googletag
        //         .defineSlot(
        //           '/76889402/Homepage',
        //           [[300, 250]],
        //           'div-gpt-ad-6061432-1'
        //         )
        //         .addService(window.googletag.pubads());

        //       window.googletag.pubads().enableSingleRequest();
        //       window.googletag.enableServices();
        //     });
        //   }, 100),
        //   void 0)
        // }
      ></Script>
    </>
  );
}
