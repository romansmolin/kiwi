import React from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationPrevious,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationEllipsis
} from './ui/pagination'

interface PaginationControlProps {
    currentPage: number
    totalPages: number
}

const PaginationControl: React.FC<PaginationControlProps> = ({ currentPage, totalPages }) => {
    const showLeftEllipsis = currentPage - 1 > totalPages / 2;
    const showRightEllipsis = totalPages - currentPage + 1 > totalPages / 2;
    const totalPagesToDisplay = 3
    const nextPage = currentPage + 1;
    const previousPage = currentPage - 1;

    const getPageNumbers = () => {
        if (totalPages <= totalPagesToDisplay) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        } else {
            const half = Math.floor(totalPagesToDisplay / 2);
            // To ensure that the current page is always in the middle
            let start = currentPage - half;
            let end = currentPage + half;
            // If the current page is near the start
            if (start < 1) {
                start = 1;
                end = totalPagesToDisplay;
            }
            // If the current page is near the end
            if (end > totalPages) {
                start = totalPages - totalPagesToDisplay + 1;
                end = totalPages;
            }
            // If showLeftEllipsis is true, add an ellipsis before the start page
            if (showLeftEllipsis) {
                start++;
            }
            // If showRightEllipsis is true, add an ellipsis after the end page
            if (showRightEllipsis) {
                end--;
            }
            return Array.from({ length: end - start + 1 }, (_, i) => start + i);
        }
    };

    const pageNumbers = getPageNumbers();

    return (
        <Pagination className='text-primary-600'>
            <PaginationContent>
                <PaginationPrevious href={currentPage > 1 ? {
                    pathname: '/characters',
                    query: {
                        page: previousPage
                    }
                } : '#'} />
                {showLeftEllipsis && (
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                )}

                {pageNumbers?.map(item => (
                    <PaginationItem key={`item-${item}`}>
                        <PaginationLink href={{
                            pathname: '/characters',
                            query: {
                                page: item
                            }
                        }}>{item}</PaginationLink>
                    </PaginationItem>
                ))}

                {showRightEllipsis && (
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                )}
                <PaginationItem>
                    <PaginationNext href={currentPage < totalPages ? {
                        pathname: '/characters',
                        query: {
                            page: nextPage
                        },
                    } : '#'} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>)
}

export default PaginationControl