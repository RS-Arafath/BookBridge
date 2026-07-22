'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Avatar, Button } from '@heroui/react';
import { Menu, X } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import ProfileModal from './ProfileModal';


const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/allBooks', label: 'All Books' },
  { href: '/profile', label: 'Profile' },
];

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
 
  //console.log('USER:', user); 
  const isPending = userData.isPending;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-[#E2E8F0] bg-white">
      <nav className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center justify-start md:justify-center "
        >
          <Image
            src="/images/logo/logo1.png"
            alt="Logo"
            width={56}
            height={56}
            className="h-14 w-14 object-contain dark:brightness-200"
          />
          <h2 className="text-lg md:text-xl font-outfit font-bold text-[#0F172A]">
            BookBridge
          </h2>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden font-inter md:flex items-center gap-5 lg:gap-8">
          {navLinks.map((item) => {
            const active = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative pb-1 transition-all duration-300
                  ${
                    active
                      ? 'text-[#4F46E5]'
                      : 'text-[#64748B] hover:text-[#4F46E5]'
                  }
                  after:absolute after:left-0 after:bottom-0
                  after:h-0.5 after:bg-[#4F46E5]
                  after:transition-all after:duration-300
                  ${active ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:flex gap-3">
          {isPending ? (
            <div className="flex items-center justify-center h-8 w-8">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#E2E8F0] border-t-[#4F46E5]" />
            </div>
          ) : (
            !user && (
              <div className=" flex gap-3">
                <Button
                  variant="bordered"
                  className="border border-[#E2E8F0] text-[#0F172A] hover:bg-[#F8FAFC]"
                >
                  <Link href="/signup">Sign Up</Link>
                </Button>
                <Button className="bg-[#4F46E5] text-white hover:bg-[#4338CA]">
                  <Link href="/signin">Sign In</Link>
                </Button>
              </div>
            )
          )}
          {user && (
            <div className="flex justify-center items-center gap-2">
              <ProfileModal user={user} />
              <h1 className="text-lg md:text-xl font-semibold font-jetbrains-mono text-[#0F172A]">
                {user?.name}!
              </h1>
            </div>
          )}
        </div>

        <button
          className="md:hidden text-[#0F172A]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu bar*/}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 border-t border-[#E2E8F0]' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-5 space-y-4">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block font-medium transition ${
                pathname === item.href
                  ? 'text-[#4F46E5]'
                  : 'text-[#64748B] hover:text-[#4F46E5]'
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-4 flex flex-col gap-3">
            {isPending ? (
              <div className="flex items-center justify-center h-8 w-8">
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#E2E8F0] border-t-[#4F46E5]" />
              </div>
            ) : (
              !user && (
                <div className=" flex gap-3">
                  <Button
                    variant="bordered"
                    className="border border-[#E2E8F0] text-[#0F172A]"
                    fullWidth
                  >
                    <Link href="/signup">Sign Up</Link>
                  </Button>

                  <Button
                    className="bg-[#4F46E5] text-white hover:bg-[#4338CA]"
                    fullWidth
                  >
                    <Link href="/signin">Sign In</Link>
                  </Button>
                </div>
              )
            )}
            {user && (
              <div className="flex justify-start items-center gap-2">
                <ProfileModal user={user} />
                <h1 className="text-lg md:text-xl font-semibold font-jetbrains-mono text-[#0F172A]">
                  {user?.name}!
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
