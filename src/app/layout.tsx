import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "./redux/redux-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Appscrip Shop",
  description:
    "Discover [Your Brand Name], your ultimate destination for bags, shoes, toys, and clothes. Explore a diverse range of high-quality products, from the latest fashion trends to must-have accessories and playful toys. Enjoy unbeatable prices, fast shipping, and exceptional customer service. Shop now and find exactly what you need!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
