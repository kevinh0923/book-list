import axios from 'axios';
import settings from '../settings';

export const axiosInstance = axios.create({
  baseURL: settings.apiUrl,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  },
});

export const apiPut = <DataType, ResType>(path: string, data: DataType) =>
  axiosInstance.put<ResType>(path, data).then(res => res.data);

export const apiPost = <DataType, ResType>(path: string, data: DataType) =>
  axiosInstance.post<ResType>(path, data).then(res => res.data);

export const apiGet = <ResType>(path: string) =>
  axiosInstance.get<ResType>(path).then(res => res.data);

export const apiDelete = <ResType>(path: string) =>
  axiosInstance.delete<ResType>(path).then(res => res.data);
