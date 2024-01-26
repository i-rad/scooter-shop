"use client"
import Link from 'next/link'
import MobileMenu from './mobile-menu'
import { useShoppingCart } from '@/context/ShoppingCartContext'

export default function Header() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <header className="sticky top-0 w-full z-30 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <img src='/images/logo.png' width={100}></img>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/"
                  className="font-medium text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/store"
                  className="font-medium text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Store
                </Link>
              </li>
              <li>
                <div onClick={openCart} className="btn-sm text-white border-2 border-purple-600 hover:bg-purple-700 ml-3 cursor-pointer" style={{ position: "relative" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                  <div className='rounded-circle flex justify-content-center align-items-center' style={{ color: "white", position: "absolute", bottom: "10%", right: "15%" }}>{cartQuantity}</div>

                </div>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
