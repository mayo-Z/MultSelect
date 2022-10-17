import request from '../utils/request';


export const MultSelectApi = () => {
  return request({
    method: 'get',
    url: "/api/multSelect"
  });
};


