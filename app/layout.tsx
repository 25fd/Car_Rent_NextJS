import "./globals.css";

import { Footer, NavBar } from "@components";
  
export const metadata = {
  title: 'fd_car_rent',
  description: 'Discover and rent cars from trusted hosts around the world.',
}
  
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
