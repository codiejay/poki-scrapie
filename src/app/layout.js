import ThemeProvider from "./theme-provider";

export default function RootLayout({ children }) {
  return (
    <html>
      {/* Insert site icon below */}
      <head>
        <link rel="icon" href="seoimagehere" />
        <link
          rel="icon"
          href="seoimagehere"
          type="image/x-icon"
          sizes="16x16"
        ></link>

        <meta
          property="og:image"
          itemProp="image primaryImageOfPage"
          content="seoimagehere"
        ></meta>
        {/* Add site title */}
        <title>R. H. Foundation</title>
        <meta property="og:description" content="Tref is cooking." />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tref" />
        <meta name="twitter:description" content="OG" />
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
