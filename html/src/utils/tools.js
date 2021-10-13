function cdd(url,callback,method='get'){
    const baseUrl = 'http://120.76.247.5:2003/api'
    url = baseUrl + url;
    const xhr = new XMLHttpRequest();
    xhr.onload = function(){
        const data = JSON.parse(xhr.responseText);
        if(typeof callback === 'function'){
            callback(data)
        }
    }
    xhr.open(method,url,true);
    xhr.send();
}
 
