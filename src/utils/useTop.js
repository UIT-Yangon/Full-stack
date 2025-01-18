import { useEffect } from 'react';

function useTop(pathname) {
    useEffect(() => {
        // Ensure the scroll happens after the layout has fully settled
        const handleScroll = () => {
            window.scrollTo(0, 0);
        };

        // Delay the scroll slightly to avoid being overridden
        const timeout = setTimeout(handleScroll, 0);

        return () => clearTimeout(timeout); // Clean up timeout
    }, [pathname]);
}

export default useTop;