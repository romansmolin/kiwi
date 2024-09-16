import { useState, useEffect, useRef } from 'react';

const useIsVisibleInViewport = (ref: React.RefObject<HTMLElement>, partiallyVisible = false): boolean => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const elementIsVisibleInViewport = (el: HTMLElement | null, partiallyVisible = false) => {
        if (!el) return false;
        const { top, left, bottom, right } = el.getBoundingClientRect();
        const { innerHeight, innerWidth } = window;

        return partiallyVisible
            ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
              ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
            : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
    };

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                setIsVisible(elementIsVisibleInViewport(ref.current, partiallyVisible));
            }
        };

        // Add event listener
        window.addEventListener('scroll', handleScroll);
        // Call handler right away so state gets updated with initial render
        handleScroll();

        return () => {
            // Clean up event listener
            window.removeEventListener('scroll', handleScroll);
        };
    }, [ref, partiallyVisible]);

    return isVisible;
};

export default useIsVisibleInViewport;
