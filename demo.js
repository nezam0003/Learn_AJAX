document.getElementById('btn-ajax').addEventListener('click', makeRequest);

function makeRequest() {
    const xhr = new XMLHttpRequest();
    // if (xhr.readyState === 0) {
    //     console.log('Open method has not called yet');
    // }
    xhr.open('GET', 'data.txt', true);
    // if (xhr.readyState === 1) {
    //     console.log('Open method has called');
    // }
    //*********** onReadyStateChange***********
    // xhr.onreadystatechange = () => {
    //     if (xhr.readyState === 2) {
    //         console.log('Response header');
    //     }
    //     if (xhr.readyState === 3) {
    //         console.log('Loading state...');
    //     }

    //     if (xhr.readyState === 4) {
    //         if (xhr.status === 200) {
    //             console.log(xhr);
    //             console.log(xhr.responseText);
    //         } else {
    //             console.log('problem occured');
    //         }
    //     }
    // }
    // ********** onload state ************
    xhr.onload = () => {
        if (xhr.status = 200) {
            console.log(xhr);
            console.log(xhr.responseText);
            console.log(xhr.statusText);
            console.log(xhr.response);
            console.log(xhr.withCredentials);
            console.log(xhr.responseURL);
            console.log(xhr.getResponseHeader("LAST-Modified"));
            console.log(xhr.getAllResponseHeaders());
        } else {
            console.log('error occured');
        }
    }
    xhr.send();
}