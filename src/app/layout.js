import ThemeProvider from './components/theme-provider'
import "./styles/index.css";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bank",
  description: "Track personal finances",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
        {children}
        </ThemeProvider></body>
    </html>
  );
}
