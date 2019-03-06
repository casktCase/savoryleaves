function getGallery() {

    var result = '';
    var numImages = 23;
    var imageSize = 220;
    var randomList = [];

    for (var i = 0; i <= numImages; i++) {
        randomList.push(i);
    }

    randomList = shuffle(randomList);

    for (i = 0; i < randomList.length; i++) {

        result += ' <div class="brick"><img width=' + imageSize + ' src="images/about/about' + randomList[i] + '.jpg"></div>';
        //the below commented out result returns a random size based on an array var imageSizes = [220,300,190]
        //result += ' <div class="brick"><img width=' + imageSizes[Math.floor(Math.random() * imageSizes.length)] + ' src="images/about/about' + randomList[i] + '.jpg"></div>';
    }

    document.getElementById("gallery").innerHTML = result;
}

//Shuffles contents of array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

window.onload = function () {
    getGallery();

}