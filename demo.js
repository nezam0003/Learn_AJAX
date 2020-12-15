document.getElementById('btn-ajax').addEventListener('click', makeRequest);

function makeRequest() {
    const xhr = new XMLHttpRequest();
    if (xhr.readyState === 0) {
        console.log('Open method has not called yet');
    }
    xhr.open('GET', 'data.txt', true);
    if (xhr.readyState === 1) {
        console.log('Open method has called');
    }
    //*********** onReadyStateChange***********
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 2) {
            console.log('Response header');
        }
        if (xhr.readyState === 3) {
            console.log('Loading state...');
        }

        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log(xhr);
                console.log(xhr.responseText);
            } else {
                console.log('problem occured');
            }
        }
    }
    xhr.send();
}