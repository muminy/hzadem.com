import { AppProps } from "next/app"
import Layout from "@/components/Layout/Layout"

import "@/styles/global.css"

import { ThemeProvider } from "next-themes"

import GoogleAnalytics from "@/components/GoogleAnalytics"
import Modal, { modalRef } from "@/components/Modal"
import Alert, { alertRef } from "@/components/Alert"

import "dayjs/locale/tr"

export default function MyCustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics />
      <ThemeProvider attribute="class" defaultTheme="light">
        <Alert ref={alertRef} />
        <Modal ref={modalRef} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
