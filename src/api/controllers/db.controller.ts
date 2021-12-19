import axios from 'axios';

import { dbUrl } from '../config';

export const getDefincePartners = () => axios.get(`${dbUrl}/partners.json`).then(({ data }) => data)