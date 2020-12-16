const btn = document.getElementById('btn-ajax');
const table = document.getElementById('table');
btn.addEventListener('click', makeRequest);

function makeRequest() {
    // Create XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    // Open XMLHttpRequest function
    xhr.open('GET', "https://jsonplaceholder.typicode.com/posts", true);
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log(xhr.response);
            let responseData = xhr.response;
            for (let i = 0; i < responseData.length; i++) {
                table.innerHTML += `<tr><td>${responseData[i].userId}</td>
                <td>${responseData[i].id}</td><td>${responseData[i].title}</td>
                <td>${responseData[i].body}</td></tr>`;
            }
        } else {
            console.log('error occured');
        }
    }
    xhr.send();


}