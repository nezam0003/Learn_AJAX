const btn = document.getElementById('btn-ajax');
const showData = document.getElementById('show-data');
const nam = document.getElementById('name-id');
const age = document.getElementById('age-id');
const position = document.getElementById('position-id');
btn.addEventListener('click', makeRequest);

function makeRequest() {
    // Create XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    // Open XMLHttpRequest function
    xhr.open('GET', "data.json", true);
    // xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.status === 200) {
            // work with simple text file
            // showData.innerText = xhr.responseText;

            // work with json data
            const obj = JSON.parse(xhr.response);
            nam.innerText = obj.name;
            age.innerText = obj.age;
            position.innerText = obj.position;

        } else {
            console.log('error occured');
        }
    }
    xhr.send();

}