import BookDetails from "@/components/shared/BookDetails";


const FeatureDetails = async ({ params }) => {
  const { id } = await params;
  let bookData = null;

  try {
    const res = await fetch(
      'https://book-borrow-assaginment-8-server.onrender.com/featuredBooks',
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }
    const allBooks = await res.json();
    bookData = allBooks.find((book) => book.id === id);
  } catch (error) {
    console.error('Error fetching book details:', error);
  }
  if (!bookData) {
    return (
      <div className="container mx-auto px-4 py-12 text-center text-gray-500">
        Sorry, we couldn&apos;t find this book.
      </div>
    );
  }

  return (
    <div>
      <BookDetails bookData={bookData}></BookDetails>
    </div>
  );
};

export default FeatureDetails;
