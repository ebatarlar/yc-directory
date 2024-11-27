import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { auth } from '@/auth';
import { LoginButton, LogoutButton } from './auth-buttons';

const Navbar = async () => {

  const session = await auth();

  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>

      <nav className='flex justify-between items-center'>

        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} priority></Image>

        </Link>

        <div className='flex items-center gap-5 text-black'>
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>

              <LogoutButton/>

              <Link href={`/user/${session?.user?.id}`}>
                <span>{session?.user.name}</span>
              </Link>
            </>
          ) : (
            <LoginButton/>
          )}
        </div>

      </nav>

    </header>
  )
}

export default Navbar