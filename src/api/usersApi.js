import 'whatwg-fetch';
export function getUsers(){
    return getUsers('users');

}
function get(url){ ///add put,post and delete 
    return fetch(url).then(onSuccess, onError);
}
function onSuccess(response){
    return response.json();
}
function onError(error){
    console.log(error);//eslint-disable-line no-console
}
