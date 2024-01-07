import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter, Montserrat_Alternates, Nunito_Sans } from 'next/font/google'
import '../app/Css/globals.css'
import '../app/Css/responsive.css'
import BootstrapClient from './CDN/BootstrapClient'


const inter = Inter({ subsets: ['latin'] })

const montserrat_alternates = Montserrat_Alternates(
  {
    subsets:['latin'],
    weight:['300', '500', '600'],
    variable:'--font-montserrat-alt',
  }
) 

const nunito_sans = Nunito_Sans(
  {
    subsets:['latin'],
    weight:['300', '500' ,'600'],
    variable:'--font-nunito-sans',
  }
) 



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat_alternates.variable} ${nunito_sans}`}>{children}
      <BootstrapClient/>
      </body>
      
    </html>
  )
}
