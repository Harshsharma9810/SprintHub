'use client';
import { useOrganization, useUser } from '@clerk/nextjs';
import React from 'react';
import { BarLoader } from 'react-spinners';

const UserLoading = () => {
  const { isLoading: isOrgLoading } = useOrganization();
  const { isLoading: isUserLoading } = useUser();

  if (isOrgLoading || isUserLoading) {
    return <BarLoader className="mb-4" width={'100%'} color="#36d7b7" />;
  }
};

export default UserLoading;
