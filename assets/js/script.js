//$('.dropdown-trigger').dropdown();
var youtube = function () {

    var apiUrl =
        'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyANhit3zRIVp92To57bvDn81fSUloR_QY4&type=video&q=monopoly'
    //--header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
    //--header 'Accept: application/json' \
    //--compressed
    fetch(apiUrl, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            console.log(response);
            // handle the response
        })

        .catch(error => {
            console.log(error);
            // handle the error
        });
}

//fetch(apiUrl)
//.then(response => response.json())
//.then(data => console.log(data))
youtube()