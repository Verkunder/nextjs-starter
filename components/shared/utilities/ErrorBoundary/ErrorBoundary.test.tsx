import { fireEvent, render, screen } from '@testing-library/react';
import { noop } from 'lodash';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import { ErrorFallback } from './ErrorBoundary';

describe('<ErrorBoundary />', () => {
    const errorMessage = 'Example error message';
    const error = { message: 'Example error message' };

    it('it renders correctly', () => {
        render(<ErrorFallback error={error} resetError={noop} />);

        const errorBoundary = screen.getByTestId('error-boundary');

        expect(errorBoundary).toBeInTheDocument();
    });

    it('it renders error message', () => {
        render(<ErrorFallback error={error} resetError={noop} />);

        const errorBoundary = screen.getByText(errorMessage);

        expect(errorBoundary).toBeInTheDocument();
    });

    it('it handles reset error', () => {
        const mockFn = vi.fn();

        render(<ErrorFallback error={error} resetError={mockFn} />);

        fireEvent.click(screen.getByText('Попробовать еще'));

        expect(mockFn).toHaveBeenCalled();
    });
});
