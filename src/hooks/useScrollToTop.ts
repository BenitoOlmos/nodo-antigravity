import { useEffect } from 'react';

/**
 * Custom hook to scroll the window to the top.
 * Use this in any new page component to ensure it loads at the top.
 */
export const useScrollToTop = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant' // 'instant' prevents smooth scrolling from the previous page's position
        });
    }, []);
};
