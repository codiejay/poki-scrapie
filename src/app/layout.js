import { Header } from "@/Components/Global/Header";
import ThemeProvider from "./theme-provider";
import AgePopup from '@/Components/Global/AgePopup';

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ backgroundColor: "black" }}>
        <ThemeProvider>
          <Header />
          {children}

          <AgePopup />
        </ThemeProvider>
      </body>
    </html>
  );
}
