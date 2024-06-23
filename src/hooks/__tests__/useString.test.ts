import { renderHook } from '@testing-library/react';
import useString from '../useString';

describe('useString', () => {
    it('should update the string value to a slugified version', () => {
        const { result } = renderHook(() => useString());
        const actual = result.current.slug('Hello, World!');
        expect(actual).toBe('hello-world');
    });
});