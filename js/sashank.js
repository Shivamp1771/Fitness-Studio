/*Body mass index*/
var weight, height, measure, bmi, error ;
function $(id) { 
    return document.getElementById(id); 
};
function calculate() {
	weight = $("weight").value;
	height = $("height").value;
	error = "Please enter some values";
	height /= 100;
	height *= height;
	bmi = weight/height;
	bmi = bmi.toFixed(1);

	
	

	if (weight === 0 ) {
		$("results").innerHTML = error;
	} else if (height === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else if (weight < 0) {
		document.getElementById("results").innerHTML = "Negative Values are not Allowed";
     }
	else{
        if (bmi <= 18.4) {
		measure = "Your BMI is " + bmi + " which means " + "you are Underweight";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = "Your BMI is " + bmi + " which means " + "You are Ideal";
	} else if (bmi >= 25 && bmi <= 29.9) {
		measure = "Your BMI is " + bmi + " which means " + "You are Overweight";
	} else if (bmi >= 30) {
		measure = "Your BMI is " + bmi + " which means " + "You are Obese";
	}
        $("results").innerHTML = measure;
    }

}

/*Slider*/
var slider_content = document.getElementById('box');

  	// contain images in an array
    var image = ['Images/ab','Images/bc','Images/cd','Images/de','Images/ef'];

    var i = image.length;


    // function for next slide 

 function nextImg(){
    	if (i < image.length) {
    		i = i+1;
    	}else{
    		i = 1;
        }
     slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";
    }


    // function for prew slide
 function prewImg(){

    	if (i < image.length+1 && i>1) {
    		i= i-1;
    	}else{
    		i = image.length;
    	}
    	  slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";

    }

/*code for video*/
var videos = document.getElementsByClassName("youtube");

for (var i=0; i<videos.length; i++) {

  var youtube = videos[i];

  // Based on the YouTube ID, we can easily find the thumbnail image
  var img = document.createElement("img");
  img.setAttribute("src", "http://i.ytimg.com/vi/"
                          + youtube.id + "/hqdefault.jpg");
  img.setAttribute("class", "thumb");

  youtube.appendChild(img);
//  youtube.appendChild(circle);

  // Attach an onclick event to the YouTube Thumbnail
  youtube.onclick = function() {

    // Create an iFrame with autoplay set to true
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src",
          "https://www.youtube.com/embed/" + this.id
        + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1");

    // The height and width of the iFrame should be the same as parent
    iframe.style.width  = this.style.width;
    iframe.style.height = this.style.height;

    // Replace the YouTube thumbnail with YouTube HTML5 Player
    this.parentNode.replaceChild(iframe, this);

  };
}
