//  179 - 188 (final)
// using promises
function getDataFromJsonFile(url) {
    return new Promise((resolve, reject) => {
        let requestData = new XMLHttpRequest();
        requestData.open('GET', url, true);

        requestData.onload = function () {
            if (requestData.status === 200 && requestData.readyState === 4) {
                let jsonData = JSON.parse(requestData.responseText);
                resolve(jsonData);
            } 
            else {
                reject("noooo");
            }
        };    
        requestData.send();
    });
}

getDataFromJsonFile('data.json')
    .then((jsonData) => {
        jsonData.length = 5;
        jsonData.forEach(item => {
            const divHTML = document.createElement('div');

            divHTML.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            `;
            document.body.appendChild(divHTML);
        });
    })
    .catch((message) => console.log(message));

/* ------------------------------------------------------------------------------------------------------- */
// using Fetch API
function getDataFromJsonFile2(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        });
}

getDataFromJsonFile2('data.json')
    .then(jsonData => {
        jsonData.length = 5;
        jsonData.forEach(item => {
            const div = document.createElement('div');

            div.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            `;
            document.body.appendChild(div);
        });
    })
    .catch((error) => console.error(`Error: ${error.message}`));
