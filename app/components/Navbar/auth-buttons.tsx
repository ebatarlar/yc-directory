'use client';

import { signIn, signOut } from 'next-auth/react';
import React from 'react'

export const LoginButton = () => {
  return (
    <button onClick={() => {signIn('github')}}>
        Login
    </button>
  );
}


export const LogoutButton = () => {
  return (
    <button onClick={() => {signOut}}>Logout</button>
  )
}

