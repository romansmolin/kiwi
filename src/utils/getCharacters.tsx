import { axiosClient } from "@/shared/api/axiosClient";

type Character = {
    id: string
    name: string;
    image: string;
    description: string;
    availableInUK: boolean
}

interface CharacterResponse {
    total: number;
    totalPages: number;
    characters: {
        results: Character[];
    }
}

export const getCharacters = async (page: number, limit: number, lang: string): Promise<CharacterResponse> => {
    try {
        const response = await axiosClient.get<CharacterResponse>('/characters/all-characters', {
            params: { page, limit, lang }
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw error;
    }
}