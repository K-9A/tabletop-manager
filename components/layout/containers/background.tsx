// components/Layout.tsx
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

//This container is for the overall background of the site that persists among ALL pages.
const Background: React.FC<LayoutProps> = ({ children }) => {
  return (
<div className="min-h-screen bg-gradient-to-b from-brown-300 via-brown-200 to-brown-100 via-[70%] dark:from-indigo-950 dark:via-indigo-950 dark:to-indigo-950">

  {children}
</div>

  );
};

export default Background;