'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import React, { ReactNode, useState } from 'react';

// 30 sec
export const DEFAULT_STALE_TIME = 30_000;

type ReactQueryProviderProps = Readonly<{
    children: ReactNode;
    showDevtools?: boolean;
}>;

export function ReactQueryProvider({ children, showDevtools = true }: ReactQueryProviderProps) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [queryClient, setQueryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: DEFAULT_STALE_TIME,
                        throwOnError: true,
                    },
                },
            })
    );

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>

            {showDevtools ? <ReactQueryDevtools initialIsOpen={false} /> : null}
        </QueryClientProvider>
    );
}
