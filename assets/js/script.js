var cardDiv = document.getElementsByClassName("card")

$('.dropdown-trigger').dropdown();

var pullGames = function () {
    var apiURL = "https://api.boardgameatlas.com/api/search?name=Clue&client_id=JLBr5npPhV"

    fetch(apiURL)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    console.log(data.games[0].name)
                })

            }

        });
    for (var i = 0; i < 10; i++) {
        // set length to 10 games
        var card = document.createElement("div")
        card.textContent = data.games[i].name
        card.classList.add("card")
        cardDiv.append(card)

        // how to pull image as data and not URL?
        // var img = document.createElement("img")
        // img.textContent = data.games.thumb_url
        // cardDiv.append(img)

        var price = document.createElement("p")
        price.textContent = data.games[i].price
        cardDiv.append(price)

        var buyLink = document.createElement("a")
        buyLink.textContent = data.games[i].url
        cardDiv.append(buyLink)

        // var ytLink = document.createElement("a")
        // ytLink.textContent = pull youtube ytLink
        // cardDiv.append(ytLink)
    }
}
pullGames()