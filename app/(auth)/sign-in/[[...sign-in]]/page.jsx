import { SignIn } from '@clerk/nextjs';
import React from 'react';

const SignInPage = () => {
  return (
    <div>
      Welcome to the sign in page
      <SignIn />
    </div>
  );
};

export default SignInPage;
