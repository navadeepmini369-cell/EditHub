'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Notifications from '@/components/Notifications';

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

export default function Layout({ children, showSidebar = true }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-darker to-dark flex">
      {showSidebar && <Sidebar />}
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto p-6 md:p-8">
          {children}
        </main>
      </div>
      <Notifications />
    </div>
  );
}
