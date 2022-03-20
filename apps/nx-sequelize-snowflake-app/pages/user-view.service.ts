import axios from 'axios';
import { User } from './types';

export const getUsers = async (): Promise<User[]> => {
  const res = await axios.get('/api/user');
  return res.data as User[];
}


export const createUser = async (user: Partial<User>): Promise<void> => {
  await axios.post('/api/user', user);
}


export const deleteUser = async (userId: number): Promise<void> => {
  console.log(`Jesse: ${JSON.stringify(userId)}`)
  await axios.delete(`/api/user/${userId}`);
}
