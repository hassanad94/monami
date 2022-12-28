import Header from '../components/Header';
import './globals.css'

import localFont from '@next/font/local';
const merchantFont = localFont({src: '../assets/merchant.woff2', variable: "--title-font"} );
const prodigyFont = localFont({src: '../assets/prodigy.woff2', variable: "--text-font"} );


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${merchantFont.variable} ${prodigyFont.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body >

        <Header />
        
        {children}
        
      </body>

    </html>
  )
}
