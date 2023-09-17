
// 169 - 178
// التكليف 02 \ التكليف 03 | التكليف 04

let responseJSON;
let req = new XMLHttpRequest();
req.open("GET", "articles.json", true);
req.send();
req.onreadystatechange = function () {
    if(req.status === 200 && req.readyState === 4) {
        responseJSON = req.responseText;
        let jsonData = JSON.parse(responseJSON);

        console.log('Response Data:');
        console.log(responseJSON);
        console.log(jsonData);

        console.log('Data Loaded!');
        console.log("-------------------------");

        let mainData = [...jsonData];

        mainData.forEach(article => {
            article.depart = "All";
        });
        
        console.log("after change ",mainData);

        
        const updatedData = JSON.stringify(mainData);
        console.log("updatedData:");
        console.log(updatedData);

        console.log("-------------------------");

        let dataDiv = document.createElement("div");
        dataDiv.id = "data";

        mainData.forEach(article => {
            let articleDiv = document.createElement("div");
            let titleElement = document.createElement("h2");
            let contentElement = document.createElement("p");
            let authorElement = document.createElement("p");
            let categoryElement = document.createElement("p");

            titleElement.textContent = article.title;
            contentElement.textContent = article.content;
            authorElement.textContent = `Author: ${article.authorName}`;
            categoryElement.textContent = `Category: ${article.depart}`;

            articleDiv.appendChild(titleElement);
            articleDiv.appendChild(contentElement);
            articleDiv.appendChild(authorElement);
            articleDiv.appendChild(categoryElement);

            dataDiv.appendChild(articleDiv);
        });

        document.body.appendChild(dataDiv);
    }
}




