// // import React from 'react'
// // import Link from 'next/link'
// // import Image from 'next/image'
// // import NavItems from './NavItems'
// // import { SignInButton, SignedIn, SignedOut, UserButton} from '@clerk/nextjs';
// // const Navbar = () => {
// //   return (
// //     <nav className='navbar'>
// //       <Link href='/'>
// //         <div className='flex items-center gap-2.5 cursor-pointer'>
// //             <Image
// //                 src='/images/logo.svg'
// //                 alt='Logo'
// //                 width={46}
// //                 height={44}
// //                 className='rounded-full'
// //             />
// //         </div>
// //       </Link>
// //       <div className='flex items-center gap-8'>
// //             <NavItems />
// //             <SignedOut>
// //               <div className='flex items-center gap-2'>
// //                 <SignInButton>
// //                   <button className='btn-signin'>Sign In</button>
// //                 </SignInButton>
// //               </div>
// //             </SignedOut>
// //             <SignedIn>
// //               <UserButton afterSignOutUrl = "/"/>
// //             </SignedIn>
// //       </div>
// //     </nav>
// //   )
// // }

// // export default Navbar


// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import NavItems from './NavItems';
// import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

// const Navbar = () => {
//   return (
//     <nav className="w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-3 shadow-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/">
//           <div className="flex items-center gap-2 cursor-pointer">
//             <Image
//               src="/images/logo.svg"
//               alt="Logo"
//               width={46}
//               height={44}
//               className="rounded-full"
//             />
//             <span className="text-xl font-bold text-slate-800 dark:text-white hidden sm:inline">
//               Voice Verse
//             </span>
//           </div>
//         </Link>

//         {/* Nav Items & Auth */}
//         <div className="flex items-center gap-4">
//           <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center">
//             <NavItems />
//           </div>

//           <SignedOut>
//             <SignInButton>
//               <button className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-all">
//                 Sign In
//               </button>
//             </SignInButton>
//           </SignedOut>

//           <SignedIn>
//             <UserButton afterSignOutUrl="/" />
//           </SignedIn>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

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
