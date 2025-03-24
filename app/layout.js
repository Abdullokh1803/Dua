import { Poppins } from "next/font/google";
import "./globals.css";
import I18nProvider from "../I18nProvider";
import Btn from "../btns";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins", // Создаем CSS-переменную для удобства
});
export const metadata = {
  title: "Du'a",
  description: "AlhamduliLlah",
  icons: {
    icon: "/icon.png", // или .svg, .jpg
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={poppins.variable}>
      <body className="font-sans antialiased">
        <I18nProvider>
          <Btn />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
