import 'whatwg-fetch';
import getBaseUrl from './baseurl'

const baseurl = getBaseUrl()

export function getemp(){
  return get('employee')
}

export function deleteEmp(id){
  return del(`employee/${id}`)
}

function del(url){
 const request = new Request(baseurl+url,{
   method:'DELETE'
 });
 return fetch(request).then(onSuccess,onError)
}

function get(url){
  return fetch(baseurl + url).then(onSuccess,onError);
}

function onSuccess(response){
 return response.json();
}

function onError(error){
  console.log(error);//eslint-disable-line no-console
}
