function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ZTEX5REJm//model.json',modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

.copy_right_footer
{
    color: chocolate;
}
