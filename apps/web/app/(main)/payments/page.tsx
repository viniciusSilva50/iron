"use client"

import { useRouter } from "next/navigation"

export default function Payments() {
  const router = useRouter()

  return (
    <div>
      <h1>Pagamentos</h1><button
      onClick={() => router.push("/")}
      className="bg-green-500 text-white p-2 rounded-md"
    >
      Finalizar compra
    </button>
    </div>

  )
}