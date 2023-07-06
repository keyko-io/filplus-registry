"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import React from "react"

const Navbar = () => {
  const session = useSession()

  console.log(session, "xx")

  return (
    <div className="h-16 shadow-md flex items-center px-12 justify-between">
      <Link href="/">Filecoin Plus</Link>

      <div className="flex space-x-4 items-center">
        <div>About</div>

        {session.status !== "authenticated" ? (
          <button
            className="bg-black text-white py-2 px-4 text-sm font-medium rounded-md"
            onClick={() => signIn("github")}
          >
            Github Login
          </button>
        ) : (
          <button
            className="bg-black text-white py-2 px-4 text-sm font-medium rounded-md"
            onClick={() => signOut()}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar
