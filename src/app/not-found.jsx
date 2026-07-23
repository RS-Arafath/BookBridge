'use client';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { ArrowLeft, Home } from 'lucide-react';

import React from 'react';

const notFound = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50 px-6 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      {/* Background Glow */}
      <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#F7971D]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#1E3A5F]/20 blur-3xl" />

      <div className="relative z-10 max-w-2xl text-center">
        {/* 404 */}
        <h1 className="bg-gradient-to-r from-[#F7971D] via-[#F7971D] to-[#1E3A5F] bg-clip-text text-8xl font-extrabold text-transparent md:text-9xl">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-6 text-3xl font-bold text-[#1E3A5F] dark:text-white md:text-4xl">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-slate-600 dark:text-slate-400">
          The page you're looking for doesn't exist, may have been moved, or the
          URL might be incorrect.
        </p>
        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            variant="bordered"
            size="lg"
            startContent={<ArrowLeft size={18} />}
            onPress={() => window.history.back()}
            className="px-8 border border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white"
          >
            Go Back
          </Button>
        </div>
      </div>
    </section>
  );
};

export default notFound;
