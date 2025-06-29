'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Companions', href: '/companions' },
  { label: 'My Journey', href: '/my-journey' },
];

interface NavItemsProps {
  isMobile?: boolean;
  onClose?: () => void;
}

const NavItems = ({ isMobile = false, onClose }: NavItemsProps) => {
  const pathname = usePathname();

  return (
    <nav className={cn(isMobile ? 'flex flex-col gap-4 p-4' : 'hidden sm:flex gap-6 items-center')}>
      {navItems.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          className={cn(
            'relative px-2 py-1 text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition',
            pathname === href && 'text-blue-600 dark:text-blue-400 font-semibold'
          )}
          onClick={onClose}
        >
          {label}
          {!isMobile && pathname === href && (
            <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded"></span>
          )}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
