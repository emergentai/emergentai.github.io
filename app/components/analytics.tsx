"use client";
import Script from "next/script";

export function Analytics() {
	return (
		<>
		<Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YNYXN5PL55"
        />
		<Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', ${'G-YNYXN5PL55'});
          `}
        </Script>
		</>
		
	);
}
