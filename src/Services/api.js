import axios from 'axios';

const api = axios.create({ baseURL: 'https://socialme-api.herokuapp.com/ergCNTis' });

export default api;