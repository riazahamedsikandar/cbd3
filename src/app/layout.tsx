import React from "react";
import "../index.css";

export const metadata = {
  metadataBase: new URL("https://cbdsouthlaketx.com"),
  title: "cbdsouthlaketx | CBD American Shaman of Southlake TX",
  description: "Shop CBD, hemp, Delta 9, and wellness products at CBD American Shaman of Southlake (cbdsouthlaketx) in Southlake, Texas. Explore quality products with third party lab testing.",
  keywords: "cbdsouthlaketx, CBD American Shaman of Southlake, CBD Southlake TX, Delta 9 Gummies, Hemp Wellness",
  authors: [{ name: "cbdsouthlaketx" }],
  robots: "index, follow",
  verification: {
    google: "google6e8d6491cc80f400",
  },
  alternates: {
    canonical: "https://cbdsouthlaketx.com",
  },
  openGraph: {
    title: "cbdsouthlaketx | CBD American Shaman of Southlake TX",
    description: "Explore CBD, Delta 9, and wellness products at CBD American Shaman of Southlake in Southlake, Texas.",
    url: "https://cbdsouthlaketx.com",
    siteName: "cbdsouthlaketx",
    locale: "en_US",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MRH4ZLHC');`,
          }}
        />
        <link rel="canonical" href="https://cbdsouthlaketx.com" />
        <link rel="icon" href="/brand-feather.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/brand-feather.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="google-site-verification" content="google6e8d6491cc80f400" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MRH4ZLHC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
