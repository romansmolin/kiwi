import React from 'react'
import HeroCard from '@/components/HeroCard'
import { characters } from '@/shared/consts'

const Characters = () => {
    return (
        <section className='mt-10 flex justify-center w-full'>
            <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-14 lg:py-20">
                {characters.map(character => (
                    <HeroCard
                        key={character.name}
                        img={character.image}
                        title={character.name}
                        text={character.description}
                    />
                ))}
            </div>
        </section>
    )
}

export default Characters
