import { ReactNode } from 'react';

export const metadata = {
  title: "Your Products",
  description: "Here are your InstaShop products and services.",
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <section className="w-full">
      {children}
    </section>
  );
}
