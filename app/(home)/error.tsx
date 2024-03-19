'use client';

import * as Sentry from '@sentry/nextjs';
import { useEffect } from 'react';

import { ErrorFallback } from '@/_components/utilities/error-boundary';

type ErrorProps = {
    error: Error & { digest?: string };
    reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        Sentry.captureException(error);
    }, [error]);

    return <ErrorFallback error={error} resetError={reset} />;
}
