//$('.dropdown-trigger').dropdown();
var youtube = function () {
    

    var apiUrl =
        'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyANhit3zRIVp92To57bvDn81fSUloR_QY4&type=video&q=howtoplay + clue'

    fetch(apiUrl, {
        headers: {
            'Content-Type': 'application/json'
        },

    })
        .then(response => {
            return response.json()
        }).then(data => {
            console.log(data);
            var videoId = data.items[0].id.videoId
            console.log(videoId);
            var videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`
            console.log(videoUrl);
        })

        .catch(error => {
            console.log(error);
        });
}


youtube()

