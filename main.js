
function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/BpOfQvwZb/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error,results) {
    if(error) {
        console.error(error);
    }
    else{
        console.log(results);
        random_R = Math.floor(Math.random() * 255) + 1;
        random_B = Math.floor(Math.random() * 255) + 1;
        random_G = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result-name").innerHTML = 'I can Hear '+results[0].label;
        document.getElementById("result-confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
        //document.getElementById("result-name").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        //document.getElementById("result-confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('img');
        if(results[0].label=="bark") {
            img.src = 'dog.png';
        }

        else if(results[0].label =="meow") {
            img.src = 'cat.png';
        }

        else if(results[0].label =="roar") {
            img.src = 'lion.png';
        }

    }
    
}