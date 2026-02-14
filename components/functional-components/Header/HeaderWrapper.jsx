import { checkUser } from '@/lib/checkUser';
import React from 'react';
import Header from './header';

const HeaderWrapper = async () => {
  await checkUser();

  return (
    <>
      <Header />
    </>
  );
};

export default HeaderWrapper;
