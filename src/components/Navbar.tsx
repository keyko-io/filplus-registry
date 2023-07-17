'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Github } from 'lucide-react'
//import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const Navbar = () => {
  const session = useSession()

  return (
    <div className="h-16 shadow-md flex items-center px-12 justify-between">
      <Link href="/">Filecoin Plus</Link>

      <div className="flex space-x-4 items-center">
        <div>About</div>

        {session.status !== 'authenticated' ? (
          <Button onClick={() => signIn('github')}>
            <Github className="mr-2 h-4 w-4" /> Login with Github
          </Button>
        ) : (
          <Button onClick={() => signOut()}>Logout</Button>
        )}
      </div>
    </div>
  )
}

export default Navbar
