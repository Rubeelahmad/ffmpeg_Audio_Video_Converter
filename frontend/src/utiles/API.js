import axios from 'axios';
import { ENVIRONMENT_VARIABLES } from './constants';

export default axios.create({
  baseURL: ENVIRONMENT_VARIABLES.BASE_API_URL,
  responseType: 'json',
});
