import BookDetails from '@/components/shared/BookDetails';
import React from 'react';

const AllBooksDetails =async ({params}) => {
 const { id } = await params;
 let bookData = null;

 try {
   const res = await fetch(
     'https://book-borrow-assaginment-8-server.onrender.com/books',
   );
   if (!res.ok) {
     throw new Error(`Failed to fetch: ${res.status}`);
   }
   const allBooks = await res.json();
   bookData = allBooks.find((book) => book.id === id);
 } catch (error) {
   console.error('Error fetching book details:', error);
 }
  return (
    <div>
      <div>
        <BookDetails bookData={bookData}></BookDetails>
      </div>
    </div>
  );
};

export default AllBooksDetails;