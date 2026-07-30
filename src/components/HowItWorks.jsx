'use client';

import { PiBooksFill } from 'react-icons/pi';
import { FaSearch } from 'react-icons/fa';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { TbRotateClockwise2 } from 'react-icons/tb';

const steps = [
  {
    id: '01',
    title: 'Browse Books',
    description:
      'Explore our collection and discover books from a variety of genres.',
    icon: PiBooksFill,
  },
  {
    id: '02',
    title: 'Choose Your Book',
    description:
      'Open the book details, check availability, and select the one you want to borrow.',
    icon: FaSearch,
  },
  {
    id: '03',
    title: 'Borrow for a While',
    description:
      'Borrow your favorite book for a limited period and enjoy reading anytime.',
    icon: MdOutlineCalendarMonth,
  },
  {
    id: '04',
    title: 'Return on Time',
    description:
      'Return the book before the due date so others can enjoy it too.',
    icon: TbRotateClockwise2,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-10 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-4 py-2 text-2xl md:text-4xl lg:text-5xl font-bold  text-[#F7971D] ">
            How It Works
          </span>

          <h2 className="mt-5 text-2xl md:text-3xl lg:text-4xl font-bold text-[#1E3A5F]">
            Borrow Books in 4 Simple Steps
          </h2>

          <p className="mt-4 text-xs md:text-base text-gray-600">
            BookBridge makes borrowing books simple, quick, and convenient.
            Follow these easy steps to start reading.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="group cursor-pointer relative rounded-3xl bg-white p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <span className="absolute top-5 right-6 text-5xl font-bold text-[#F7971D]/10">
                  {step.id}
                </span>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F7971D]/10 text-[#F7971D] text-3xl group-hover:bg-[#F7971D] group-hover:text-[#1E3A5F] transition">
                  <Icon />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#1E3A5F]">
                  {step.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
