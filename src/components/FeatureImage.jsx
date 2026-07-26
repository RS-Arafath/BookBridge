import Image from 'next/image';
import { Button } from '@heroui/react';
import Link from 'next/link';

export const FeatureImage = async () => {
  let featureData = [];

  try {
    const res = await fetch(
      'https://book-borrow-assaginment-8-server.onrender.com/featuredBooks',
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }
    featureData = await res.json();
  } catch (error) {
    console.error('Error fetching featured books:', error);
  }

  return (
    <section className="container mx-auto px-4 py-12 font-inter">
      <div className="mb-8">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1E3A5F]">
          Top Generated Images
        </h2>
        <p className="mt-2 text-gray-500">
          Discover the most popular AI-generated artworks.
        </p>
      </div>

      {featureData.length === 0 ? (
        <p className="text-gray-500">No featured books available right now.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featureData.map((item) => (
            <div
              key={item.id}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#1E3A5F]/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[3/3.5] cursor-pointer overflow-hidden bg-neutral-950">
                <Image
                  src={item.image_url}
                  alt="img"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  fill
                  className="object-cover blur-2xl brightness-50"
                  aria-hidden
                />
                <div className="absolute inset-0 bg-black/10" />
                <Image
                  src={item.image_url}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-2xl object-fill p-3 transition-transform duration-300 hover:scale-115"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="line-clamp-2 font-bold text-lg text-[#1E3A5F]">
                  {item.title}
                </h3>
                <h4 className="text-sm text-gray-500">{item.author}</h4>
                <div className="border-t border-[#1E3A5F]/10 mt-3"></div>

                <div className="mt-5 flex justify-end">
                  <Link href={`/topGenarated/${item.id}`}>
                    <Button className="bg-[#F7971D] text-white hover:bg-[#e08812] transition-colors">
                      Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default FeatureImage;
