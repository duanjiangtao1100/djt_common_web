import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/product/list',
    method: 'get',
    params: query
  })
}

export function fetchJob(id) {
  return request({
    url: '/product/'+id,
    method: 'get',
  })
}

export function createJob(data) {
  return request({
    url: '/product/create',
    method: 'post',
    data
  })
}

export function updateJob(data) {
  return request({
    url: '/product/update',
    method: 'put',
    data
  })
}
export function deleteJob(id) {
  return request({
    url: '/product/delete/'+id,
    method: 'delete',
  })
}
