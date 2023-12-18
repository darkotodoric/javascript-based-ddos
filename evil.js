setInterval(function(){
    var image = new Image()
    var rand = Math.floor(Math.random() * 999999999999999999)

    image.src = 'https://example.com/images/some-image.png?' + rand;
}, 10);