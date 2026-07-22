'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TextField, Input, Button, Form ,Label} from '@heroui/react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // TODO: connect to your newsletter/email service
    console.log('Subscribe submitted:', email);
    setEmail('');
  };

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Browse Books', href: '/' },
    { label: 'Categories', href: '/' },
    { label: 'About Us', href: '/' },
    { label: 'Contact', href: '/' },
    { label: 'Privacy Policy', href: '/' },
  ];

  return (
    <footer className="w-full border-t mt-20 border-[#E2E8F0] bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
        
          <div className="flex flex-col gap-3 md:w-1/3">
            <Link href="/" className="text-xl font-bold text-[#0F172A]">
              📚 BookBridge
            </Link>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Discover, borrow, and explore thousands of books across every
              genre — your bridge to a world of stories and knowledge.
            </p>
          </div>

     
          <div className="flex flex-col gap-3 md:w-1/3">
            <h4 className="text-sm font-semibold text-[#0F172A] mb-1">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#64748B] hover:text-[#4F46E5] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 md:w-1/3">
            <h4 className="text-sm font-semibold text-[#0F172A] mb-1">
              Subscribe to our newsletter
            </h4>
            <p className="text-sm text-[#64748B]">
              Get updates on new arrivals and reading picks.
            </p>
            <Form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-2 mt-1"
            >
              <TextField
                name="email"
                type="email"
                isRequired
                value={email}
                onChange={setEmail}
                className="flex-1"
              >
                <label></label>
                <Input
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-[#E2E8F0] px-3 py-2 text-sm outline-none focus:border-[#4F46E5] data-[hover=true]:border-[#4F46E5]"
                />
              </TextField>
              <Button
                type="submit"
                variant="primary"
                className="shrink-0 bg-[#4F46E5] text-white hover:bg-[#4338CA]"
              >
                Subscribe
              </Button>
            </Form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[#E2E8F0] text-center text-sm text-[#64748B]">
          © {new Date().getFullYear()} BookBridge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
