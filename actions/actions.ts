'use server';

import { Coaches } from '@/api/generated/Coaches'

export const getCoaches = async () => {
  const coachesApi = new Coaches({ baseURL: process.env.API_URL || 'http://localhost:3001' });
  const coaches = (await coachesApi.coachesList()).data
  return coaches
}
