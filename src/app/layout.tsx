import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from 'next/font/google';
import { UserProvider } from "@/context/UserContext";

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300', '600'], variable: '--font-dm-sans' });

export const metadata: Metadata = {
  title: {
    default: "InstaShop | InstaShop",
    template: "%s | InstaShop"
  },
  description: "InstaShop services helps you open up your own store online and sell whatever you want to sell. Online shop at its possible best.",
  keywords: "CRM, Sales, Hub, Sales hub, services, Shopping, customers, clients",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable}`}>
      {/* <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8A226F" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head> */}
      <body>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
