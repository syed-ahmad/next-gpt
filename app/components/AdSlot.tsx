'use client';
import Script from 'next/script';
import GoogleScript from './GoogleScript';

export default function AdSlot() {
  return (
    <>
      <GoogleScript />

      <div id='div-gpt-ad-6061432-1'>
        <Script
          id='google-ad-slot-1'
          dangerouslySetInnerHTML={{
            __html: `googletag.cmd.push(function() { googletag.display('div-gpt-ad-6061432-1'); });`,
          }}
        ></Script>
      </div>
    </>
  );
}
