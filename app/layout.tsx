import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EditHub - AI Creator Platform',
  description: 'Create amazing content with AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
