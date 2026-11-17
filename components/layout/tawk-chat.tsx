"use client";

import Script from "next/script";

export function TawkChat() {
  return (
    <Script
      id="tawk-to-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          var Tawk_API = Tawk_API || {};
          var Tawk_LoadStart = new Date();
          Tawk_API.customStyle = {
            visibility: {
              desktop: {
                position: 'br',
                xOffset: '24px',
                yOffset: '96px'
              },
              mobile: {
                position: 'br',
                xOffset: '20px',
                yOffset: '88px'
              }
            }
          };
          (function(){
            var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/5be822f870ff5a5a3a71a657/default';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
          })();
        `,
      }}
    />
  );
}
