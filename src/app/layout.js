import ThemeProvider from "./theme-provider";

export default function RootLayout({ children }) {
  return (
    <html>
      {/* Insert site icon below */}
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="16x16"
        ></link>
      </head>
      <body style={{ backgroundColor: "black" }}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
