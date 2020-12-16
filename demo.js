const btn = document.getElementById('btn-ajax');
const showData = document.getElementById('show-data');
btn.addEventListener('click', makeRequest);

function makeRequest() {
    // Create XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    // Open XMLHttpRequest function
    xhr.open('GET', "data.txt", true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            showData.innerText = xhr.responseText;
        } else {
            console.log('error occured');
        }
    }
    xhr.send();

}