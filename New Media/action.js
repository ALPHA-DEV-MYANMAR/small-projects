var url = 'https://newsapi.org/v2/everything?' +
    'q=Apple&' +
    'from=2021-11-08&' +
    'sortBy=popularity&' +
    'apiKey=f8b46fa7754b41b6a3f630da6aa45f45';

    fetch(url)
    .then(response => response.json())
    .then(data => {
        let article = data.articles;
        let information = document.getElementById('information');
        console.log(article);
        for(data of article){
            information.innerHTML += `
            <p>
                ${data.title}
            </p>

            <br>

            <img src="${data.urlToImage}" alt="">

            <br>

            <span>Date : ${data.publishedAt}</span>
            <br>
            <p>Content: ${data.content}
            </p>
            <br>
            <P>
                Descripton: ${data.description}
            </P> 

            <hr>

            `;
        }
    });