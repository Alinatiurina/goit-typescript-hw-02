import axios from "axios";

axios.defaults.baseURL = 'https://api.unsplash.com/';

export const fetchImages = async (searchQuery, currentPage) => {
    const response = await axios.get(`search/photos/`, {
        params: {
            client_id: 'IkM_kht761pIEJLz8XbcW1JnQkRQ_z9qSYgdywGDw_s',
            query: searchQuery,
            per_page: 10,
            page: currentPage,
        },
        
    });
    return response.data.results
;
}