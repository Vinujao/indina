Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:90
});

Webcam.attach("transpnder")

function capture() {
    Webcam.snap(
        function(img) {
         document.getElementById("reading").innerHTML=`<img src=${img} id="capimg">`   
        }
       
    )
    document.getElementById("nice").innerHTML="THIS Image???"
}

//Code for checking M15 version//
console.log(ml5.version)
//Code for importing the modle
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/g1cQt0fv1/model.json",modelloaded)
//Check whetther model has loaded or not
function modelloaded(){
    console.log("The model in load")
}

function speak() {
    api=window.speechSynthesis
    Speechdata1="First prediction is "+prediction1
    Speechdata2="And the second prediction is"+prediction2
    utterthis=new SpeechSynthesisUtterance(Speechdata1+Speechdata2)
    api.speak(utterthis)
}