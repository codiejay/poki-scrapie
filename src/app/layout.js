import ThemeProvider from "./theme-provider";

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ backgroundColor: "black" }}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
