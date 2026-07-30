import React from 'react';

const AllPhotoPage = async () => {
  let allBooks = [];

  try {
    const res = await fetch(
      'https://book-borrow-assaginment-8-server.onrender.com/books',
    );

    allBooks = await res.json();
  } catch (error) {
    console.error(error);
  }
  return <div></div>;
};

export default AllPhotoPage;
