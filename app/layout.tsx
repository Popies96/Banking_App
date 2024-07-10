import type { Metadata } from "next";
import { Inter,IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] , variable: '--font-inter'});
const ibmPlexSerif = IBM_Plex_Serif({
  subsets:["latin"] ,
  weight:['400','700'],
  variable:'--font-ibm-plex-serif'
})

export const metadata: Metadata = {
  title: "V-BANK",
  description: "V-BANK is a banking platform providing all financial services ",
  icons:{
    icon:'/vbank/public/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
