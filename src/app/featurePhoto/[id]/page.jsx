import PhotoDetails from '@/components/shared/PhotoDetails';

const FeatureDetails = async ({ params }) => {
  const { id } = await params;
  let featureData = null;

  try {
    const res = await fetch(
      'https://book-borrow-assaginment-8-server.onrender.com/featuredBooks',
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }
    const allBooks = await res.json();
    featureData = allBooks.find((book) => book.id === id);
  } catch (error) {
    console.error('Error fetching book details:', error);
  }
  if (!featureData) {
    return (
      <div className="container mx-auto px-4 py-12 text-center text-gray-500">
        Sorry, we couldn&apos;t find this book.
      </div>
    );
  }

  return (
    <div>
      <PhotoDetails featureData={featureData}></PhotoDetails>
    </div>
  );
};

export default FeatureDetails;
