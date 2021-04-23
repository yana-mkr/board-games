//$('.dropdown-trigger').dropdown();

var pullGames = function (search) {
    var apiURL = "https://api.boardgameatlas.com/api/search?name=" + search + "&client_id=JLBr5npPhV"

    fetch(apiURL)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                })
            } else {
                alert("Error: " + response.statusText);
            }
        })
        .catch(function (error) {
            alert("Unable to connect");
        });
};

pullGames()