import { ReactNode } from 'react';

export const metadata = {
  title: "Best of the online shops",
  description: "InstaShop services at its possible best",
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <section className="h-full w-full flex-col">
      {children}
    </section>
  );
}
