import { useEffect } from 'react';

/**
 * A utility component that scrolls the window to the top.
 * You can render this inside your main Router if you add react-router-dom,
 * or at the top of any individual Page component.
 */
export const ScrollToTop = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
};
