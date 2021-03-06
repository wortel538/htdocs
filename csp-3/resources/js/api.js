function getJson(id) {

    if (Number.isInteger(id)) {

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                var myObj = JSON.parse(this.responseText);
                document.getElementById('api_title').innerHTML = myObj[id].page_name;
                document.getElementById('api_content').innerHTML = myObj[id].page_content;
            }
        };
    }

    xmlhttp.open("GET", "http://localhost/php-2/?controller=api&table=page&action=get", true);
    xmlhttp.send();
}


//readyState
// Value            State                   Description
// 0 	            UNSENT 	                Client has been created. open() not called yet.
// 1 	            OPENED 	                open() has been called.
// 2 	            HEADERS_RECEIVED 	    send() has been called, and headers and status are available.
// 3 	            LOADING 	            Downloading; responseText holds partial data.
// 4 	            DONE 	                The operation is complete.

//responseText
// Value            State
// 200              OK
// 403              Forbidden
// 404              Page not found