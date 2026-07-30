'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="group mb-8 inline-flex cursor-pointer items-center gap-2 text-sm text-[#1E3A5F] transition hover:text-[#F7971D]"
    >
      <ArrowLeft
        size={18}
        className="transition-transform duration-200 group-hover:-translate-x-1"
      />
      Back to Gallery
    </button>
  );
};

export default BackButton;
