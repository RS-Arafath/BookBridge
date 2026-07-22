'use client';
import Marquee from 'react-fast-marquee';
import { Bell, Headphones } from 'lucide-react';

const announcements = [
  {
    dotColor: 'bg-[#D97706]',
    label: 'New Arrivals:',
    labelColor: 'text-[#FBBF24]',
    text: '"Atomic Habits" and "Deep Work" are now available!',
    emoji: '📘',
  },
  {
    dotColor: 'bg-[#1E3A5F]',
    label: 'Special Offer:',
    labelColor: 'text-[#60A5FA]',
    text: 'Get 30% Discount on Premium Membership',
    emoji: '',
  },
  {
    dotColor: 'bg-[#B45309]',
    label: 'Free Shipping:',
    labelColor: 'text-[#FCD34D]',
    text: 'On all orders over $30',
    emoji: '',
  },
  {
    dotColor: 'bg-[#D97706]',
    label: 'New Arrival Books:',
    labelColor: 'text-[#FBBF24]',
    text: 'Fresh titles added every week',
    emoji: '✨',
  },
];

const BookMarquee = () => {
  return (
    <div className="bg-[#0F172A] py-1 container mx-auto pr-4">
      <div className="flex items-stretch">
        <div className="shrink-0 flex items-center gap-2 bg-gradient-to-r from-[#D97706] to-[#f79524] px-5 py-2 skew-x-[-8deg] -ml-2">
          <div className="flex items-center gap-2 skew-x-[8deg]">
            <Bell className="h-4 w-4 text-white fill-white" />
            <span className="text-sm font-bold text-white tracking-wide">
              UPDATES
            </span>
          </div>
        </div>

        <div className="flex-1 overflow-hidden flex items-center">
          <Marquee speed={80} gradient={false}>
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
