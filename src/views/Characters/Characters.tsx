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
import { PaginationControl } from '@/components';


interface Character {
    name: string;
    image: string;
    description: string;
}
interface CharactersPageProps {
    characters: Character[],
    totalPages: number,
    currentPage: any
}
const Characters: React.FC<CharactersPageProps> = ({ characters, totalPages, currentPage }) => {
    const paginationItems = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <section className='my-10 gap-10 flex flex-col justify-center items-center w-full'>
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
            <div className='mb-9 lg:mb-[unset]'>
                <PaginationControl
                    currentPage={parseInt(currentPage)}
                    totalPages={totalPages}
                />
            </div>
        </section>
    )
}

export default Characters
