'use client';

import { FaStar } from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const reviews = [
  {
    name: 'Rafiq Islam',
    role: 'Book Lover',
    image: 'https://i.pravatar.cc/150?img=12',
    review:
      'BookBridge made borrowing books incredibly easy. I found my favorite novel in just a few clicks.',
  },
  {
    name: 'Nusrat Jahan',
    role: 'Student',
    image: 'https://i.pravatar.cc/150?img=47',
    review:
      'The borrowing process is simple and fast. The interface is clean and the collection is excellent.',
  },
  {
    name: 'Tanvir Ahmed',
    role: 'Reader',
    image: 'https://i.pravatar.cc/150?img=33',
    review:
      "I love how simple it is to borrow and return books. It's my favorite online library platform.",
  },
  {
    name: 'Sadia Karim',
    role: 'University Student',
    image: 'https://i.pravatar.cc/150?img=45',
    review:
      'Finding academic books used to be a hassle, but BookBridge changed that completely. Highly recommended.',
  },
  {
    name: 'Imran Hossain',
    role: 'Book Collector',
    image: 'https://i.pravatar.cc/150?img=15',
    review:
      'A well-organized platform with a great variety of books. The whole experience feels smooth and reliable.',
  },
];

const Reviews = () => {
  return (
    <section className="bg-slate-50 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        <div className="text-center max-w-2xl mx-auto">
          <span
            className="
            inline-block rounded-full
            bg-[#F7971D]/10
            px-4 py-2
            text-sm font-semibold
            text-[#F7971D]
          "
          >
            Testimonials
          </span>

          <h2
            className="
            mt-5
            text-2xl sm:text-3xl md:text-4xl
            font-bold
            text-[#1E3A5F]
          "
          >
            What Our Readers Say
          </h2>

          <p className="mt-4 text-gray-600">
            Discover why readers love using BookBridge for borrowing their
            favorite books.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          spaceBetween={24}
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1.3,
            },

            768: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}
          className="
            mt-10 sm:mt-12 md:mt-16
            pb-12
          "
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`
                    rounded-3xl
                    border border-slate-200
                    bg-white
                    p-6 sm:p-8

                    transition-all duration-500

                    ${
                      isActive
                        ? 'scale-100 opacity-100 shadow-xl'
                        : 'scale-90 opacity-50'
                    }
                  `}
                >
                  <div className="flex gap-1 text-[#F7971D]">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <p
                    className="
                    mt-5
                    italic
                    leading-7
                    text-gray-600
                  "
                  >
                    "{review.review}"
                  </p>

                  <div className="relative h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-full">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4
                      className="
                        font-semibold
                        text-[#1E3A5F]
                      "
                    >
                      {review.name}
                    </h4>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
