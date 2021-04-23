//$('.dropdown-trigger').dropdown();

var pullGames = function () {
    var apiURL = "https://api.boardgameatlas.com/api/search?name=Clue&client_id=JLBr5npPhV"

    fetch(apiURL)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                })
            }
        });
}

pullGames()