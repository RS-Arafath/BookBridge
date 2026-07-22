'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TextField, Input, Button, Form, Label } from '@heroui/react';
import Image from 'next/image';
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa6';

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

const socialLinks = [
  { icon: FaFacebookF, href: '/', label: 'Facebook' },
  { icon: FaXTwitter, href: '/', label: 'X' },
  { icon: FaInstagram, href: '/', label: 'Instagram' },
  { icon: FaYoutube, href: '/', label: 'YouTube' },
];

  return (
    <footer className="w-full border-t mt-20 border-[#E2E8F0] bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          <div className="flex flex-col gap-3 md:w-1/3">
            <div className="flex justify-start items-center gap-2">
              <Link href="/">
                {' '}
                <Image
                  src="/images/logo/logo1.png"
                  alt="Logo"
                  width={56}
                  height={56}
                  className="h-14 w-14 object-contain dark:brightness-200"
                />
              </Link>
              <Link href="/" className="text-base font-bold text-[#0F172A]">
                <h2 className="text-lg md:text-xl font-outfit font-bold">
                  <span className="text-[#1E3A5F]">Book</span>
                  <span className="text-[#F7971D]">Bridge</span>
                </h2>
              </Link>
            </div>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Discover, borrow, and explore thousands of books across every
              genre — your bridge to a world of stories and knowledge.
            </p>

            {/* Find Us On */}
            <div className="mt-2">
              <h4 className="text-sm font-semibold text-[#0F172A] mb-2">
                Find Us On
              </h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-[#E2E8F0] text-[#64748B] duration-200 hover:bg-[#D97706] hover:text-white hover:border-[#D97706] transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                    </Link>
                  );
                })}
              </div>
            </div>
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
                  className="text-sm text-[#64748B] hover:text-[#D97706] transition-colors"
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
                  className="w-full rounded-md border border-[#E2E8F0] px-3 py-2 text-sm outline-none focus:border-[#D97706] data-[hover=true]:border-[#D97706]"
                />
              </TextField>
              <Button
                type="submit"
                variant="primary"
                className="shrink-0 bg-[#F7971D] text-white font-semibold hover:bg-[#e08002]"
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
