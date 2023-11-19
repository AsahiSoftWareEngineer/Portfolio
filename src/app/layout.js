import Header from '@/components/header'

import { M_PLUS_Rounded_1c, Roboto } from 'next/font/google'
import './globals.css'

const inter = M_PLUS_Rounded_1c({ subsets: ['latin'], weight:'300' })
export const metadata = {
  title: 'AsahiのPortfolio',
  description: '持ち前の向上心と問題解決能力で貴社の発展のために尽力させていただきます',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        </body>
    </html>
  )
}
