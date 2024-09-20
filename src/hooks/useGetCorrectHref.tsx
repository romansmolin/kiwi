import { useCallback } from 'react';

const useGetCorrectHref = (locale: string) => {
    return useCallback((newLocale: string, pathname: string) => {
        const destructurePathname = pathname.split('/').filter(Boolean);
        const newHrefArr = destructurePathname.map((item) => {
            return item === locale ? newLocale : item;
        });

        return `/${newHrefArr.join('/')}`;
    }, [locale]);
};

export default useGetCorrectHref;
