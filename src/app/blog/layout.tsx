import type { PropsWithChildren } from 'react';

export default function BlogLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <div>
      <h1>layout 2</h1>
      {children}
    </div>
  );
}
