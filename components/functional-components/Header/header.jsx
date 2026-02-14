'use client';

import { Button } from '@/components/ui/button';
import UserMenu from '@/components/ui/user-menu';
// import { checkUser } from '@/lib/checkUser';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import { PenBox } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import UserLoading from '../user-loading';

const Header = () => {
  // await checkUser();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[999] bg-white transition-all duration-300
        ${scrolled ? 'border-b shadow-md' : ''}
      `}
    >
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo1.png"
            alt="SpintHub Logo"
            width={200}
            height={56}
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Create Project */}
          <Link
            href="/project/create"
            className="flex items-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-sm text-white hover:bg-indigo-700 transition sm:px-6 sm:py-3 sm:text-base"
          >
            <PenBox size={18} />
            <span className="hidden sm:inline">Create Project</span>
          </Link>

          <SignedOut>
            <SignInButton forceRedirectUrl="/onboarding">
              <Button variant="outline" className="text-sm sm:text-base">
                Login
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserMenu />
          </SignedIn>
        </div>
      </nav>
      <UserLoading />
    </header>
  );
};

export default Header;
