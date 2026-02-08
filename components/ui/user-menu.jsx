'use client';

import { UserProfile } from '@clerk/clerk-react';
import { UserButton } from '@clerk/nextjs';
import { ChartNoAxesGantt } from 'lucide-react';
import React from 'react';

const UserMenu = () => {
  return (
    <UserButton
      appearance={{
        elements: {
          userButtonAvatarBox: 'w-10 h-10',
        },
      }}
    >
      <UserButton.MenuItems>
        <UserButton.Link
          href="/onboarding"
          label="My Organization"
          labelIcon={<ChartNoAxesGantt size={15} />}
        />
        <UserButton.Action label="manageAccount" />
      </UserButton.MenuItems>
    </UserButton>
  );
};

export default UserMenu;
