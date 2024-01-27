import { Roboto } from 'next/font/google'
import './globals.css'


import { Toaster } from "react-hot-toast";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import classNames from '@/utils/classNames';
// import Providers from '@/providers/index';

const roboto = Roboto({ 
  weight:["100","300","400","500","700","900"],
  subsets: ['latin'] ,
  variable:"--font-roboto",
})

export const metadata = {
  title: 'College Booker',
  description: 'College Booker  is an College selecting website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className='transition-all'>
      <body className={classNames(roboto.variable,
        "container mx-auto px-2 font-roboto"
        )}>
          {/* <Providers> */}
          <div className='flex min-h-screen flex-col justify-between'>
            <div>
              <Navbar/>
              <main >{children}</main>
            <Footer/>
            </div>
          </div>
          {/* </Providers> */}
          <Toaster/>
          </body>
    </html>
  )
}
