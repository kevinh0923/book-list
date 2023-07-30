import axios from 'axios';
import settings from '../settings';

export const axiosInstance = axios.create({
  baseURL: settings.apiUrl,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  },
});

export const apiPut = <DataType, ResType>(path: string, data: DataType) => {
  return axiosInstance.put<ResType>(path, data);
};

export const apiPost = <DataType, ResType>(path: string, data: DataType) => {
  return axiosInstance.post<ResType>(path, data);
};

export const apiGet = <ResType>(path: string) => {
  return axiosInstance.get<ResType>(path);
};

export const apiDelete = <ResType>(path: string) => {
  return axiosInstance.delete<ResType>(path);
};
