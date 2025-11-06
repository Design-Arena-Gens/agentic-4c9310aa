import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'agentic-4c9310aa',
  description: 'Deployed to Vercel',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
