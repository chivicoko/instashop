import { ReactNode } from 'react';

export const metadata = {
  title: "Your Stores.",
  description: "Here are your InstaShop Stores.",
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <section className="w-screen h-screen flex items-center justify-center">
      {children}
    </section>
  );
}
