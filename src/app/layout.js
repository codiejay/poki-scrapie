import ThemeProvider from "./theme-provider";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="icon" href="seoimagehere" />
        <link
          rel="icon"
          href="seoimagehere"
          type="image/x-icon"
          sizes="16x16"
        />
        <meta
          property="og:image"
          itemProp="image primaryImageOfPage"
          content="https://i.ibb.co/PTR9X0j/Screenshot-2024-08-29-at-07-50-26.png"
        />
        <title>R. H. Foundation</title>
        <meta
          property="og:description"
          content="Join Us In Educating The Next Generation"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="R. H. Foundation" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="tref.ng" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="R. H. Foundation" />
        <meta
          name="twitter:description"
          content="Join Us In Educating The Next Generation"
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/PTR9X0j/Screenshot-2024-08-29-at-07-50-26.png"
        />
      </head>
      <body
        style={{
          backgroundColor: "#F9FAFB",
        }}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
