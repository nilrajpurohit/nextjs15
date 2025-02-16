import Header from "./header"
import Footer from "./footer"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute:'',
    default:'Next.js',
    template:'%s | Next.js'
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
