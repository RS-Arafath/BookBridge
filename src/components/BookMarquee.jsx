'use client';
import Marquee from 'react-fast-marquee';
import { Bell, Headphones } from 'lucide-react';

const announcements = [
  {
    dotColor: 'bg-amber-500',
    label: 'New Arrivals:',
    labelColor: 'text-white',
    text: '"Atomic Habits" and "Deep Work" are now available!',
    emoji: '📘',
  },
  {
    dotColor: 'bg-blue-500',
    label: 'Special Offer:',
    labelColor: 'text-blue-400',
    text: 'Get 30% Discount on Premium Membership',
    emoji: '',
  },
  {
    dotColor: 'bg-green-500',
    label: 'Free Shipping:',
    labelColor: 'text-green-400',
    text: 'On all orders over $30',
    emoji: '',
  },
];

const BookMarquee = () => {
  return (
    <div className="bg-[#0F172A] py-1 container mx-auto pr-4">
      <div className="flex items-stretch">
       
        <div className="shrink-0 flex items-center gap-2 bg-gradient-to-r from-[#4F46E5] to-[#6366F1] px-5 py-2 skew-x-[-8deg] -ml-2">
          <div className="flex items-center gap-2 skew-x-[8deg]">
            <Bell className="h-4 w-4 text-white fill-white" />
            <span className="text-sm font-bold text-white tracking-wide">
              UPDATES
            </span>
          </div>
        </div>

       

        {/*  marquee */}
        <div className="flex-1 overflow-hidden flex items-center">
          <Marquee speed={40} gradient={false}>
            {announcements.map((item, i) => (
              <div key={i} className="flex items-center gap-2 mx-8">
                <span className={`h-2 w-2 rounded-full ${item.dotColor}`} />
                <span className={`text-sm font-bold ${item.labelColor}`}>
                  {item.label}
                </span>
                <span className="text-sm text-white/90 font-inter">
                  {item.text}
                </span>
                {item.emoji && <span>{item.emoji}</span>}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default BookMarquee;
