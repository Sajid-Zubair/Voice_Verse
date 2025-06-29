'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { Menu, X } from 'lucide-react';
import NavItems from './NavItems';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center p-4 shadow-md bg-white dark:bg-slate-900">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/images/logo.svg" alt="Logo" width={44} height={44} className="rounded-full" />
        <span className="font-bold text-xl">VoiceVerse</span>
      </Link>

      {/* Desktop Nav */}
      <NavItems />

      {/* Right-side buttons */}
      <div className="hidden sm:flex items-center gap-4">
        <SignedOut>
          <SignInButton>
            <button className="btn-signin">Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="sm:hidden">
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-slate-900 shadow-md z-50 sm:hidden">
          <NavItems isMobile onClose={() => setMobileOpen(false)} />

          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <SignedOut>
              <SignInButton>
                <button className="btn-signin w-full">Sign In</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
