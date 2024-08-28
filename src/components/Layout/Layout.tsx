import { Inter } from "next/font/google"
import ":/styles/globals.css"
import Header from ":/components/Header/Header"
import Footer from ":/components/Footer/Footer"
import { Toaster } from "sonner"
import SheetContext from "../Sheet/SheetContext"
import { GoogleAnalytics } from "@next/third-parties/google"

const inter = Inter({
  subsets: ["latin"],
  style: "normal",
  preload: true,
})

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className="light">
      <body
        className={`flex flex-col min-h-screen ${inter.className}`}>
        <Header />
        <main className="bg-secondary min-h-[calc(100vh-150px)]">
          {children}
        </main>
        <SheetContext />
        <Footer />
        <Toaster />
        <GoogleAnalytics gaId="G-T7ZNR8X5XG" />
      </body>
    </html>
  )
}
