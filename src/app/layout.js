import ThemeProvider from "./theme-provider";

export default function RootLayout({ children }) {
  return (
    <html>
      {/* Insert site icon below */}
      <head>
        <link
          rel="icon"
          href="https://i.ibb.co/pfHsW41/Screenshot-2024-05-18-at-16-56-09.png"
        />
        <link
          rel="icon"
          href="https://i.ibb.co/pfHsW41/Screenshot-2024-05-18-at-16-56-09.png"
          type="image/x-icon"
          sizes="16x16"
        ></link>

        {/* Add SEO */}
        <meta
          property="og:image"
          itemprop="image primaryImageOfPage"
          content="https://i.ibb.co/dMksgGG/Screenshot-2024-05-18-at-16-58-53.png"
        ></meta>
        <meta property="og:description" content="Bluebreakfast is cooking." />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bluebreakfast" />
        <meta name="twitter:description" content="OG" />
      </head>
      <body style={{ backgroundColor: "black" }}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
