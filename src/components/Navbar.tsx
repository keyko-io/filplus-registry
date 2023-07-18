'use client'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Github } from 'lucide-react'
import UserNav from './UserNav'

const Navbar = () => {
  const session = useSession()

  return (
    <div className="h-16 shadow-md flex items-center px-12 justify-between">
      <Link href="/">Filecoin Plus</Link>

      <div>
        {session.status !== 'authenticated' ? (
          <Button onClick={() => signIn('github')}>
            <Github className="mr-2 h-4 w-4" /> Login with Github
          </Button>
        ) : (
          <UserNav />
        )}
      </div>
    </div>
  )
}

export default Navbar
