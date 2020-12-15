const btn = document.getElementById('btn-ajax');
btn.addEventListener('click', makeRequest);

function makeRequest() {
    // Create XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    // Open XMLHttpRequest function
    xhr.open('GET', "data.txt", true);
    // XMLHttpRequest Handler

    // ****** onReadyStateChange method ******

    // xhr.onreadystatechange = () => {
    //     // checking ready state
    //     if (xhr.readyState === XMLHttpRequest.DONE) {
    //         // checking request status
    //         if (xhr.status === 200) {
    //             console.log(xhr);
    //             console.log(xhr.responseText);
    //         } else {
    //             console.log('Problem Occured');
    //         }

    //     } else {
    //         console.log('Could not make request');
    //     }
    // };

    // ********* onLoad method***********
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log(xhr);
            console.log(xhr.responseText);
        } else {
            console.log('problem occured');
        }
    }

    // *********** onProgress **********
    xhr.onprogress = (e) => {
            console.log(e.loaded);
            console.log(e.total);
        }
        // *********** onError **********
    xhr.onerror = () => {
            console.log('Network not found');
        }
        // *********** onLoadStart **********
    xhr.onloadstart = () => {
            console.log('transiction start');
        }
        // *********** onLoadend **********
    xhr.onloadend = () => {
            console.log('transiction end');
        }
        // *********** onAbort **********
    xhr.onabort = () => {
        console.log('Transiction aborted');
    }

    xhr.send();

}