import axios from 'axios';
import { processEnv } from '@next/env';
import { baseUrlApi } from '../constants';

interface IRequest {
  url: string;
  method?: 'get' | 'post' | 'delete';
  params?: any;
  data?: any;
  headers?: any;
}

export default ({
  url = '/',
  method = 'get',
  params = {},
  headers = {},
  data = {},
}: IRequest) => {
  const requestUrl = baseUrlApi + url;
  return axios({ url: requestUrl, method, params, headers, data }).catch(
    (error) => {
      throw error;
    },
  );
};
