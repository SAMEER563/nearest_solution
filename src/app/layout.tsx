import type { Metadata } from 'next'
 
// These styles apply to every route in the application
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
 
export const metadata: Metadata = {
  title: 'Nearest Solution',
  description: 'Your one-step platform for all your needs',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}