import { REACT_APP_API_BASE_URL, REACT_APP_CRUDCRUD_ID } from '@env';

const apiUrl = `${REACT_APP_API_BASE_URL ?? 'https://crudcrud.com/api'}/${
  REACT_APP_CRUDCRUD_ID ?? '16f9779742d048b99317556429f9d531'
}`;

const envSettings = {
  apiUrl,
};

export default {
  ...envSettings,
};
