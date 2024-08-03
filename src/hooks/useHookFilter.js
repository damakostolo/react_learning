import {useMemo} from "react";

export const useSortLaptops = (laptops, sort ) => {
    return useMemo(() => {
            if (sort) {
                return [...laptops].sort((a, b) => a[sort].localeCompare(b[sort]))
            }
            return laptops
        },
        [sort, laptops]);
}



export const useSearchLaptopsAndSort = (laptops, sort, search) => {
    const sortsLaptops = useSortLaptops(laptops, sort);

    return useMemo(() => {
        return sortsLaptops.filter(laptop => laptop.title.toLowerCase().includes(search.toLowerCase()))
    }, [search, sortsLaptops]);
}