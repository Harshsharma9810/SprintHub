import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-4xl font-bold">404 - Not Found</h1>
      <p className="mt-2 text-lg">
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
