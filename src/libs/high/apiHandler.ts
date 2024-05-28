import axios from 'axios';

export const apiHandler = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_HIGH_API_URL}`,
});
