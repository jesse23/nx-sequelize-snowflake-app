import axios from 'axios';
import { Forecast, User } from './types';

export const getUsers = async (): Promise<User[]> => {
  const res = await axios.get('/api/user');
  return res.data as User[];
}


export const createUser = async (user: Partial<User>): Promise<void> => {
  await axios.post('/api/user', user);
}


export const deleteUser = async (userId: number): Promise<void> => {
  await axios.delete(`/api/user/${userId}`);
}

export const getForecast = async (zipCode: string): Promise<Forecast[]> => {
  const res = await axios.get(`/api/forecast/${zipCode}`);
  return res.data.map(d => ({
    ...d,
    date: new Date(d.date)
  }));
}
