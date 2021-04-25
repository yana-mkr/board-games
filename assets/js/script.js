var cardDiv = document.querySelector(".games")

$('.dropdown-trigger').dropdown();

var youtube = function (card, searchTerm) {
    var apiYoutube =
        'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAB2XQ98P3h7KXGdn5XV2P09buyExiPDT4&type=video&q=howtoplay%20' + searchTerm
    //console.log(apiYoutube)
    return fetch(apiYoutube, {
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(response => {
        return response.json()
    }).then(data => {
        var videoId = data.items[0].id.videoId
        var videoUrl = 'https://www.youtube.com/watch?v=' + videoId
        var ytLink = document.createElement("a")
        var link2Text = document.createTextNode("Game Tutorial")
        ytLink.appendChild(link2Text)
        ytLink.href = videoUrl
        card.append(ytLink)
    })
        .catch(error => {
            console.log(error);
        });
}

var pullGames = function () {
    var apiURL = "https://api.boardgameatlas.com/api/search?name=Clue&client_id=JLBr5npPhV"

    fetch(apiURL)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {

                    console.log(data);
                    //console.log(data.games[0].name)

                    for (var i = 0; i < data.games.length; i++) {
                        if (i < 10) {
                            // how to limit to 10?
                            var card = document.createElement("div")
                            card.classList.add("card")
                            cardDiv.appendChild(card)

                            var title = document.createElement("h3")
                            title.classList.add("card-content")
                            title.textContent = data.games[i].name
                            card.appendChild(title)

                            var img = document.createElement("img")
                            img.setAttribute("src", data.games[i].thumb_url)
                            img.classList.add("img")
                            card.append(img)

                            var price = document.createElement("p")
                            price.classList.add("card-content")
                            price.textContent = "$" + data.games[i].price
                            card.appendChild(price)

                            // https://stackoverflow.com/questions/4772774/how-do-i-create-a-link-using-javascript
                            var buyLink = document.createElement("a")
                            var link1Text = document.createTextNode("Buy Here")
                            buyLink.appendChild(link1Text)
                            buyLink.href = data.games[i].url
                            buyLink.classList.add("card-content")
                            card.appendChild(buyLink)

                            youtube(card, data.games[i].name)
                        }
                    }
                })
            }

        });

}
pullGames()

