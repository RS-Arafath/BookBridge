import Image from 'next/image';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { SearchX } from 'lucide-react';
import BackButton from '@/components/shared/BackButton';
import SearchFilters from '@/components/SearchFilter';


const AllBooks = async ({ searchParams }) => {
  const { title = '', category = '' } = await searchParams;

  let allBooks = [];
  let categories = [];

  try {
    const [booksRes, categoriesRes] = await Promise.all([
      fetch('https://book-borrow-assaginment-8-server.onrender.com/books'),
      fetch('https://book-borrow-assaginment-8-server.onrender.com/categories'),
    ]);
    allBooks = await booksRes.json();
    categories = await categoriesRes.json();
  } catch (error) {
    //console.error(error);
  }

  const filteredBooks = allBooks.filter((item) => {
    const matchesTitle = item.title
      ?.toLowerCase()
      .includes(title.toLowerCase());
    const matchesCategory = category
      ? item.category?.toLowerCase() === category.toLowerCase()
      : true;
    return matchesTitle && matchesCategory;
  });

  return (
    <section className="container mx-auto px-4 py-12 font-inter">
      <div>
        <BackButton></BackButton>
      </div>
      <div className="mb-10 text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#F7971D]">
          Explore Our Collection
        </h1>
        <p className="mt-3 text-base md:text-lg text-[#1E3A5F] max-w-2xl mx-auto">
          Discover a curated selection of books ready to borrow
        </p>
      </div>

      <SearchFilters categories={categories} />

      {filteredBooks.length === 0 ? (
        <div className="flex border rounded-2xl border-[#F7971D] flex-col items-center justify-center py-10 md:py-20 text-center">
          <SearchX size={48} className="mb-4 text-[#F7971D]" />
          <h3 className="text-lg md:text-xl font-semibold text-[#1E3A5F]">
            No books found for &quot;{title || category}&quot;
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Please check the spelling or try a different search term
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredBooks.map((item) => (
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
                <h3 className="line-clamp-2 min-h-[56px] font-bold text-base sm:text-lg md:text-xl text-[#1E3A5F]">
                  {item.title}
                </h3>
                <h4 className="text-xs sm:text-sm text-gray-500">
                  By{' '}
                  <span className="font-medium text-[#1E3A5F]">
                    {item.author}
                  </span>
                </h4>
                <div className="border-t border-[#1E3A5F]/10 mt-3"></div>

                <div className="my-5">
                  <Link href={`/allBooks/${item.id}`} className="block w-full">
                    {' '}
                    <Button
                      variant="bordered"
                      className="border hover:bg-[#F7971D] text-[#F7971D] hover:text-[#0F172A] w-full border-[#F7971D] transition-colors duration-150 md:text-lg font-bold"
                    >
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

export default AllBooks;
