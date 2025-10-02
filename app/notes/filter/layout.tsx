import React from "react";

interface LayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

const Layout = ({ children, sidebar }: LayoutProps) => {
  return (
    <div>
      {sidebar}
      {children}
    </div>
  );
};

export default Layout;
