import React from 'react';

const Organization = async ({ params }) => {
  const { orgId } = await params;
  return <div>Hey bro i am organization page {orgId}</div>;
};

export default Organization;
