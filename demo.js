const btn = document.getElementById('btn-ajax');
btn.addEventListener('click', makeRequest);

function makeRequest() {
    // Create XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    // Open XMLHttpRequest function
    xhr.open('GET', "data.txt", true);
    // XMLHttpRequest Handler
    xhr.onreadystatechange = () => {
        // checking ready state
        if (xhr.readyState === XMLHttpRequest.DONE) {
            // checking request status
            if (xhr.status === 200) {
                console.log(xhr);
                console.log(xhr.responseText);
            } else {
                console.log('Problem Occured');
            }

        } else {
            console.log('Could not make request');
        }
    };
    xhr.send();

}