"use client"

import { usePathname } from "next/navigation"

import Link from "next/link"

export const Navigation = () => {
  const pathname = usePathname()

  return (
    <nav>
      <Link
        href="/"
        className={
          pathname === "/" ? "font-bold mr-4" : "text-gray-400 mr-4"
        }
      >
        LojadoMecanico
      </Link>

      <Link
        href="/my-cart"
        className={
          pathname === "/my-cart" ? "font-bold mr-4" : "text-gray-400 mr-4"
        }
      >
        MEU CARRINHO
      </Link>

      <Link
        href="/identification"
        className={
          pathname === "/identification" ? "font-bold mr-4" : "text-gray-400 mr-4"
        }
      >
        IDENTIFICAÇÃO
      </Link>

      <Link
        href="/payments"
        className={
          pathname === "/payments" ? "font-bold mr-4" : "text-gray-400 mr-4"
        }
      >
        PAGAMENTOS
      </Link>

      <Link
        href="/confirmation"
        className={
          pathname === "/confirmation" ? "font-bold mr-4" : "text-gray-400 mr-4"
        }
      >
        CONFIRMAÇÃO
      </Link>
    </nav>
  )
}