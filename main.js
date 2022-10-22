function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Y_PZIVmQP/model.json", modelReady)
}

function modelReady() {
    classifier.classify(gotResults)
}
function gotResults(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        document.getElementById("resultConfidence").innerHTML = "confidence = " + (result[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("resultLabel").innerHTML = "I can hear " + result[0].label;
        r = Math.floor(Math.random() * 255) + 1
        g = Math.floor(Math.random() * 255) + 1
        b = Math.floor(Math.random() * 255) + 1
        document.getElementById("resultConfidence").style.color = "rgb(" + r + "," + g + "," + b + ")";
        document.getElementById("resultLabel").style.color = "rgb(" + r + "," + g + "," + b + ")";
        img1 = document.getElementById("image")

        if (result[0].label == 'cat') {
            img1.src = "CuteCat.webp";

        } else if (result[0].label == 'dog') {
            img1.src = "CuteDog.webp";

        } else if (result[0].label == 'elephant') {
            img1.src = "CuteElephant.jpg";

        } else {
            img1.src = "Ear.jpg";


        }
    }

}