import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import Footer from '@/components/Footer/Footer'


export const metadata = {
  title: 'VKSCleaning',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
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
