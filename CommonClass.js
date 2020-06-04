function requestMethod(par1, par2, method, callback) {

    var xhr = new XMLHttpRequest();

    xhr.open(method, 'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/' + par1);

    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

    xhr.send(par2);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var res = JSON.parse(xhr.responseText);
            var str = res.data;
            callback(str);
        }
    }

}