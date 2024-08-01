import api from './api';

export const fetchTechNews = async () => {
    try {
        const response = await api.get('/tech-news');
        return response.data;
    } catch (error) {
        console.error('Error fetching tech news:', error);
        throw error;
    }
};