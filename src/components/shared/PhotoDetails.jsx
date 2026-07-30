import Image from 'next/image';
import Link from 'next/link';
import { User, Tag, PackageCheck, PackageX } from 'lucide-react';
import { Button } from '@heroui/react';
import BackButton from './BackButton';
import BorrowButton from './BorrowButton';

const PhotoDetails = async ({ featureData }) => {
  const isAvailable = featureData.available_quantity > 0;

  return (
    <section className="container mx-auto px-4 py-8 md:py-14 font-inter">
      {/* Back Button */}
      <div>
        <BackButton></BackButton>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_3fr] md:gap-14 md:items-start">
        {/* Left */}
        <div className="group relative aspect-square w-full max-w-md mx-auto md:max-w-full overflow-hidden rounded-2xl border bg-black shadow-lg">
          {/* Blurred*/}
          <Image
            src={featureData.image_url}
            alt=""
            fill
            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 40vw, 500px"
            className="object-cover blur-xl scale-125 opacity-90"
            aria-hidden
            priority
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Main Image */}
          <Image
            src={featureData.image_url}
            alt={featureData.title}
            fill
            priority
            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 40vw, 500px"
            className="relative z-10 cursor-pointer object-cover lg:object-contain transition-transform duration-500 group-hover:scale-110 lg:group-hover:scale-150"
          />
        </div>

        {/* Right  */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#F7971D] leading-tight md:text-4xl font-jetbrains-mono">
            {featureData.title}
          </h1>

          <div className="grid grid-cols-2 gap-4">
            <div className="group rounded-xl border cursor-pointer border-[#1E3A5F]/10 p-3 sm:p-4 transition-colors duration-150 hover:border-[#F7971D]/40 hover:bg-[#F7971D]/5">
              <div className="flex items-center gap-2 text-default-500">
                <User size={16} className="text-[#F7971D]" />
                <p className="text-sm font-semibold md:text-base">Author</p>
              </div>
              <p className="mt-1 font-medium text-sm md:text-base text-[#1E3A5F]">
                {featureData.author}
              </p>
            </div>

            <div className="group rounded-xl border cursor-pointer border-[#1E3A5F]/10 p-3 sm:p-4 transition-colors duration-150 hover:border-[#F7971D]/40 hover:bg-[#F7971D]/5">
              <div className="flex items-center gap-2 text-default-500">
                <Tag size={16} className="text-[#F7971D]" />
                <p className="text-sm font-semibold md:text-base">Category</p>
              </div>
              <p className="mt-1 font-medium text-sm md:text-base text-[#1E3A5F]">
                {featureData.category}
              </p>
            </div>
          </div>

          <div className="rounded-xl border p-4 sm:p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-4 border-b pb-4">
              <div>
                <h2 className="text-lg md:text-2xl font-semibold text-[#F7971D]">
                  Book Details
                </h2>
              </div>
            </div>

            <div className="rounded-lg font-jetbrains-mono bg-default-100 p-2 text-sm md:text-base leading-6 md:leading-7 text-[#1E3A5F]">
              {featureData.description}
            </div>
          </div>

          {/* Borrow button*/}
          <div className="rounded-xl border border-[#1E3A5F]/10 p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    isAvailable ? 'bg-[#F7971D]/10' : 'bg-gray-100'
                  }`}
                >
                  {isAvailable ? (
                    <PackageCheck size={20} className="text-[#F7971D]" />
                  ) : (
                    <PackageX size={20} className="text-gray-400" />
                  )}
                </div>

                <div>
                  <p className="text-sm font-semibold text-default-500">
                    Availability
                  </p>
                  <p
                    className={`font-medium text-sm md:text-base ${
                      isAvailable ? 'text-green-600' : 'text-red-500'
                    }`}
                  >
                    {isAvailable
                      ? `${featureData.available_quantity} copies available`
                      : 'Currently unavailable'}
                  </p>
                </div>
              </div>

              <BorrowButton isAvailable={isAvailable} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoDetails;
