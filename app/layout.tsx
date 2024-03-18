import '~/styles/tw.css';

import React, { ReactNode } from 'react';
import { ReactQueryProvider } from 'shared/providers/react-query';

import { inter } from '~/lib/fonts/inter';
import { cn } from '~/lib/utils';

export const metadata = {
    title: 'NEXT STARTER',
    description: 'Default starter for projects',
};

export type RootLayoutProps = Readonly<{ children: ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html suppressHydrationWarning lang="ru">
            <body
                className={cn('min-h-screen bg-background font-sans antialiased', inter.variable)}
            >
                <main>
                    <ReactQueryProvider>{children}</ReactQueryProvider>
                </main>
            </body>
        </html>
    );
}
