import axios from "axios";
import { Img } from './types';

axios.defaults.baseURL = 'https://api.unsplash.com/';

interface UnsplashResponse {
    results: Img[];
}

async function fetchImages(searchQuery: string, currentPage: number): Promise<Img[]> {
    const response = await axios.get<UnsplashResponse>('search/photos/', {
        params: {
            client_id: 'IkM_kht761pIEJLz8XbcW1JnQkRQ_z9qSYgdywGDw_s',
            query: searchQuery,
            per_page: 10,
            page: currentPage,
        },
    });
    return response.data.results;
}

export default fetchImages;
