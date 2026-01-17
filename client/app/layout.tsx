import type { Metadata } from "next";
import "./globals.scss";
import "./layout.scss";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Ольга психолог",
  description: "Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="page">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
