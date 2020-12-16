const btn = document.getElementById('btn-ajax');
const userId = document.getElementById('userId');
const uId = document.getElementById('uId');
const userTitle = document.getElementById('title');
const userBody = document.getElementById('body');
btn.addEventListener('click', makeRequest);

function makeRequest() {
    // Create XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    // Open XMLHttpRequest function
    xhr.open('GET', "https://jsonplaceholder.typicode.com/posts/1", true);
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.status === 200) {
            userId.innerText = xhr.response.userId;
            uId.innerText = xhr.response.id;
            userTitle.innerText = xhr.response.title;
            userBody.innerText = xhr.response.body;
        } else {
            console.log('error occured');
        }
    }
    xhr.send();


}