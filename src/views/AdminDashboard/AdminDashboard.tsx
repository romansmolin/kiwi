import { CharacterCreator, CharactersTable } from '@/components/admin'
import React from 'react'

const AdminDashboard = () => {
    return (
        <div>
            <div className='w-full flex flex-col 2xl:flex-row gap-5'>
                <div className='flex-[1]'>
                    <CharacterCreator />
                </div>
                <div className='flex-[3]'>
                    <CharactersTable />
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard