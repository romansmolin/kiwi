import React from 'react'
import HeroCard from '@/components/HeroCard'
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

interface Character {
    name: string;
    image: string;
    description: string;
}
interface CharactersPageProps {
    characters: Character[],
    totalPages: number
}
const Characters: React.FC<CharactersPageProps> = ({ characters, totalPages }) => {
    const paginationItems = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <section className='my-10 gap-10 flex flex-col justify-center items-center w-full pt-20'>
            <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-14">
                {characters?.map(character => (
                    <HeroCard
                        key={character.name}
                        img={character.image}
                        title={character.name}
                        text={character.description}
                    />
                ))}
            </div>
            <Pagination className='text-primary-600'>
                <PaginationContent>
                    <PaginationPrevious href="#" />
                    {paginationItems?.map(item => (
                        <PaginationItem key={`item-${item}`}>
                            <PaginationLink href={{
                                pathname: '/characters',
                                query: {
                                    page: item
                                }
                            }}>{item}</PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </section>
    )
}

export default Characters
