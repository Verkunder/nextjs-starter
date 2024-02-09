import '~/styles/tw.css';
import '~/styles/index.sass';
import 'modern-normalize/modern-normalize.css';

import React, { ReactNode } from 'react';
import ReactQueryProvider from 'shared/providers/react-query';

import { inter } from '~/lib/fonts/Inter';

export const metadata = {
    title: 'NEXT STARTER',
    description: 'Default starter for projects',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru" className={`${inter.variable}`}>
            <body>
                <main>
                    <ReactQueryProvider>{children}</ReactQueryProvider>
                </main>
            </body>
        </html>
    );
}
