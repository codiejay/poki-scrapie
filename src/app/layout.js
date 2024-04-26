import AgePopup from "@/Components/Global/AgePopup";
import { Header } from "@/Components/Global/Header";
import ThemeProvider from "./theme-provider";

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ backgroundColor: "black" }}>
        <ThemeProvider>
          <AgePopup />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
