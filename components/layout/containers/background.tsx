// components/Layout.tsx
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

const Background: React.FC<LayoutProps> = ({ children }) => {
  return (
<div className="min-h-screen bg-gradient-to-b from-brown-400 via-brown-300 to-brown-100 via-[75%] dark:from-black dark:via-black dark:to-black">
  {children}
</div>

  );
};

export default Background;
