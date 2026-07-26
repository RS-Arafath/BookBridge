import PhotoDetails from '@/components/shared/PhotoDetails';
import React from 'react';

const FeatureDetails = async ({params}) => {
  const { id } = await params;
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
    <div>
      <PhotoDetails featureData={featureData}></PhotoDetails>
    </div>
  );
};

export default FeatureDetails;