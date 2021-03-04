import request from 'umi-request';

export async function queryArticleTypeList(params) {
  return request('/api/getArticleTypeList', {
    params,
  });
}
export async function removeArticleTypeList(params) {
  const { count = 5, ...restParams } = params;
  return request('/api/getArticleTypeList', {
    method: 'POST',
    params: {
      count,
    },
    data: { ...restParams, method: 'delete' },
  });
}
export async function addArticleTypeList(params) {
  const { count = 5, ...restParams } = params;
  return request('/api/getArticleTypeList', {
    method: 'POST',
    params: {
      count,
    },
    data: { ...restParams, method: 'post' },
  });
}
export async function updateArticleTypeList(params) {
  const { count = 5, ...restParams } = params;
  return request('/api/getArticleTypeList', {
    method: 'POST',
    params: {
      count,
    },
    data: { ...restParams, method: 'update' },
  });
}
