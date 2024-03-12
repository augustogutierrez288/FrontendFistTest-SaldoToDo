import axios from 'axios';

export const getSystems = async (API_URL) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
};