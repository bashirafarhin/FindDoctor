import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import StoreProvider from "@/Providers/StoreProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Practo",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} border border-green-500 flex items-center flex-col justify-between min-h-screen font-sans antialiased`}
      >
        <StoreProvider>
          <Header />
          <main className="flex-1 w-full mt-25">{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
}
