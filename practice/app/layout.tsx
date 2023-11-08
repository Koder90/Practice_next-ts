import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import backgroundImage from "../public/background.jpg"
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Practice',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{
        // use the src property of the image object
        backgroundImage: `url(${backgroundImage.src})`,
        // other styles
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {children}</body>
    </html>
  )
}
