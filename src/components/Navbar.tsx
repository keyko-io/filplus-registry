import Link from "next/link"
import React from "react"

const Navbar = () => {
  return (
    <div className="h-16 shadow-md flex items-center px-12 justify-between">
      <Link href="/">Filecoin Plus</Link>

      <div className="flex space-x-4 items-center">
        <div>About</div>
        <button className="bg-black text-white py-2 px-4 text-sm font-medium rounded-md">
          Github Login
        </button>
      </div>
    </div>
  )
}

export default Navbar
