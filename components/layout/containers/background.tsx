// components/Layout.tsx
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

const Background: React.FC<LayoutProps> = ({ children }) => {
  return (
<div className="min-h-screen bg-gradient-to-b from-brown-400 via-brown-300 to-brown-100 via-[75%] dark:from-indigo-950 dark:via-indigo-950 dark:to-indigo-950">

  {children}
</div>

  );
};

export default Background;

