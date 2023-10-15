import { Inter } from "next/font/google";
import "./styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bank",
  description: "Track personal finances",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
